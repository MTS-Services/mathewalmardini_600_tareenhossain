import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WizardModal({
  open,
  onClose,
  children,
  ariaLabel,
  size = "full",
  stepKey,
}) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const firstOpenRef = useRef(true);
  const prevStepRef = useRef(stepKey);

  useEffect(() => {
    if (!open) {
      firstOpenRef.current = true;
      return;
    }

    const ctx = gsap.context(() => {
      if (firstOpenRef.current) {
        firstOpenRef.current = false;
        gsap.fromTo(
          overlayRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
        );
        gsap.fromTo(
          panelRef.current,
          { autoAlpha: 0, y: 36, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          },
        );
        gsap.fromTo(
          contentRef.current,
          { autoAlpha: 0, x: 24 },
          { autoAlpha: 1, x: 0, duration: 0.45, delay: 0.12, ease: "power2.out" },
        );
      }
    });

    return () => ctx.revert();
  }, [open]);

  useEffect(() => {
    if (!open || !panelRef.current) return;

    const isCompact = size === "compact";
    gsap.to(panelRef.current, {
      maxWidth: isCompact ? "32rem" : "100%",
      height: isCompact ? "auto" : "100%",
      borderRadius: isCompact ? 28 : 32,
      duration: 0.55,
      ease: "power3.inOut",
    });
  }, [size, open]);

  useEffect(() => {
    if (!open || !contentRef.current) return;
    if (prevStepRef.current === stepKey) return;

    const el = contentRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, x: 40, scale: 0.98 },
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      },
    );

    prevStepRef.current = stepKey;
  }, [stepKey, open]);

  if (!open) return null;

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(panelRef.current, {
      autoAlpha: 0,
      y: 20,
      scale: 0.97,
      duration: 0.25,
      ease: "power2.in",
    }).to(overlayRef.current, { autoAlpha: 0, duration: 0.18 }, "-=0.1");
  };

  const isCompact = size === "compact";

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#1e1d24]/30 backdrop-blur-[8px]"
        onClick={handleClose}
        aria-label="Close"
      />
      <div
        ref={panelRef}
        className={`relative z-10 flex min-h-0 w-full flex-col overflow-hidden bg-[var(--color-paper)]/75 shadow-[0_30px_80px_rgba(30,29,36,0.28)] ring-1 ring-white/55 backdrop-blur-2xl ${
          isCompact
            ? "h-auto max-w-lg rounded-[28px]"
            : "h-full max-w-none rounded-[32px]"
        }`}
      >
        <div ref={contentRef} className="flex min-h-0 flex-1 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
