import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ImagePlus, Loader2, X } from "lucide-react";
import {
  INPUT_CLASS,
  OPTION_ACTIVE,
  OPTION_BTN,
  OPTION_IDLE,
} from "../formStyles";
import {
  isAllowedImageFile,
  isHeicLike,
  normalizeImageFile,
} from "../normalizeImageFile";

function ImageUploadField({
  question,
  value,
  onChange,
  notesValue,
  onNotesChange,
}) {
  const inputRef = useRef(null);
  const localPreviewRef = useRef("");
  const [uploading, setUploading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(value || "");

  useEffect(() => {
    if (!uploading) {
      setPreview(value || localPreviewRef.current || "");
    }
  }, [value, uploading]);

  const uploadFile = async (rawFile) => {
    if (!rawFile) return;
    if (!isAllowedImageFile(rawFile)) {
      setError("Please choose an image (JPEG, PNG, WebP, or iPhone HEIC)");
      return;
    }
    if (rawFile.size > 12 * 1024 * 1024) {
      setError("Image must be 12MB or smaller");
      return;
    }

    setError(null);
    setUploading(true);
    setStatusText(
      isHeicLike(rawFile) ? "Converting iPhone photo…" : "Uploading…",
    );

    let file = rawFile;
    try {
      file = await normalizeImageFile(rawFile);
    } catch {
      setUploading(false);
      setStatusText("");
      setError("Could not convert this iPhone photo. Try exporting as JPEG.");
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setUploading(false);
      setStatusText("");
      setError("Image must be 8MB or smaller after conversion");
      return;
    }

    setStatusText("Uploading…");

    if (localPreviewRef.current) {
      URL.revokeObjectURL(localPreviewRef.current);
    }
    const localUrl = URL.createObjectURL(file);
    localPreviewRef.current = localUrl;
    setPreview(localUrl);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000);

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      if (!apiUrl) {
        throw new Error("API URL is not configured");
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success || !data.url) {
        throw new Error(data.message || "Upload failed");
      }

      onChange(data.url);
      setPreview(localUrl);
    } catch (err) {
      URL.revokeObjectURL(localUrl);
      localPreviewRef.current = "";
      setPreview(value || "");
      const message =
        err.name === "AbortError"
          ? "Upload timed out. Is the local backend running?"
          : err.message || "Upload failed. Please try again.";
      setError(message);
    } finally {
      clearTimeout(timeoutId);
      setUploading(false);
      setStatusText("");
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const clear = () => {
    if (localPreviewRef.current) {
      URL.revokeObjectURL(localPreviewRef.current);
      localPreviewRef.current = "";
    }
    setPreview("");
    onChange("");
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="mx-auto flex min-h-0 w-full max-w-xl flex-1 flex-col gap-2 text-left">
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.heic,.heif,image/heic,image/heif,.jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={(e) => uploadFile(e.target.files?.[0])}
      />

      {preview ? (
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/50 bg-[#1a3f4a]/08 shadow-[0_4px_14px_rgba(30,29,36,0.08)]">
          <img
            src={preview}
            alt="Feature tile wall"
            className="max-h-full max-w-full object-contain"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-[#1a3f4a]/75 px-3 py-2 backdrop-blur-sm">
            <button
              type="button"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
              className="text-sm font-bold text-white underline-offset-2 hover:underline disabled:opacity-50"
            >
              Replace
            </button>
            <button
              type="button"
              disabled={uploading}
              onClick={clear}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 disabled:opacity-50"
              aria-label="Remove photo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          {uploading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1a3f4a]/45">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
              <span className="text-sm font-bold text-white">
                {statusText || "Uploading…"}
              </span>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="flex min-h-0 flex-1 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#2D6B7A]/45 bg-white/40 px-5 text-center transition hover:border-[#2D6B7A] hover:bg-white/55 disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-9 w-9 animate-spin text-[#2D6B7A]" />
          ) : (
            <ImagePlus className="h-9 w-9 text-[#2D6B7A]" />
          )}
          <span className="text-base font-bold text-[#1a3f4a] sm:text-lg">
            {uploading ? statusText || "Uploading…" : "Upload photo"}
          </span>
          <span className="text-xs text-[#1e1d24]/55 sm:text-sm">
            JPEG, PNG, WebP or iPhone HEIC · max 8MB
          </span>
        </button>
      )}

      {error && (
        <p className="shrink-0 text-center text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      {question.notesField && (
        <label className="block shrink-0">
          <span className="mb-1 block text-[11px] font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
            Notes (optional)
          </span>
          <input
            type="text"
            value={notesValue || ""}
            onChange={(e) => onNotesChange?.(e.target.value)}
            placeholder={
              question.notesPlaceholder ||
              "Describe which wall needs the feature tile"
            }
            className={`${INPUT_CLASS} py-3`}
          />
        </label>
      )}
    </div>
  );
}

function useShortViewport() {
  const [short, setShort] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-height: 820px)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-height: 820px)");
    const onChange = () => setShort(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return short;
}

function SingleWithCustom({
  question,
  value,
  onChange,
  customValue,
  onCustomChange,
  onPatchAnswers,
}) {
  const gridRef = useRef(null);
  const inputWrapRef = useRef(null);
  const tlRef = useRef(null);
  const isCustom = value === "Custom";
  const options = question.options || [];
  const short = useShortViewport();

  useEffect(() => {
    const grid = gridRef.current;
    const input = inputWrapRef.current;
    if (!grid || !input) return;

    tlRef.current?.kill();
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tlRef.current = tl;

    if (isCustom) {
      tl.to(
        grid,
        {
          width: short ? "78%" : "72%",
          maxWidth: short ? 400 : 440,
          gap: short ? 8 : 12,
          duration: 0.5,
        },
        0,
      );
      tl.fromTo(
        input,
        { autoAlpha: 0, y: 18, maxHeight: 0, marginTop: 0 },
        {
          autoAlpha: 1,
          y: 0,
          maxHeight: short ? 110 : 160,
          marginTop: short ? 10 : 20,
          duration: 0.45,
          ease: "power3.out",
          pointerEvents: "auto",
        },
        0.12,
      );
    } else {
      tl.to(
        input,
        {
          autoAlpha: 0,
          y: 10,
          maxHeight: 0,
          marginTop: 0,
          duration: 0.3,
          ease: "power2.in",
          pointerEvents: "none",
        },
        0,
      );
      tl.to(
        grid,
        {
          width: "100%",
          maxWidth: 576,
          gap: short ? 10 : 14,
          duration: 0.45,
        },
        0.05,
      );
    }

    return () => tl.kill();
  }, [isCustom, short]);

  const selectOption = (opt) => {
    if (opt === "Custom") {
      if (question.customField && onPatchAnswers) {
        onPatchAnswers({ [question.id]: "Custom" });
        return;
      }
      onChange("Custom");
      return;
    }
    if (question.customField && onPatchAnswers) {
      onPatchAnswers({
        [question.id]: opt,
        [question.customField]: "",
      });
      return;
    }
    onChange(opt);
    onCustomChange?.("");
  };

  return (
    <div className="bsf-q-choice mx-auto flex w-full max-w-xl flex-col items-center px-0">
      <div
        ref={gridRef}
        className="bsf-q-choice-grid mx-auto grid w-full max-w-full grid-cols-2"
        style={{ width: "100%", maxWidth: 576, gap: short ? 10 : 14 }}
      >
        {options.map((opt) => {
          const standalone =
            opt === "Custom" && options.length % 2 === 1;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => selectOption(opt)}
              className={`${OPTION_BTN} bsf-q-opt flex min-h-[2.85rem] min-w-0 w-full items-center justify-center px-2 text-sm cursor-pointer text-center leading-tight sm:min-h-[3.25rem] sm:px-4 sm:text-base ${
                standalone ? "col-span-2 justify-self-center" : ""
              } ${value === opt ? OPTION_ACTIVE : OPTION_IDLE}`}
              style={
                standalone
                  ? { width: "calc((100% - 12px) / 2)", maxWidth: "100%" }
                  : undefined
              }
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div
        ref={inputWrapRef}
        className="bsf-q-extra mx-auto w-full max-w-md overflow-hidden"
        style={{
          opacity: 0,
          maxHeight: 0,
          marginTop: 0,
          pointerEvents: "none",
        }}
        aria-hidden={!isCustom}
      >
        <label className="group relative block text-left">
          <span className="mb-1.5 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
            {question.customPlaceholder || "Enter custom value"}
          </span>
          <span className="relative block">
            <input
              type="text"
              value={customValue || ""}
              onChange={(e) => onCustomChange?.(e.target.value)}
              placeholder={question.customPlaceholder || "Enter custom value"}
              className={`peer ${INPUT_CLASS} bsf-q-input`}
              tabIndex={isCustom ? 0 : -1}
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 transition peer-focus:opacity-100">
              <span className="h-2 w-2 rounded-full bg-[#2D6B7A]" />
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

/** Other — same smooth switch animation as Custom */
function SingleWithOther({
  question,
  value,
  onChange,
  otherValue,
  onOtherChange,
  onPatchAnswers,
}) {
  const gridRef = useRef(null);
  const inputWrapRef = useRef(null);
  const tlRef = useRef(null);
  const isOther = value === "Other";
  const otherField = question.otherField || `${question.id}Other`;
  const options = question.options || [];
  const short = useShortViewport();

  useEffect(() => {
    const grid = gridRef.current;
    const input = inputWrapRef.current;
    if (!grid || !input) return;

    tlRef.current?.kill();
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tlRef.current = tl;

    if (isOther) {
      tl.to(
        grid,
        {
          width: short ? "78%" : "72%",
          maxWidth: short ? 400 : 440,
          gap: short ? 8 : 12,
          duration: 0.5,
        },
        0,
      );
      tl.fromTo(
        input,
        { autoAlpha: 0, y: 18, maxHeight: 0, marginTop: 0 },
        {
          autoAlpha: 1,
          y: 0,
          maxHeight: short ? 110 : 160,
          marginTop: short ? 10 : 20,
          duration: 0.45,
          ease: "power3.out",
          pointerEvents: "auto",
        },
        0.12,
      );
    } else {
      tl.to(
        input,
        {
          autoAlpha: 0,
          y: 10,
          maxHeight: 0,
          marginTop: 0,
          duration: 0.3,
          ease: "power2.in",
          pointerEvents: "none",
        },
        0,
      );
      tl.to(
        grid,
        {
          width: "100%",
          maxWidth: 576,
          gap: short ? 10 : 14,
          duration: 0.45,
        },
        0.05,
      );
    }

    return () => tl.kill();
  }, [isOther, short]);

  const selectOption = (opt) => {
    if (opt === "Other") {
      if (onPatchAnswers) {
        onPatchAnswers({ [question.id]: "Other" });
        return;
      }
      onChange("Other");
      return;
    }
    if (onPatchAnswers) {
      onPatchAnswers({
        [question.id]: opt,
        [otherField]: "",
      });
      return;
    }
    onChange(opt);
    onOtherChange?.("");
  };

  return (
    <div className="bsf-q-choice mx-auto flex w-full max-w-xl flex-col items-center px-0">
      <div
        ref={gridRef}
        className="bsf-q-choice-grid mx-auto grid w-full max-w-full grid-cols-2"
        style={{ width: "100%", maxWidth: 576, gap: short ? 10 : 14 }}
      >
        {options.map((opt) => {
          const standalone =
            opt === "Other" && options.length % 2 === 1;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => selectOption(opt)}
              className={`${OPTION_BTN} bsf-q-opt flex min-h-[2.85rem] min-w-0 w-full items-center justify-center px-2 text-sm cursor-pointer text-center leading-tight sm:min-h-[3.25rem] sm:px-4 sm:text-base ${
                standalone ? "col-span-2 justify-self-center" : ""
              } ${value === opt ? OPTION_ACTIVE : OPTION_IDLE}`}
              style={
                standalone
                  ? { width: "calc((100% - 12px) / 2)", maxWidth: "100%" }
                  : undefined
              }
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div
        ref={inputWrapRef}
        className="bsf-q-extra mx-auto w-full max-w-md overflow-hidden"
        style={{
          opacity: 0,
          maxHeight: 0,
          marginTop: 0,
          pointerEvents: "none",
        }}
        aria-hidden={!isOther}
      >
        <label className="group relative block text-left">
          <span className="mb-1.5 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
            Please specify
          </span>
          <span className="relative block">
            <input
              type="text"
              value={otherValue || ""}
              onChange={(e) => onOtherChange?.(e.target.value)}
              placeholder={question.otherPlaceholder || "Please specify"}
              className={`peer ${INPUT_CLASS} bsf-q-input`}
              tabIndex={isOther ? 0 : -1}
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 transition peer-focus:opacity-100">
              <span className="h-2 w-2 rounded-full bg-[#2D6B7A]" />
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default function QuestionRenderer({
  question,
  value,
  onChange,
  answers = {},
  onSetAnswer,
  onPatchAnswers,
}) {
  if (question.type === "yesNo") {
    return (
      <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4">
        {[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ].map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`${OPTION_BTN} min-h-[3.5rem] sm:min-h-[4rem] ${
              value === opt.value ? OPTION_ACTIVE : OPTION_IDLE
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === "noteAck") {
    return (
      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 px-1 text-center sm:gap-8">
        <p className="text-[0.95rem] font-medium leading-relaxed text-[#1e1d24] sm:text-lg">
          {question.note}
        </p>
        <button
          type="button"
          onClick={() => onChange("noted")}
          className={`${OPTION_BTN} ${OPTION_ACTIVE} min-h-[3.25rem] min-w-[10rem] px-10 sm:min-h-[3.75rem]`}
        >
          {question.confirmLabel || "Noted"}
        </button>
      </div>
    );
  }

  if (question.type === "single") {
    const hasCustom =
      question.options?.includes("Custom") && question.customField;

    if (hasCustom) {
      return (
        <SingleWithCustom
          question={question}
          value={value}
          onChange={onChange}
          customValue={answers[question.customField]}
          onCustomChange={(val) => onSetAnswer?.(question.customField, val)}
          onPatchAnswers={onPatchAnswers}
        />
      );
    }

    if (question.options?.includes("Other")) {
      const otherField = question.otherField || `${question.id}Other`;
      return (
        <SingleWithOther
          question={question}
          value={value}
          onChange={onChange}
          otherValue={answers[otherField]}
          onOtherChange={(val) => onSetAnswer?.(otherField, val)}
          onPatchAnswers={onPatchAnswers}
        />
      );
    }

    return (
      <div
        className={`bsf-q-single-grid mx-auto grid w-full max-w-xl ${
          question.options.every((o) => String(o).length <= 4)
            ? "grid-cols-3 gap-2 sm:gap-3"
            : "grid-cols-2 gap-2 sm:gap-3.5"
        }`}
      >
        {question.options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`${OPTION_BTN} bsf-q-opt min-h-[2.5rem] min-w-0 w-full px-2 text-center text-[12px] leading-tight sm:min-h-[3.25rem] sm:px-4 sm:text-base ${
              value === opt ? OPTION_ACTIVE : OPTION_IDLE
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  }

  if (question.type === "multi") {
    const selected = Array.isArray(value) ? value : [];
    const toggle = (opt) => {
      if (selected.includes(opt)) {
        onChange(selected.filter((v) => v !== opt));
      } else {
        onChange([...selected, opt]);
      }
    };

    return (
      <div className="bsf-q-multi-grid mx-auto grid w-full max-w-xl grid-cols-2 gap-2.5 sm:gap-3.5">
        {question.options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className={`${OPTION_BTN} bsf-q-opt flex min-h-[3.25rem] w-full items-center justify-start gap-2 px-2.5 py-2 text-left sm:min-h-[3.5rem] sm:gap-3 sm:px-4 ${
                active ? OPTION_ACTIVE : OPTION_IDLE
              }`}
            >
              <span
                className={`inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-bold sm:h-5 sm:w-5 sm:text-[11px] ${
                  active
                    ? "border-white/80 bg-white text-[#2D6B7A]"
                    : "border-[#1e1d24]/20 bg-white text-transparent"
                }`}
              >
                ✓
              </span>
              <span className="min-w-0 flex-1 break-words text-left text-[12px] font-bold leading-snug sm:text-base">
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (question.type === "imageUpload") {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <ImageUploadField
          question={question}
          value={value}
          onChange={onChange}
          notesValue={
            question.notesField ? answers[question.notesField] : undefined
          }
          onNotesChange={(val) =>
            question.notesField && onSetAnswer?.(question.notesField, val)
          }
        />
      </div>
    );
  }

  if (question.type === "textarea") {
    return (
      <textarea
        rows={4}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        className={`${INPUT_CLASS} mx-auto block max-w-xl resize-none`}
      />
    );
  }

  return (
    <span className="relative mx-auto block max-w-xl">
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        className={`peer ${INPUT_CLASS}`}
      />
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 transition peer-focus:opacity-100">
        <span className="h-2 w-2 rounded-full bg-[#2D6B7A]" />
      </span>
    </span>
  );
}
