import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Camera, Check, ImagePlus, Loader2, StickyNote, X } from "lucide-react";
import {
  extrasNoteKey,
  extrasPhotosKey,
  getQuestionExtras,
} from "../../../data/bathroomSelectionCategories";
import { INPUT_CLASS, PRIMARY_BTN } from "../formStyles";
import {
  isAllowedImageFile,
  isHeicLike,
  normalizeImageFile,
} from "../normalizeImageFile";

export default function QuestionExtrasDrawer({
  question,
  answers,
  onSetAnswer,
  onOpenChange,
}) {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const sheetRef = useRef(null);
  const tabRef = useRef(null);
  const hasOpenedRef = useRef(false);
  const galleryRef = useRef(null);
  const cameraRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [error, setError] = useState(null);

  const qid = question.id;
  const extras = getQuestionExtras(answers, qid);
  const notes = answers[extrasNoteKey(qid)] || "";
  const photos = Array.isArray(answers[extrasPhotosKey(qid)])
    ? answers[extrasPhotosKey(qid)]
    : [];

  useEffect(() => {
    onOpenChange?.(open);
  }, [open, onOpenChange]);

  useEffect(() => {
    setOpen(false);
  }, [qid]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const sheet = sheetRef.current;
    if (!overlay || !sheet) return;

    gsap.killTweensOf([overlay, sheet]);

    if (open) {
      hasOpenedRef.current = true;
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: "auto" });
      gsap.set(sheet, { y: "108%", autoAlpha: 1 });
      const tl = gsap.timeline();
      tl.to(overlay, { autoAlpha: 1, duration: 0.28, ease: "power2.out" }, 0);
      tl.to(
        sheet,
        { y: "0%", duration: 0.55, ease: "power3.out" },
        0.04,
      );
      return () => tl.kill();
    }

    if (!hasOpenedRef.current) {
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(sheet, { y: "108%" });
      return;
    }

    const tl = gsap.timeline();
    tl.to(
      sheet,
      { y: "108%", duration: 0.42, ease: "power2.in" },
      0,
    );
    tl.to(
      overlay,
      {
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.in",
        pointerEvents: "none",
      },
      0.08,
    );
    return () => tl.kill();
  }, [open]);

  const uploadFiles = async (fileList) => {
    const files = Array.from(fileList || []).filter(Boolean);
    if (!files.length) return;

    setError(null);
    setUploading(true);

    const nextPhotos = [...photos];

    try {
      for (const rawFile of files) {
        if (!isAllowedImageFile(rawFile)) {
          throw new Error("Please choose an image (JPEG, PNG, WebP, or HEIC)");
        }
        if (rawFile.size > 12 * 1024 * 1024) {
          throw new Error("Image must be 12MB or smaller");
        }

        setStatusText(
          isHeicLike(rawFile) ? "Converting iPhone photo…" : "Uploading…",
        );

        const file = await normalizeImageFile(rawFile);
        if (file.size > 8 * 1024 * 1024) {
          throw new Error("Image must be 8MB or smaller after conversion");
        }

        const apiUrl = import.meta.env.VITE_API_BASE_URL;
        if (!apiUrl) throw new Error("API URL is not configured");

        const formData = new FormData();
        formData.append("file", file);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000);
        const response = await fetch(`${apiUrl}/upload`, {
          method: "POST",
          body: formData,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.success || !data.url) {
          throw new Error(data.message || "Upload failed");
        }
        nextPhotos.push(data.url);
        onSetAnswer(extrasPhotosKey(qid), [...nextPhotos]);
      }
    } catch (err) {
      setError(
        err.name === "AbortError"
          ? "Upload timed out. Please try again."
          : err.message || "Upload failed. Please try again.",
      );
    } finally {
      setUploading(false);
      setStatusText("");
      if (galleryRef.current) galleryRef.current.value = "";
      if (cameraRef.current) cameraRef.current.value = "";
    }
  };

  const removePhoto = (url) => {
    onSetAnswer(
      extrasPhotosKey(qid),
      photos.filter((p) => p !== url),
    );
  };

  return (
    <>
      <button
        ref={tabRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`bsf-extras-tab ${extras.hasExtras ? "bsf-extras-tab--filled" : ""}`}
        aria-label="Add notes and photos for this question"
      >
        <span className="bsf-extras-tab-grip" aria-hidden />
        <StickyNote className="h-4 w-4" strokeWidth={2.4} />
        <Camera className="h-4 w-4" strokeWidth={2.4} />
        <span className="bsf-extras-tab-label">Notes</span>
        {extras.hasExtras && (
          <span className="bsf-extras-tab-dot" aria-hidden />
        )}
      </button>

      <div
        ref={overlayRef}
        className="bsf-extras-overlay"
        style={{ pointerEvents: open ? "auto" : "none" }}
        onClick={() => setOpen(false)}
      />

      <div
        ref={sheetRef}
        className="bsf-extras-sheet"
        role="dialog"
        aria-label="Notes and photos"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bsf-extras-sheet-handle" aria-hidden />
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0 text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#1a3f4a]/60">
              Attach to this question
            </p>
            <h4 className="mt-0.5 truncate text-base font-bold text-[#1e1d24] sm:text-lg">
              {question.label}
            </h4>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1a3f4a]/10 text-[#1a3f4a] transition hover:bg-[#1a3f4a]/18"
            aria-label="Close notes"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <label className="mt-4 block text-left">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#1a3f4a]">
            Notes
          </span>
          <textarea
            value={notes}
            onChange={(e) => onSetAnswer(extrasNoteKey(qid), e.target.value)}
            rows={3}
            placeholder="Model number, colour, brand, or anything else for this question"
            className={`${INPUT_CLASS} min-h-[5.5rem] resize-none py-3 text-sm`}
          />
        </label>

        <div className="mt-4 text-left">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1a3f4a]">
            Photos
          </p>
          <div className="flex flex-wrap gap-2">
            {photos.map((url) => (
              <div
                key={url}
                className="relative h-16 w-16 overflow-hidden rounded-xl ring-1 ring-[#1a3f4a]/15 sm:h-20 sm:w-20"
              >
                <img
                  src={url}
                  alt="Attached"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(url)}
                  className="absolute right-1 top-1 inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-[#1a3f4a]/80 text-white"
                  aria-label="Remove photo"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            <input
              ref={galleryRef}
              type="file"
              accept="image/*,.heic,.heif,image/heic,image/heif"
              multiple
              className="hidden"
              onChange={(e) => uploadFiles(e.target.files)}
            />
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => uploadFiles(e.target.files)}
            />

            <button
              type="button"
              disabled={uploading}
              onClick={() => cameraRef.current?.click()}
              className="inline-flex h-16 min-w-[4.25rem] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-[#2D6B7A]/45 bg-white/50 px-2 text-[#2D6B7A] transition hover:border-[#2D6B7A] hover:bg-white/70 disabled:opacity-50 sm:h-20"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Camera className="h-4 w-4" />
              )}
              <span className="text-[10px] font-bold">Take</span>
            </button>
            <button
              type="button"
              disabled={uploading}
              onClick={() => galleryRef.current?.click()}
              className="inline-flex h-16 min-w-[4.25rem] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-[#2D6B7A]/45 bg-white/50 px-2 text-[#2D6B7A] transition hover:border-[#2D6B7A] hover:bg-white/70 disabled:opacity-50 sm:h-20"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ImagePlus className="h-4 w-4" />
              )}
              <span className="text-[10px] font-bold">Upload</span>
            </button>
          </div>
          {uploading && (
            <p className="mt-2 text-xs font-medium text-[#1a3f4a]">
              {statusText || "Uploading…"}
            </p>
          )}
          {error && (
            <p className="mt-2 text-xs font-medium text-red-700">{error}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`${PRIMARY_BTN} mt-5 w-full`}
        >
          Done
          <Check className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
