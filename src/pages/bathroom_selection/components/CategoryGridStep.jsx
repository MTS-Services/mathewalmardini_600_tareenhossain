import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Check, MousePointer2 } from "lucide-react";
import { BACK_BTN, PRIMARY_BTN } from "../formStyles";

export default function CategoryGridStep({
  categories,
  completedIds,
  onSelect,
  onContinue,
  onBack,
}) {
  const gridRef = useRef(null);
  const clickingRef = useRef(false);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-category-card]");
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 28, scale: 0.82 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.4)",
        clearProps: "transform",
      },
    );
  }, []);

  const handleSelect = (catId, event) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    const card = event.currentTarget;
    const vibe = card.querySelector("[data-select-vibe]");

    const tl = gsap.timeline({
      onComplete: () => {
        onSelect(catId);
        clickingRef.current = false;
      },
    });

    tl.to(card, {
      scale: 0.94,
      duration: 0.12,
      ease: "power2.in",
    })
      .to(
        vibe,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.22,
          ease: "power2.out",
        },
        0,
      )
      .to(card, {
        scale: 1.04,
        duration: 0.22,
        ease: "back.out(2)",
      })
      .to(card, {
        scale: 1,
        duration: 0.15,
        ease: "power2.out",
      });
  };

  const completedCount = completedIds.size;
  const canContinue = completedCount > 0;

  return (
    <div className="bsf-cat-step flex h-full min-h-0 flex-col overflow-hidden p-2 sm:p-4 lg:p-5">
      <div className="bsf-cat-heading mb-1.5 shrink-0 text-center sm:mb-3">
        <p className="text-[clamp(0.85rem,1.6vw,1.125rem)] font-bold uppercase tracking-[0.06em] text-[#1a3f4a]">
          Bathroom Selection
        </p>
      </div>

      <div
        ref={gridRef}
        className="bsf-cat-grid bsf-touch-scroll grid min-h-0 flex-1 grid-cols-4 grid-rows-3 gap-1.5 overflow-hidden sm:gap-3.5 lg:gap-4"
      >
        {categories.map((cat) => {
          const done = completedIds.has(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              data-category-card
              onClick={(e) => handleSelect(cat.id, e)}
              className={`bsf-cat-card group relative isolate flex min-h-0 min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-md text-center shadow-[0_3px_10px_rgba(30,29,36,0.18)] transition-[box-shadow,ring] duration-300 hover:z-10 hover:shadow-[0_8px_24px_rgba(45,107,122,0.28)] sm:rounded-xl lg:rounded-2xl ${
                done
                  ? "ring-1 ring-[#1a3f4a] sm:ring-[3px] sm:shadow-[0_10px_26px_rgba(15,30,36,0.45)]"
                  : "ring-1 ring-white/70 hover:ring-[#2D6B7A]/70 sm:hover:ring-2"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <span
                aria-hidden
                className={`absolute inset-0 transition duration-300 ${
                  done
                    ? "bg-[#0f1c22]/75 group-hover:bg-[#0f1c22]/65"
                    : "bg-[#0f1c22]/55 group-hover:bg-[#0f1c22]/40"
                }`}
              />

              <span
                data-select-vibe
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] bg-[#2D6B7A]/45 opacity-0"
                style={{ opacity: 0, transform: "scale(0.85)" }}
              />

              {done && (
                <>
                  <span className="bsf-corner bsf-corner--left z-20">
                    Done
                  </span>
                  <span className="bsf-corner bsf-corner--right z-20">
                    <Check
                      className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5"
                      strokeWidth={3}
                    />
                  </span>
                </>
              )}

              <span className="bsf-cat-card-title relative z-10 max-w-full px-0.5 text-[11px] font-bold leading-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:px-2.5 sm:text-[clamp(0.65rem,1.35vw+0.35rem,1.25rem)]">
                {cat.title}
              </span>

              {!done && (
                <span className="absolute left-1 top-1 z-10 hidden h-5 w-5 translate-y-1 items-center justify-center rounded-full bg-white/90 text-[#2D6B7A] opacity-0 shadow transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-1.5 sm:top-1.5 sm:flex sm:h-6 sm:w-6 lg:left-2 lg:top-2">
                  <MousePointer2
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                    strokeWidth={2.5}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="bsf-cat-footer mt-2 flex shrink-0 items-center justify-between gap-2 sm:mt-3 sm:gap-3">
        {onBack ? (
          <button type="button" onClick={onBack} className={`${BACK_BTN} shrink-0`}>
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onContinue}
          disabled={!canContinue}
          className={`${PRIMARY_BTN} max-w-[58%] sm:max-w-none`}
        >
          {canContinue ? (
            <>
              <span className="sm:hidden">Review</span>
              <span className="hidden sm:inline">Review & Submit</span>
            </>
          ) : (
            "Continue"
          )}
          <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
