import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ArrowLeft, Check } from "lucide-react";
import {
  BATHROOM_CATEGORIES,
  formatAnswerValue,
  getQuestionExtras,
  getVisibleQuestions,
} from "../../../data/bathroomSelectionCategories";
import {
  BACK_BTN,
  OPTION_ACTIVE,
  OPTION_BTN,
  OPTION_IDLE,
  PRIMARY_BTN,
} from "../formStyles";

function humanizeKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/_/g, " ");
}

export default function ReviewStep({
  project,
  categoryAnswers,
  completedIds,
  onBack,
  onSubmit,
  onEditCategory,
  onEditProject,
  loading,
}) {
  const [openCatId, setOpenCatId] = useState(null);
  const [showRubbishModal, setShowRubbishModal] = useState(false);

  const completedCategories = BATHROOM_CATEGORIES.filter((cat) =>
    completedIds?.has?.(cat.id),
  );

  const openCategory = completedCategories.find((c) => c.id === openCatId);

  return (
    <div className="bsf-review-step flex min-h-0 flex-col overflow-hidden p-2 sm:p-5 md:p-6">
      {/* Mobile: Compact header */}
      <div className="bsf-review-heading mb-1 shrink-0 text-center sm:mb-3 md:mb-4">
        <p className="hidden text-[10px] font-bold uppercase tracking-[0.06em] text-[#1a3f4a] sm:block sm:text-base md:text-lg">
          Final Review
        </p>
        <h2 className="text-sm font-bold text-[#1e1d24] sm:mt-1 sm:text-2xl md:text-3xl">
          <span className="sm:hidden">Review & Submit</span>
          <span className="hidden sm:inline">Is everything correct?</span>
        </h2>
      </div>

      {/* Mobile stack | Tablet/Desktop: side-by-side */}
      <div className="bsf-review-grid bsf-touch-scroll flex min-h-0 min-w-0 flex-col gap-1.5 overflow-y-auto overflow-x-hidden sm:gap-3 md:grid md:grid-cols-[minmax(0,14.5rem)_1fr] md:items-start md:gap-3.5 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-5 md:overflow-visible">
        
        {/* Project card */}
        <section className="bsf-review-project flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-xl border border-white/60 bg-white/45 shadow-[0_6px_20px_rgba(30,29,36,0.08)] sm:rounded-2xl">
          <header className="bsf-review-project-head flex shrink-0 items-center justify-between gap-2 border-b border-white/50 bg-[#1a3f4a] px-3 py-2 sm:block sm:px-3.5 sm:py-3 md:px-3.5 md:py-3 lg:px-5 lg:py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-white/70 sm:text-[10px] md:text-[10px] lg:text-xs">
                Project
              </p>
              <p
                title={project.clientName || undefined}
                className="truncate text-[11px] font-semibold leading-snug text-white sm:mt-0.5 sm:text-sm sm:font-bold md:text-[0.9rem] lg:mt-1 lg:text-lg"
              >
                {project.clientName || "—"}
              </p>
            </div>
            <button
              type="button"
              onClick={onEditProject}
              disabled={loading}
              className="bsf-review-edit-btn inline-flex h-8 shrink-0 items-center justify-center rounded-full bg-[#2D6B7A] px-3.5 text-[11px] font-bold leading-none text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition hover:bg-[#3a8494] active:scale-95 disabled:opacity-50 sm:hidden"
            >
              Edit
            </button>
          </header>
          
          <div className="bsf-review-project-body grid grid-cols-2 gap-x-3 gap-y-1.5 px-3 py-2 sm:flex sm:flex-col sm:gap-2 sm:px-3.5 sm:py-3 md:gap-2 md:px-3.5 md:py-3 lg:gap-3.5 lg:px-5 lg:py-4">
            <div className="col-span-2">
              <InfoRow label="Email" value={project.email} />
            </div>
            <InfoRow label="Phone" value={project.phone} />
            <InfoRow label="Type" value={project.bathroomTypeLabel} />
            <div className="col-span-2">
              <InfoRow label="Address" value={project.projectAddress} multiline />
            </div>
          </div>
          
          <div className="bsf-review-project-foot hidden shrink-0 border-t border-white/50 px-3 py-2 sm:block md:px-3.5 md:py-2.5 lg:px-5 lg:py-4">
            <button
              type="button"
              onClick={onEditProject}
              disabled={loading}
              className="min-h-[2.35rem] w-full cursor-pointer rounded-xl bg-[#2D6B7A] px-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(45,107,122,0.28)] transition duration-200 hover:scale-[1.02] hover:bg-[#1e5562] active:scale-[0.98] disabled:opacity-50 lg:min-h-[2.75rem] lg:rounded-2xl lg:px-5 lg:text-base"
            >
              Edit
            </button>
          </div>
        </section>

        {/* Sections */}
        <section className="bsf-review-sections flex min-h-0 min-w-0 flex-1 flex-col md:overflow-visible">
          <header className="mb-1 flex shrink-0 items-center justify-between gap-2 px-0.5 sm:mb-2 md:mb-2 lg:mb-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#1a3f4a] sm:text-xs lg:text-sm">
              Sections
            </p>
            <span className="rounded-full bg-[#2D6B7A]/12 px-1.5 py-0.5 text-[8px] font-bold text-[#1a3f4a] sm:px-2.5 sm:text-[10px] lg:px-3 lg:py-1 lg:text-xs">
              {completedCategories.length}
            </span>
          </header>
          <div className="bsf-review-sections-wrap min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-0.5 sm:p-1 md:overflow-visible">
            {completedCategories.length === 0 ? (
              <p className="mt-3 text-center text-xs text-[#1e1d24]/60 sm:mt-6 sm:text-base">
                No sections completed yet.
              </p>
            ) : (
              <div className="bsf-review-sections-grid grid grid-cols-4 gap-1 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-3 md:gap-2 lg:gap-5">
                {completedCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setOpenCatId(cat.id)}
                    className="bsf-review-section-card group relative flex aspect-square w-full min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-md text-center shadow-[0_3px_10px_rgba(30,29,36,0.18)] ring-1 ring-[#1a3f4a] transition-[box-shadow,ring] duration-300 hover:z-10 hover:shadow-[0_8px_24px_rgba(45,107,122,0.28)] hover:ring-[#2D6B7A] sm:aspect-[4/3] sm:rounded-xl sm:ring-2 md:aspect-[5/4] md:rounded-xl lg:aspect-[4/3] lg:rounded-2xl lg:ring-[3px] lg:max-w-[200px]"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      draggable={false}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[#0f1c22]/75 transition duration-300 group-hover:bg-[#0f1c22]/55"
                    />

                    <span className="bsf-corner bsf-corner--left z-20 scale-90 sm:scale-100">
                      Done
                    </span>
                    <span className="bsf-corner bsf-corner--right z-20 scale-90 sm:scale-100">
                      <Check
                        className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4"
                        strokeWidth={3}
                      />
                    </span>

                    <span className="relative z-10 flex w-full flex-col items-center justify-center px-1 sm:px-1.5 lg:px-3">
                      <span className="bsf-review-section-title block text-[11px] font-bold leading-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] sm:text-xs md:text-[0.85rem] lg:text-base xl:text-lg">
                        {cat.title}
                      </span>
                      <span className="mt-0.5 hidden text-[8px] font-bold uppercase tracking-[0.08em] text-white/90 lg:mt-1.5 lg:block lg:text-xs">
                        Click to view
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="bsf-review-footer mt-1.5 flex shrink-0 items-center justify-between gap-2 pt-1 sm:mt-6 sm:gap-3 sm:border-0 sm:pt-3 md:border-0">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className={`${BACK_BTN} shrink-0`}
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          Back
        </button>
        <button
          type="button"
          onClick={() => setShowRubbishModal(true)}
          disabled={loading}
          className={`${PRIMARY_BTN} max-w-[55%] sm:max-w-none`}
        >
          {loading ? (
            "Submitting..."
          ) : (
            <>
              <span className="sm:hidden">Submit</span>
              <span className="hidden sm:inline">Confirm & Submit</span>
            </>
          )}
        </button>
      </div>

      {showRubbishModal && (
        <RubbishRemovalModal
          loading={loading}
          clientEmail={project.email}
          onClose={() => !loading && setShowRubbishModal(false)}
          onConfirm={({ rubbishRemoval, sendCopyToClient }) => {
            setShowRubbishModal(false);
            onSubmit?.({ rubbishRemoval, sendCopyToClient });
          }}
        />
      )}

      {openCategory && (
        <CategoryDetailModal
          category={openCategory}
          answers={categoryAnswers[openCategory.id] || {}}
          onClose={() => setOpenCatId(null)}
          onEdit={() => {
            const id = openCategory.id;
            setOpenCatId(null);
            onEditCategory?.(id);
          }}
        />
      )}
    </div>
  );
}

function InfoRow({ label, value, multiline = false }) {
  return (
    <div className="bsf-review-info min-w-0">
      <p className="bsf-review-info-label text-[9px] font-bold uppercase tracking-[0.06em] text-[#1a3f4a]/70 md:text-[0.65rem] lg:text-xs">
        {label}
      </p>
      <p
        title={value || undefined}
        className={`bsf-review-info-value text-[11px] font-semibold leading-snug text-[#1e1d24] md:text-[0.8rem] lg:mt-1 lg:text-base ${
          multiline
            ? "break-words whitespace-normal"
            : "truncate md:whitespace-normal md:break-words"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
}

function RubbishRemovalModal({ loading, clientEmail, onClose, onConfirm }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [rubbishRemoval, setRubbishRemoval] = useState("");
  const [sendCopyToClient, setSendCopyToClient] = useState(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(panel, { autoAlpha: 0, y: 24, scale: 0.96 });

    const tl = gsap.timeline();
    tl.to(overlay, { autoAlpha: 1, duration: 0.25, ease: "power2.out" });
    tl.to(
      panel,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      },
      "-=0.15",
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !loading) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, loading]);

  const canSubmit = rubbishRemoval === "yes" || rubbishRemoval === "no";

  return createPortal(
    <div
      ref={overlayRef}
      onClick={() => !loading && onClose()}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1c22]/55 p-4 backdrop-blur-sm"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-3xl bg-[#eae3d7] shadow-[0_30px_80px_rgba(15,28,34,0.35)] ring-1 ring-white/60"
      >
        <header className="bg-[#1a3f4a] px-6 py-5 text-center sm:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            Before you submit
          </p>
          <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            Do you require rubbish removal?
          </h3>
        </header>

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                disabled={loading}
                onClick={() => setRubbishRemoval(opt.value)}
                className={`${OPTION_BTN} min-h-[3.5rem] sm:min-h-[4rem] ${
                  rubbishRemoval === opt.value ? OPTION_ACTIVE : OPTION_IDLE
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-white/60 bg-white/45 px-4 py-4 text-left sm:px-5">
            <input
              type="checkbox"
              checked={sendCopyToClient}
              disabled={loading}
              onChange={(e) => setSendCopyToClient(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#2D6B7A]"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-[#1a3f4a] sm:text-base">
                Email me
              </span>
              <span className="mt-1 block break-all text-xs leading-relaxed text-[#1e1d24]/65 sm:text-sm">
                Send the same summary to {clientEmail || "my email"}
              </span>
            </span>
          </label>

          <button
            type="button"
            disabled={loading || !canSubmit}
            onClick={() =>
              onConfirm?.({ rubbishRemoval, sendCopyToClient })
            }
            className={`${PRIMARY_BTN} mt-4 w-full min-h-[2.75rem] sm:min-h-[3.25rem]`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onClose}
            className="mt-5 w-full min-h-[2.75rem] cursor-pointer rounded-2xl border-2 border-[#1a3f4a]/25 bg-transparent px-6 text-sm font-bold text-[#1a3f4a] transition duration-200 hover:border-[#1a3f4a]/50 hover:bg-[#1a3f4a]/10 disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CategoryDetailModal({ category, answers, onClose, onEdit }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(panel, { autoAlpha: 0, y: 24, scale: 0.96 });

    const tl = gsap.timeline();
    tl.to(overlay, { autoAlpha: 1, duration: 0.25, ease: "power2.out" });
    tl.to(
      panel,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      },
      "-=0.15",
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const visible = getVisibleQuestions(category, answers).filter(
    (q) => !q.hideInReview,
  );
  const answered = visible.filter((q) => {
    const v = answers[q.id];
    if (Array.isArray(v)) return v.length > 0;
    return v !== undefined && v !== null && v !== "";
  });

  return createPortal(
    <div
      ref={overlayRef}
      onClick={onClose}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0f1c22]/55 p-4 backdrop-blur-sm"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="bsf-detail-modal flex max-h-[min(92dvh,860px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-[#eae3d7] shadow-[0_30px_80px_rgba(15,28,34,0.35)] ring-1 ring-white/60"
      >
        <header className="bsf-detail-head shrink-0 bg-[#1a3f4a] px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            Section {category.number}
          </p>
          <h3 className="mt-1 text-xl font-bold text-white">{category.title}</h3>
        </header>

        <div className="bsf-detail-body bsf-touch-scroll min-h-0 flex-1 overflow-y-auto px-6 py-5">
          {answered.length === 0 ? (
            <p className="text-center text-sm text-[#1e1d24]/60">
              No selections in this section.
            </p>
          ) : (
            <dl className="divide-y divide-[#1a3f4a]/10">
              {answered.map((q) => {
                const value = answers[q.id];
                const extras = getQuestionExtras(answers, q.id);
                const isImage =
                  typeof value === "string" && /^https?:\/\//i.test(value);
                return (
                  <div
                    key={q.id}
                    className={
                      isImage
                        ? "bsf-detail-row bsf-detail-row--photo py-3 first:pt-0 last:pb-0"
                        : "bsf-detail-row grid grid-cols-[110px_1fr] gap-4 py-3 first:pt-0 last:pb-0"
                    }
                  >
                    {isImage ? (
                      <>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#1a3f4a]/70">
                          {q.label || humanizeKey(q.id)}
                        </p>
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block overflow-hidden rounded-xl ring-1 ring-[#1a3f4a]/15"
                        >
                          <img
                            src={value}
                            alt={q.label || "Uploaded"}
                            className="bsf-detail-photo mx-auto block h-auto max-h-[min(280px,36vh)] w-auto max-w-full object-contain"
                          />
                        </a>
                      </>
                    ) : (
                      <>
                        <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#1a3f4a]/70">
                          {q.label || humanizeKey(q.id)}
                        </dt>
                        <dd className="min-w-0 text-sm font-semibold text-[#1e1d24]">
                          <span className="break-words">
                            {formatAnswerValue(value)}
                          </span>
                        </dd>
                      </>
                    )}
                    {extras.hasExtras && (
                      <div className="col-span-full mt-2 rounded-xl bg-white/50 px-3 py-2">
                        {extras.notes && (
                          <p className="text-xs leading-relaxed text-[#1e1d24]/80">
                            <span className="font-bold text-[#1a3f4a]">
                              Notes:{" "}
                            </span>
                            {extras.notes}
                          </p>
                        )}
                        {extras.photos.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {extras.photos.map((url) => (
                              <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-lg ring-1 ring-[#1a3f4a]/15"
                              >
                                <img
                                  src={url}
                                  alt="Question photo"
                                  className="h-16 w-16 object-cover"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </dl>
          )}
        </div>

        <footer className="bsf-detail-foot flex shrink-0 flex-col gap-2.5 border-t border-[#1a3f4a]/10 bg-white/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="order-2 min-h-[2.75rem] cursor-pointer rounded-xl border-2 border-[#1a3f4a]/25 bg-transparent px-4 text-sm font-bold text-[#1a3f4a] transition duration-200 hover:scale-[1.02] hover:border-[#1a3f4a]/50 hover:bg-[#1a3f4a]/10 active:scale-[0.98] sm:order-1 sm:min-h-[3.25rem] sm:rounded-2xl sm:px-6 sm:text-base"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="order-1 min-h-[2.75rem] w-full cursor-pointer rounded-xl bg-[#2D6B7A] px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(45,107,122,0.3)] transition duration-200 hover:scale-[1.03] hover:bg-[#1e5562] hover:shadow-[0_12px_28px_rgba(45,107,122,0.4)] active:scale-[0.98] sm:order-2 sm:min-h-[3.25rem] sm:w-auto sm:rounded-2xl sm:px-10 sm:text-base sm:shadow-[0_12px_30px_rgba(45,107,122,0.35)]"
          >
            Edit
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
}