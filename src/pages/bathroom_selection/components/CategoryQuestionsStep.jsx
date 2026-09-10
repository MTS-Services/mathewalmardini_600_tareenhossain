import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getVisibleQuestions } from "../../../data/bathroomSelectionCategories";
import {
  BACK_BTN,
  EYEBROW_CLASS,
  PRIMARY_BTN,
} from "../formStyles";
import QuestionRenderer from "./QuestionRenderer";
import QuestionExtrasDrawer from "./QuestionExtrasDrawer";

function isCustomOrOther(value) {
  const v = String(value || "").trim().toLowerCase();
  return v === "custom" || v === "other";
}

/** Instant choices auto-advance; Custom / Other need typing + Next */
function shouldAutoAdvance(question, value) {
  if (!question || value == null || value === "") return false;
  if (isCustomOrOther(value)) return false;
  if (question.type === "yesNo") return value === "yes" || value === "no";
  if (question.type === "noteAck") return value === "noted";
  if (question.type === "single") return true;
  return false;
}

function sameAnswer(a, b) {
  if (Array.isArray(a) || Array.isArray(b)) {
    return JSON.stringify(a || []) === JSON.stringify(b || []);
  }
  return a === b;
}

export default function CategoryQuestionsStep({
  category,
  answers,
  onChange,
  onComplete,
  onBack,
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const contentRef = useRef(null);
  const autoAdvanceRef = useRef(null);
  const transitioningRef = useRef(false);
  const stepIndexRef = useRef(0);
  const destIndexRef = useRef(0);
  const pendingRef = useRef(null);
  const extrasOpenRef = useRef(false);
  const categoryAnswers = answers[category.id] || {};

  stepIndexRef.current = stepIndex;

  const visibleQuestions = useMemo(
    () => getVisibleQuestions(category, categoryAnswers),
    [category, categoryAnswers],
  );
  const visibleLenRef = useRef(visibleQuestions.length);
  visibleLenRef.current = visibleQuestions.length;

  const currentQuestion = visibleQuestions[stepIndex];

  const flushPending = () => {
    const pending = pendingRef.current;
    pendingRef.current = null;
    if (!pending) return;
    if (pending.type === "exit") {
      exitThen(pending.dir, pending.then);
      return;
    }
    if (pending.type === "slide") {
      slideTo(pending.nextIndex, pending.dir);
    }
  };

  /** Smooth horizontal slide — one step at a time (queues extra clicks) */
  const slideTo = (nextIndex, dir = 1) => {
    const len = visibleLenRef.current;
    if (nextIndex < 0 || nextIndex >= len) return;

    if (transitioningRef.current) {
      pendingRef.current = { type: "slide", nextIndex, dir };
      return;
    }

    if (nextIndex === stepIndexRef.current) return;

    const el = contentRef.current;
    if (!el) {
      setStepIndex(nextIndex);
      stepIndexRef.current = nextIndex;
      return;
    }

    transitioningRef.current = true;
    destIndexRef.current = nextIndex;
    gsap.killTweensOf(el);

    const isBack = dir < 0;
    const outX = dir > 0 ? "-10%" : "10%";
    const inX = dir > 0 ? "12%" : "-12%";
    const outDur = isBack ? 0.28 : 0.32;
    const inDur = isBack ? 0.48 : 0.55;

    gsap.to(el, {
      x: outX,
      autoAlpha: 0,
      scale: 0.99,
      duration: outDur,
      ease: "power1.in",
      onComplete: () => {
        setStepIndex(nextIndex);
        stepIndexRef.current = nextIndex;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const nextEl = contentRef.current;
            if (!nextEl) {
              transitioningRef.current = false;
              flushPending();
              return;
            }
            gsap.fromTo(
              nextEl,
              { x: inX, autoAlpha: 0, scale: 0.99 },
              {
                x: 0,
                autoAlpha: 1,
                scale: 1,
                duration: inDur,
                ease: "power2.out",
                clearProps: "transform",
                onComplete: () => {
                  transitioningRef.current = false;
                  flushPending();
                },
              },
            );
          });
        });
      },
    });
  };

  /** Last Back / Save Section — smooth slide out before leaving */
  const exitThen = (dir, then) => {
    if (transitioningRef.current) {
      pendingRef.current = { type: "exit", dir, then };
      return;
    }

    const el = contentRef.current;
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    pendingRef.current = null;
    if (el) gsap.killTweensOf(el);
    transitioningRef.current = true;

    if (!el) {
      transitioningRef.current = false;
      then();
      return;
    }

    gsap.to(el, {
      x: dir > 0 ? "-14%" : "14%",
      autoAlpha: 0,
      scale: 0.985,
      duration: 0.4,
      ease: "power1.inOut",
      onComplete: () => {
        transitioningRef.current = false;
        then();
      },
    });
  };

  useEffect(() => {
    setStepIndex(0);
    stepIndexRef.current = 0;
    destIndexRef.current = 0;
    pendingRef.current = null;
    transitioningRef.current = false;
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    const el = contentRef.current;
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { x: "8%", autoAlpha: 0, scale: 0.99 },
      {
        x: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform",
      },
    );
  }, [category.id]);

  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      if (contentRef.current) gsap.killTweensOf(contentRef.current);
    };
  }, []);

  const advanceFrom = (questionId, nextAnswers) => {
    const nextVisible = getVisibleQuestions(category, nextAnswers);
    const idx = nextVisible.findIndex((q) => q.id === questionId);
    if (idx === -1) {
      if (nextVisible.length === 0) {
        exitThen(1, onComplete);
        return;
      }
      slideTo(0, 1);
      return;
    }
    if (idx < nextVisible.length - 1) {
      slideTo(idx + 1, 1);
      return;
    }
    exitThen(1, onComplete);
  };

  const maybeAutoAdvance = (questionId, nextAnswers) => {
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }

    const question =
      visibleQuestions.find((q) => q.id === questionId) || currentQuestion;
    if (!question || question.id !== questionId) return;
    if (!shouldAutoAdvance(question, nextAnswers[questionId])) return;

    autoAdvanceRef.current = setTimeout(() => {
      if (extrasOpenRef.current) return;
      if (isCustomOrOther(nextAnswers[questionId])) return;
      advanceFrom(questionId, nextAnswers);
    }, 1600);
  };

  const setAnswer = (questionId, value) => {
    const prev = categoryAnswers[questionId];
    const changed = !sameAnswer(prev, value);
    const isExtras = String(questionId).includes("__");

    const next = { ...categoryAnswers, [questionId]: value, required: "yes" };

    // Choosing No on niche clears the note acknowledgment
    if (questionId === "niche" && value === "no") {
      delete next.nicheNote;
    }

    // If Add/Move PowerPoint is not selected, clear count + locations
    if (questionId === "changes" && Array.isArray(value)) {
      const needsPowerpoint =
        value.includes("Add PowerPoint") || value.includes("Move PowerPoint");
      if (!needsPowerpoint) {
        delete next.powerpointCount;
        delete next.location1;
        delete next.location2;
        delete next.location3;
        delete next.location4;
      }
    }

    onChange(category.id, next);
    // Notes/photos should not auto-advance; only new question answers do
    if (changed && !isExtras) maybeAutoAdvance(questionId, next);
  };

  const patchAnswers = (patch) => {
    const qid = currentQuestion?.id;
    const changed =
      qid &&
      Object.prototype.hasOwnProperty.call(patch, qid) &&
      !sameAnswer(categoryAnswers[qid], patch[qid]);

    const next = { ...categoryAnswers, ...patch };
    onChange(category.id, next);
    if (changed) maybeAutoAdvance(qid, next);
  };

  const canProceed = () => {
    if (!currentQuestion) return true;
    const val = categoryAnswers[currentQuestion.id];
    if (currentQuestion.type === "multi") return true;
    if (currentQuestion.type === "imageUpload") {
      return Boolean(String(val || "").trim());
    }
    if (currentQuestion.type === "textarea" || currentQuestion.type === "text") {
      if (currentQuestion.showIf) {
        return Boolean(String(val || "").trim());
      }
      return true;
    }
    if (
      currentQuestion.type === "single" &&
      val === "Custom" &&
      currentQuestion.customField
    ) {
      return Boolean(
        String(categoryAnswers[currentQuestion.customField] || "").trim(),
      );
    }
    if (
      currentQuestion.type === "single" &&
      val === "Other"
    ) {
      const otherField =
        currentQuestion.otherField || `${currentQuestion.id}Other`;
      return Boolean(String(categoryAnswers[otherField] || "").trim());
    }
    if (currentQuestion.type === "noteAck") {
      return val === "noted";
    }
    return Boolean(val);
  };

  const handleNext = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);

    const from = transitioningRef.current
      ? destIndexRef.current
      : stepIndexRef.current;
    const len = visibleLenRef.current;

    if (from < len - 1) {
      slideTo(from + 1, 1);
      return;
    }
    exitThen(1, onComplete);
  };

  const handlePrev = () => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);

    const from = transitioningRef.current
      ? destIndexRef.current
      : stepIndexRef.current;

    if (from > 0) {
      slideTo(from - 1, -1);
      return;
    }
    exitThen(-1, onBack);
  };

  const isUploadStep = currentQuestion?.type === "imageUpload";

  return (
    <div
      className={`bsf-q-step flex h-full min-h-0 flex-col overflow-hidden ${
        isUploadStep ? "p-3 sm:p-5" : "px-3 py-3.5 sm:p-6"
      }`}
    >
      <div
        className={`bsf-q-heading shrink-0 text-center ${
          isUploadStep ? "mb-2 sm:mb-3" : "mb-3 sm:mb-5"
        }`}
      >
        <p className={`${EYEBROW_CLASS} max-sm:text-[11px]`}>Bathroom Selection</p>
        <h2
          className={
            isUploadStep
              ? "mt-0.5 text-xl font-bold text-[#1e1d24] sm:text-2xl"
              : "mt-1 text-[1.35rem] font-bold leading-tight text-[#1e1d24] sm:text-2xl"
          }
        >
          {category.title}
        </h2>
        {visibleQuestions.length > 0 && (
          <div className="mx-auto mt-2.5 w-full max-w-xs sm:mt-3">
            <div className="h-1.5 overflow-hidden rounded-full bg-[#1a3f4a]/12">
              <div
                className="h-full rounded-full bg-[#2D6B7A] transition-all duration-500 ease-out"
                style={{
                  width: `${Math.round(
                    ((Math.min(stepIndex, visibleQuestions.length - 1) + 1) /
                      visibleQuestions.length) *
                      100,
                  )}%`,
                }}
              />
            </div>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1a3f4a]/65">
              Question {Math.min(stepIndex, visibleQuestions.length - 1) + 1} of{" "}
              {visibleQuestions.length}
            </p>
          </div>
        )}
      </div>

      {currentQuestion && currentQuestion.type !== "noteAck" && (
        <QuestionExtrasDrawer
          question={currentQuestion}
          answers={categoryAnswers}
          onSetAnswer={setAnswer}
          onOpenChange={(isOpen) => {
            extrasOpenRef.current = isOpen;
            if (isOpen && autoAdvanceRef.current) {
              clearTimeout(autoAdvanceRef.current);
              autoAdvanceRef.current = null;
            }
          }}
        />
      )}

      <div className="bsf-q-slide-viewport relative min-h-0 min-w-0 flex-1 overflow-hidden">
        <div
          ref={contentRef}
          className={`bsf-q-body flex h-full min-h-0 min-w-0 flex-col will-change-transform ${
            isUploadStep
              ? "justify-start overflow-hidden"
              : "justify-center overflow-hidden"
          }`}
        >
          {currentQuestion ? (
            <div
              className={`mx-auto flex w-full min-h-0 min-w-0 max-w-xl flex-col text-center ${
                isUploadStep ? "flex-1" : ""
              }`}
            >
              <h3
                className={`bsf-q-label shrink-0 px-1 font-bold text-[#1e1d24] ${
                  isUploadStep
                    ? "mb-2 text-sm sm:mb-3 sm:text-base"
                    : "mb-4 text-[0.95rem] sm:mb-8 sm:text-xl"
                }`}
              >
                {currentQuestion.label}
              </h3>
              <div
                className={
                  isUploadStep ? "flex min-h-0 flex-1 flex-col" : undefined
                }
              >
                <QuestionRenderer
                  question={currentQuestion}
                  value={categoryAnswers[currentQuestion.id]}
                  onChange={(val) => setAnswer(currentQuestion.id, val)}
                  answers={categoryAnswers}
                  onSetAnswer={setAnswer}
                  onPatchAnswers={patchAnswers}
                />
              </div>
            </div>
          ) : (
            <p className="text-center text-[#1e1d24]/70">
              No questions for this section.
            </p>
          )}
        </div>
      </div>

      <div
        className={`bsf-q-footer flex shrink-0 items-center justify-between gap-3 ${
          isUploadStep ? "mt-3" : "mt-4 sm:mt-6"
        }`}
      >
        <button type="button" onClick={handlePrev} className={BACK_BTN}>
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed()}
          className={PRIMARY_BTN}
        >
          {stepIndex >= visibleQuestions.length - 1 ? (
            <>
              Save Section
              <Check className="h-4 w-4 sm:h-5 sm:w-5" />
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
