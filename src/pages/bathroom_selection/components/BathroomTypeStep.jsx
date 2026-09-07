import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BATHROOM_TYPES } from "../../../data/bathroomSelectionCategories";
import {
  BACK_BTN,
  EYEBROW_CLASS,
  INPUT_CLASS,
  PRIMARY_BTN,
  TITLE_CLASS,
} from "../formStyles";

const CDN = "https://dc3v08iv2c2ou.cloudfront.net/bathroom_gallery";

/** Distinct photos matched to each bathroom-type keyword */
const TYPE_IMAGES = {
  main: `${CDN}/Bath.jpg`, // full main bath with freestanding tub
  ensuite: `${CDN}/Taylors+Hill+Bathroom+2.jpg`, // compact shower ensuite
  powder: `${CDN}/IMG_1517.jpg`, // small vanity powder-room look
  other: `${CDN}/Bathroom+Renovation.jpg`, // different styled vanity
};

export default function BathroomTypeStep({
  bathroomType,
  bathroomTypeOther,
  onChangeType,
  onChangeOther,
  onBack,
  onContinue,
  continueLabel = "Continue",
}) {
  const gridRef = useRef(null);
  const otherFieldRef = useRef(null);
  const isOther = bathroomType === "other";

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-type-card]");
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 12, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.05,
        delay: 0.08,
        ease: "power3.out",
        clearProps: "transform",
      },
    );
  }, []);

  useEffect(() => {
    if (!isOther || !otherFieldRef.current) return;
    gsap.fromTo(
      otherFieldRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" },
    );
  }, [isOther]);

  const canContinue =
    bathroomType &&
    (bathroomType !== "other" || Boolean(bathroomTypeOther.trim()));

  return (
    <div className="bsf-type-step flex flex-col p-4 sm:p-5 lg:p-6">
      <div className="bsf-type-heading mb-4 text-center sm:mb-5 lg:mb-6">
        <p className={EYEBROW_CLASS}>Next step</p>
        <h2 className={TITLE_CLASS}>Which bathroom is this?</h2>
      </div>

      <div
        ref={gridRef}
        className={`bsf-type-grid mx-auto grid grid-cols-2 transition-[width,max-width,gap] duration-500 ease-in-out ${
          isOther
            ? "bsf-type-grid--other w-1/2 max-w-[280px] gap-2.5"
            : "w-3/4 max-w-[420px] gap-3.5"
        }`}
      >
        {BATHROOM_TYPES.map((type) => {
          const selected = bathroomType === type.value;
          return (
            <button
              key={type.value}
              type="button"
              data-type-card
              onClick={() => onChangeType(type.value)}
              className={`group relative isolate aspect-square w-full overflow-hidden rounded-xl bg-[#1e1d24] text-left transition duration-300 ${
                selected
                  ? "ring-[3px] ring-[#2D6B7A] shadow-[0_8px_20px_rgba(45,107,122,0.25)]"
                  : "ring-1 ring-white/60 hover:ring-[#2D6B7A]/50"
              }`}
            >
              <img
                src={TYPE_IMAGES[type.value]}
                alt={type.label}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover [filter:none] group-hover:scale-[1.03] transition duration-500"
              />
              <span
                className={`absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent ${
                  isOther ? "px-1.5 pb-2 pt-6" : "px-2 pb-3 pt-8"
                }`}
              >
                <span
                  className={`block text-center font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                    isOther ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                  }`}
                >
                  {type.label}
                </span>
              </span>

              {selected && (
                <span
                  className={`absolute flex items-center justify-center rounded-full bg-[#2D6B7A] text-white shadow ${
                    isOther
                      ? "right-1.5 top-1.5 h-5 w-5"
                      : "right-2.5 top-2.5 h-6 w-6"
                  }`}
                >
                  <Check
                    className={isOther ? "h-3 w-3" : "h-3.5 w-3.5"}
                    strokeWidth={3}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {isOther && (
        <div
          ref={otherFieldRef}
          className="bsf-type-other mx-auto mt-4 w-full max-w-md sm:mt-5 lg:mt-6"
        >
          <label className="group relative block text-left">
            <span className="mb-2 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
              Specify type
            </span>
            <span className="relative block">
              <input
                type="text"
                value={bathroomTypeOther}
                onChange={(e) => onChangeOther(e.target.value)}
                placeholder="Specify bathroom type"
                className={`peer ${INPUT_CLASS}`}
                autoFocus
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 transition peer-focus:opacity-100">
                <span className="h-2 w-2 rounded-full bg-[#2D6B7A]" />
              </span>
            </span>
          </label>
        </div>
      )}

      <div className="bsf-type-footer mt-4 flex items-center justify-between gap-3 sm:mt-5 lg:mt-6">
        <button type="button" onClick={onBack} className={BACK_BTN}>
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          disabled={!canContinue}
          className={PRIMARY_BTN}
        >
          {continueLabel}
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
