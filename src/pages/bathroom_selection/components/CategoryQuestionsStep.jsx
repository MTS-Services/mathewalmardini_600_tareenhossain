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

export default function CategoryQuestionsStep({
  category,
  answers,
  onChange,
  onComplete,
  onBack,
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const contentRef = useRef(null);
  const categoryAnswers = answers[category.id] || {};

  const visibleQuestions = useMemo(
    () => getVisibleQuestions(category, categoryAnswers),
    [category, categoryAnswers],
  );

  const currentQuestion = visibleQuestions[stepIndex];

  useEffect(() => {
    setStepIndex(0);
  }, [category.id]);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
        clearProps: "transform",
      },
    );
  }, [stepIndex, category.id]);

  const setAnswer = (questionId, value) => {
    const next = { ...categoryAnswers, [questionId]: value };

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

    // If electrical "required" is no, clear follow-up answers
    if (questionId === "required" && value === "no" && category.id === "electrical") {
      delete next.changes;
      delete next.powerpointCount;
      delete next.location1;
      delete next.location2;
      delete next.location3;
      delete next.location4;
    }

    onChange(category.id, next);
  };

  const patchAnswers = (patch) => {
    onChange(category.id, { ...categoryAnswers, ...patch });
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
    if (currentQuestion.type === "single" && val === "Other") {
      const otherField =
        currentQuestion.otherField || `${currentQuestion.id}Other`;
      return Boolean(String(categoryAnswers[otherField] || "").trim());
    }
    return Boolean(val);
  };

  const handleNext = () => {
    if (stepIndex < visibleQuestions.length - 1) {
      setStepIndex((i) => i + 1);
      return;
    }
    onComplete();
  };

  const handlePrev = () => {
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
      return;
    }
    onBack();
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
      </div>

      <div
        ref={contentRef}
        className={`bsf-q-body flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden ${
          isUploadStep
            ? "justify-start overflow-hidden"
            : "justify-center overflow-hidden"
        }`}
      >
        {currentQuestion ? (
          <div
            className={`mx-auto flex w-full min-w-0 max-w-xl flex-col text-center ${
              isUploadStep ? "min-h-0 flex-1" : ""
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
