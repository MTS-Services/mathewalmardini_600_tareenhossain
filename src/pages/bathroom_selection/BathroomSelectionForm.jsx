import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import usePageMeta from "../../hooks/usePageMeta";
import {
  BATHROOM_CATEGORIES,
  BATHROOM_TYPES,
} from "../../data/bathroomSelectionCategories";
import FormHeroShell from "./components/FormHeroShell";
import BathroomTypeStep from "./components/BathroomTypeStep";
import CategoryGridStep from "./components/CategoryGridStep";
import CategoryQuestionsStep from "./components/CategoryQuestionsStep";
import ReviewStep from "./components/ReviewStep";
import { showFormError, showFormSuccess } from "./showFormAlert";

const LOGO_URL = "https://dc3v08iv2c2ou.cloudfront.net/logo.png";
const DRAFT_KEY = "bsf-form-draft-v1";

const STEP_ORDER = [
  "intro",
  "bathroom-type",
  "categories",
  "category",
  "review",
];

const initialProject = {
  clientName: "",
  email: "",
  phone: "",
  projectAddress: "",
  bathroomType: "",
  bathroomTypeOther: "",
  rubbishRemoval: "",
};

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

export default function BathroomSelectionForm() {
  usePageMeta(
    "Bathroom Selection Form | B-Spoke",
    "Complete your bathroom renovation selections — tiles, shower, vanity, lighting and more with B-Spoke Melbourne.",
  );

  const navigate = useNavigate();
  const stageRef = useRef(null);
  const stageInnerRef = useRef(null);
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const addressWrapperRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const prevStepRef = useRef("intro");
  const navDirRef = useRef(1);
  const transitioningRef = useRef(false);
  const draftReadyRef = useRef(false);

  const saved = useRef(loadDraft()).current;

  const [project, setProject] = useState(
    () => (saved?.project ? { ...initialProject, ...saved.project } : initialProject),
  );
  const [categoryAnswers, setCategoryAnswers] = useState(
    () => saved?.categoryAnswers || {},
  );
  const [completedIds, setCompletedIds] = useState(
    () => new Set(Array.isArray(saved?.completedIds) ? saved.completedIds : []),
  );
  const [step, setStep] = useState(() => {
    const s = STEP_ORDER.includes(saved?.step) ? saved.step : "intro";
    if (s === "category" && !saved?.activeCategoryId) return "categories";
    return s;
  });
  const [activeCategoryId, setActiveCategoryId] = useState(
    () => saved?.activeCategoryId || null,
  );
  const [returnToReview, setReturnToReview] = useState(
    () => Boolean(saved?.returnToReview),
  );
  const [submitState, setSubmitState] = useState({ loading: false, error: null });
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressPlaceId, setAddressPlaceId] = useState(
    () => saved?.addressPlaceId || "",
  );
  const [addressMenuPos, setAddressMenuPos] = useState(null);

  useEffect(() => {
    draftReadyRef.current = true;
  }, []);

  useEffect(() => {
    if (!draftReadyRef.current) return;
    try {
      sessionStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          project,
          categoryAnswers,
          completedIds: [...completedIds],
          step,
          activeCategoryId,
          returnToReview,
          addressPlaceId,
        }),
      );
    } catch {
      /* ignore quota */
    }
  }, [
    project,
    categoryAnswers,
    completedIds,
    step,
    activeCategoryId,
    returnToReview,
    addressPlaceId,
  ]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { autoAlpha: 0, y: -24, scale: 0.88 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, ease: "power3.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 28, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
        },
      );
    }, stageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!panelRef.current || !contentRef.current) return;

    const wide =
      step === "categories" || step === "category" || step === "review";
    const isIntro = step === "intro";

    gsap.to(panelRef.current, {
      maxWidth: wide ? "56rem" : "42rem",
      duration: 0.5,
      ease: "power3.inOut",
    });

    if (logoRef.current) {
      const logoImg = logoRef.current.querySelector("img");
      if (logoImg) {
        gsap.set(logoImg, { clearProps: "height,width" });
      }
      // Keep logo gap via CSS only — do not animate margin (avoids modal height jump)
      gsap.set(logoRef.current, { clearProps: "marginBottom,y" });
    }

    if (stageInnerRef.current) {
      gsap.to(stageInnerRef.current, {
        justifyContent: isIntro ? "center" : "flex-start",
        paddingTop: isIntro ? 0 : 16,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }

    prevStepRef.current = step;
  }, [step]);

  const goTo = (next) => {
    if (!next || next === step) return;

    const fromIdx = STEP_ORDER.indexOf(step);
    const toIdx = STEP_ORDER.indexOf(next);
    const dir = toIdx >= fromIdx ? 1 : -1;
    navDirRef.current = dir;

    const el = contentRef.current;
    const wasBusy = transitioningRef.current;
    if (el) gsap.killTweensOf(el);

    if (!el) {
      setStep(next);
      return;
    }

    transitioningRef.current = true;
    const isBack = dir < 0;
    const outDur = isBack ? 0.4 : 0.32;
    const inDur = isBack ? 0.7 : 0.5;

    const playIn = () => {
      setStep(next);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const nextEl = contentRef.current;
          if (!nextEl) {
            transitioningRef.current = false;
            return;
          }
          gsap.fromTo(
            nextEl,
            { autoAlpha: 0, x: (isBack ? -28 : 28) },
            {
              autoAlpha: 1,
              x: 0,
              duration: inDur,
              ease: "power2.out",
              clearProps: "transform",
              onComplete: () => {
                transitioningRef.current = false;
              },
            },
          );
        });
      });
    };

    if (wasBusy) {
      gsap.set(el, { autoAlpha: 1, x: 0 });
      playIn();
      return;
    }

    gsap.to(el, {
      autoAlpha: 0,
      x: -24 * dir,
      duration: outDur,
      ease: "power1.in",
      onComplete: playIn,
    });
  };

  const fetchAddressSuggestions = async (input) => {
    if (!input || input.trim().length < 3) {
      setAddressSuggestions([]);
      setShowAddressSuggestions(false);
      return;
    }

    setAddressLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(
        `${apiUrl}/location-suggestions?input=${encodeURIComponent(input.trim())}`,
      );
      const data = await response.json();

      if (data.success && data.suggestions) {
        setAddressSuggestions(data.suggestions);
        setShowAddressSuggestions(true);
      } else {
        setAddressSuggestions([]);
        setShowAddressSuggestions(false);
      }
    } catch {
      setAddressSuggestions([]);
      setShowAddressSuggestions(false);
    } finally {
      setAddressLoading(false);
    }
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setProject((prev) => ({ ...prev, projectAddress: value }));
    setAddressPlaceId("");
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      fetchAddressSuggestions(value);
    }, 300);
  };

  const handleAddressSelect = (suggestion) => {
    setProject((prev) => ({ ...prev, projectAddress: suggestion.description }));
    setAddressPlaceId(suggestion.placeId || "");
    setShowAddressSuggestions(false);
    setAddressSuggestions([]);
    setAddressMenuPos(null);
  };

  useLayoutEffect(() => {
    if (!showAddressSuggestions || addressSuggestions.length === 0) {
      setAddressMenuPos(null);
      return;
    }

    const updatePos = () => {
      const el = addressWrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const openUp = spaceBelow < 220 && rect.top > spaceBelow;
      setAddressMenuPos({
        left: rect.left,
        width: rect.width,
        top: openUp ? undefined : rect.bottom + 8,
        bottom: openUp ? window.innerHeight - rect.top + 8 : undefined,
        maxHeight: Math.min(240, openUp ? rect.top - 16 : spaceBelow - 16),
      });
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, true);
    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos, true);
    };
  }, [showAddressSuggestions, addressSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("bsf-address-menu");
      if (
        addressWrapperRef.current &&
        !addressWrapperRef.current.contains(event.target) &&
        !(menu && menu.contains(event.target))
      ) {
        setShowAddressSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  const bathroomTypeLabel =
    project.bathroomType === "other"
      ? project.bathroomTypeOther || "Other"
      : BATHROOM_TYPES.find((b) => b.value === project.bathroomType)?.label ||
        "";

  const updateProject = (field) => (e) => {
    setProject((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validateIntro = () => {
    if (!project.clientName.trim()) return "Please enter your full name";
    if (!project.email.trim()) return "Please enter email";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(project.email.trim()))
      return "Please enter a valid email";
    if (!project.phone.trim()) return "Please enter phone number";
    if (!/^\d{10}$/.test(project.phone.replace(/\D/g, "")))
      return "Phone must be 10 digits";
    if (!project.projectAddress.trim()) return "Please enter project address";
    if (!addressPlaceId)
      return "Please select an Australian address from the suggestions";
    return null;
  };

  const validateBathroomType = () => {
    if (!project.bathroomType) return "Please select a bathroom type";
    if (project.bathroomType === "other" && !project.bathroomTypeOther.trim())
      return "Please specify bathroom type";
    return null;
  };

  const handleStart = () => {
    const err = validateIntro();
    if (err) {
      showFormError(err);
      return;
    }
    setSubmitState({ loading: false, error: null });
    // From review edit: next is bathroom type, then back to review
    goTo("bathroom-type");
  };

  const handleBathroomContinue = () => {
    const err = validateBathroomType();
    if (err) {
      showFormError(err);
      return;
    }
    setSubmitState({ loading: false, error: null });
    if (returnToReview) {
      setReturnToReview(false);
      goTo("review");
      return;
    }
    goTo("categories");
  };

  const handleCategoryChange = (categoryId, answers) => {
    setCategoryAnswers((prev) => ({ ...prev, [categoryId]: answers }));
  };

  const handleCategoryComplete = () => {
    setCompletedIds((prev) => new Set([...prev, activeCategoryId]));
    setActiveCategoryId(null);
    if (returnToReview) {
      setReturnToReview(false);
      goTo("review");
      return;
    }
    goTo("categories");
  };

  const handleSubmit = async ({ rubbishRemoval, sendCopyToClient } = {}) => {
    if (rubbishRemoval !== "yes" && rubbishRemoval !== "no") {
      showFormError("Please answer: Do you require rubbish removal?");
      return;
    }

    setProject((p) => ({ ...p, rubbishRemoval }));
    setSubmitState({ loading: true, error: null });
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const payload = {
        project: {
          ...project,
          phone: project.phone.replace(/\D/g, ""),
          bathroomTypeLabel,
          rubbishRemoval: rubbishRemoval === "yes" ? "Yes" : "No",
        },
        categories: BATHROOM_CATEGORIES.filter((cat) =>
          completedIds.has(cat.id),
        ).map((cat) => ({
          id: cat.id,
          title: cat.title,
          number: cat.number,
          answers: categoryAnswers[cat.id] || {},
        })),
        sendCopyToClient: Boolean(sendCopyToClient),
      };

      const response = await fetch(`${apiUrl}/bathroom-selection`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit form");
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "bathroom_selection_submit",
        form_name: "bathroom_selection",
      });

      clearDraft();
      setSubmitState({ loading: false, error: null });
      await showFormSuccess(
        "Your bathroom selection has been submitted. We'll be in touch soon.",
      );
      navigate("/");
    } catch (error) {
      setSubmitState({ loading: false, error: null });
      showFormError(error.message || "Submission failed. Please try again.");
    }
  };

  const activeCategory = BATHROOM_CATEGORIES.find(
    (c) => c.id === activeCategoryId,
  );

  const isWide =
    step === "categories" || step === "category" || step === "review";
  const isReview = step === "review";

  return (
    <FormHeroShell>
      <div
        ref={stageRef}
        className="bsf-stage-wrap absolute inset-0 flex items-center justify-center overflow-hidden px-3 py-3 sm:px-5 sm:py-4 lg:px-8 lg:py-5"
      >
        <div
          ref={stageInnerRef}
          className={`bsf-stage flex w-full flex-col items-center justify-center text-center ${
            isWide
              ? `bsf-stage--wide max-w-[min(58rem,100%)] max-h-full ${
                  isReview
                    ? "bsf-stage--review h-auto"
                    : "h-[min(90dvh,880px)]"
                }`
              : "bsf-stage--compact max-w-3xl max-h-full"
          }`}
        >
          <div
            ref={logoRef}
            className="bsf-logo relative z-30 flex shrink-0 justify-center"
          >
            <img
              src={LOGO_URL}
              alt="B-Spoke"
              className="bsf-logo-img h-[clamp(5.25rem,13dvh,9.5rem)] w-auto drop-shadow-[0_8px_30px_rgba(30,29,36,0.18)]"
            />
          </div>

          <div
            ref={panelRef}
            className={`bsf-panel relative z-10 w-full rounded-[24px] text-left shadow-[0_20px_60px_rgba(30,29,36,0.12)] ring-1 ring-white/40 sm:rounded-[28px] lg:rounded-[32px] ${
              isWide
                ? `bsf-panel--wide flex min-h-0 flex-col max-w-[min(56rem,100%)] overflow-hidden ${
                    isReview ? "bsf-panel--review flex-none" : "flex-1"
                  }`
                : "max-w-3xl overflow-visible"
            }`}
          >
            {/* Solid frosted panel — no backdrop-blur so photos inside stay sharp */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 rounded-[inherit] bg-[#eae3d7]/75"
            />
            <div
              ref={contentRef}
              className={`relative z-10 bsf-panel-body ${
                isWide
                  ? `flex min-h-0 flex-col ${isReview ? "" : "flex-1"}`
                  : ""
              }`}
            >
              {step === "intro" && (
                <div className="p-5 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <Field
                      label="Full name"
                      value={project.clientName}
                      onChange={updateProject("clientName")}
                      placeholder="Your full name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={project.email}
                      onChange={updateProject("email")}
                      placeholder="you@example.com"
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={project.phone}
                      onChange={(e) => {
                        const digits = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                        setProject((p) => ({ ...p, phone: digits }));
                      }}
                      placeholder="04xxxxxxxx"
                    />
                    <div
                      ref={addressWrapperRef}
                      className="relative z-[40]"
                    >
                      <span className="mb-2 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
                        Project address
                      </span>
                      <div className="relative">
                        <input
                          type="text"
                          value={project.projectAddress}
                          onChange={handleAddressChange}
                          placeholder="Start typing your Australian address"
                          autoComplete="off"
                          className="w-full rounded-2xl border border-white/50 bg-white/30 px-5 py-4 text-base text-[#1e1d24] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] placeholder:text-[#1e1d24]/40 outline-none backdrop-blur-md transition duration-200 hover:border-[#2D6B7A]/40 focus:border-[#2D6B7A] focus:bg-white/45 focus:ring-4 focus:ring-[#2D6B7A]/15"
                        />
                        {addressLoading && (
                          <div className="bsf-spin absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white/70 border-t-[#2D6B7A]" />
                        )}
                      </div>
                      {showAddressSuggestions &&
                        addressSuggestions.length > 0 &&
                        addressMenuPos &&
                        createPortal(
                          <div
                            id="bsf-address-menu"
                            onWheel={(e) => e.stopPropagation()}
                            style={{
                              position: "fixed",
                              left: addressMenuPos.left,
                              width: addressMenuPos.width,
                              top: addressMenuPos.top,
                              bottom: addressMenuPos.bottom,
                              maxHeight: addressMenuPos.maxHeight,
                              zIndex: 9999,
                            }}
                            className="bsf-address-menu overflow-y-auto overscroll-contain rounded-2xl border border-white/70 bg-[#f3ebe0]/96 shadow-[0_18px_50px_rgba(30,29,36,0.22)] ring-1 ring-[#2D6B7A]/15 backdrop-blur-xl"
                          >
                            {addressSuggestions.map((suggestion, index) => (
                              <button
                                key={suggestion.placeId || index}
                                type="button"
                                onClick={() => handleAddressSelect(suggestion)}
                                className="flex w-full items-start gap-3 border-b border-[#1a3f4a]/8 px-4 py-3 text-left transition last:border-b-0 hover:bg-[#2D6B7A]/12"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2D6B7A]/12 text-[#2D6B7A]">
                                  <MapPin className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-bold text-[#1e1d24]">
                                    {suggestion.mainText}
                                  </span>
                                  {suggestion.secondaryText && (
                                    <span className="mt-0.5 block text-xs font-medium text-[#1a3f4a]/65">
                                      {suggestion.secondaryText}
                                    </span>
                                  )}
                                </span>
                              </button>
                            ))}
                          </div>,
                          document.body,
                        )}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-2 sm:gap-3">
                    {returnToReview ? (
                      <button
                        type="button"
                        onClick={() => {
                          setReturnToReview(false);
                          goTo("review");
                        }}
                        className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-1.5 py-2.5 text-sm font-bold text-[#1a3f4a] transition duration-200 hover:-translate-x-0.5 hover:text-[#2D6B7A] sm:gap-2 sm:rounded-2xl sm:px-2 sm:py-4 sm:text-base"
                      >
                        <ArrowLeft className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                        <span className="sm:hidden">Back</span>
                        <span className="hidden sm:inline">Back to Review</span>
                      </button>
                    ) : (
                      <span />
                    )}
                    <button
                      type="button"
                      onClick={handleStart}
                      className="inline-flex w-auto shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-[#2D6B7A] px-8 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(45,107,122,0.35)] transition hover:scale-[1.02] hover:bg-[#1e5562] max-sm:gap-1.5 max-sm:rounded-xl max-sm:px-4 max-sm:py-2.5 max-sm:text-sm max-sm:shadow-[0_8px_20px_rgba(45,107,122,0.3)]"
                    >
                      {returnToReview ? "Continue" : "Start Selection"}
                      <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
              )}

              {step === "bathroom-type" && (
                <BathroomTypeStep
                  bathroomType={project.bathroomType}
                  bathroomTypeOther={project.bathroomTypeOther}
                  onChangeType={(value) =>
                    setProject((p) => ({ ...p, bathroomType: value }))
                  }
                  onChangeOther={(value) =>
                    setProject((p) => ({ ...p, bathroomTypeOther: value }))
                  }
                  onBack={() => {
                    if (returnToReview) {
                      goTo("intro");
                      return;
                    }
                    goTo("intro");
                  }}
                  onContinue={handleBathroomContinue}
                  continueLabel={returnToReview ? "Save & Review" : "Continue"}
                />
              )}

              {step === "categories" && (
                <CategoryGridStep
                  categories={BATHROOM_CATEGORIES}
                  completedIds={completedIds}
                  onSelect={(id) => {
                    setActiveCategoryId(id);
                    setCategoryAnswers((prev) => ({
                      ...prev,
                      [id]: { ...(prev[id] || {}), required: "yes" },
                    }));
                    goTo("category");
                  }}
                  onContinue={() => goTo("review")}
                  onBack={() => goTo("bathroom-type")}
                />
              )}

              {step === "category" && activeCategory && (
                <CategoryQuestionsStep
                  category={activeCategory}
                  answers={categoryAnswers}
                  onChange={handleCategoryChange}
                  onComplete={handleCategoryComplete}
                  onBack={() => {
                    setActiveCategoryId(null);
                    if (returnToReview) {
                      setReturnToReview(false);
                      goTo("review");
                      return;
                    }
                    goTo("categories");
                  }}
                />
              )}

              {step === "review" && (
                <ReviewStep
                  project={{ ...project, bathroomTypeLabel }}
                  categoryAnswers={categoryAnswers}
                  completedIds={completedIds}
                  onBack={() => goTo("categories")}
                  onSubmit={handleSubmit}
                  onEditCategory={(id) => {
                    setReturnToReview(true);
                    setActiveCategoryId(id);
                    setCategoryAnswers((prev) => ({
                      ...prev,
                      [id]: { ...(prev[id] || {}), required: "yes" },
                    }));
                    goTo("category");
                  }}
                  onEditProject={() => {
                    setReturnToReview(true);
                    goTo("intro");
                  }}
                  loading={submitState.loading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </FormHeroShell>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  maxLength,
  pattern,
}) {
  return (
    <label className="group relative block">
      <span className="mb-2 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]">
        {label}
      </span>
      <span className="relative block">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          pattern={pattern}
          className="peer w-full rounded-2xl border border-white/50 bg-white/30 px-5 py-4 text-base text-[#1e1d24] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] placeholder:text-[#1e1d24]/40 outline-none backdrop-blur-md transition duration-200 hover:border-[#2D6B7A]/40 focus:border-[#2D6B7A] focus:bg-white/45 focus:ring-4 focus:ring-[#2D6B7A]/15"
        />
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 transition peer-focus:opacity-100">
          <span className="h-2 w-2 rounded-full bg-[#2D6B7A]" />
        </span>
      </span>
    </label>
  );
}
