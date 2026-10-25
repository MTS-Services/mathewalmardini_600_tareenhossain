/** Shared styles — match intro + bathroom-type step (desktop default) */

export const BACK_BTN =
  "inline-flex cursor-pointer items-center gap-2 rounded-2xl px-2 py-4 text-base font-bold text-[#1a3f4a] transition duration-200 hover:text-[#2D6B7A] hover:-translate-x-0.5 disabled:cursor-not-allowed disabled:opacity-50 max-sm:gap-1.5 max-sm:rounded-xl max-sm:px-1.5 max-sm:py-2.5 max-sm:text-sm";

export const PRIMARY_BTN =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-[#2D6B7A] px-8 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(45,107,122,0.35)] transition duration-200 hover:scale-[1.02] hover:bg-[#1e5562] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 max-sm:min-h-[2.75rem] max-sm:gap-1.5 max-sm:rounded-xl max-sm:px-4 max-sm:py-2.5 max-sm:text-sm max-sm:shadow-[0_8px_20px_rgba(45,107,122,0.3)]";

export const INPUT_CLASS =
  "w-full rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-base text-[#1e1d24] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] placeholder:text-[#1e1d24]/40 outline-none transition duration-200 hover:border-[#2D6B7A]/40 focus:border-[#2D6B7A] focus:bg-white/55 focus:ring-4 focus:ring-[#2D6B7A]/15";

export const LABEL_CLASS =
  "mb-2 block text-sm font-bold tracking-[0.06em] uppercase text-[#1a3f4a]";

export const EYEBROW_CLASS =
  "text-sm font-bold uppercase tracking-[0.06em] text-[#1a3f4a]";

export const TITLE_CLASS = "mt-1 text-xl sm:text-2xl font-bold text-[#1e1d24]";

/** Option buttons — same weight as Save / Continue */
export const OPTION_BTN =
  "cursor-pointer rounded-2xl border-2 px-5 py-4 text-base font-bold transition duration-200 hover:scale-[1.02] active:scale-[0.98] min-w-0 max-w-full max-sm:rounded-xl max-sm:px-3 max-sm:py-2.5 max-sm:text-sm";

export const OPTION_IDLE =
  "border-white/60 bg-white/45 text-[#1e1d24] shadow-[0_4px_14px_rgba(30,29,36,0.08)] hover:border-[#2D6B7A]/50 hover:bg-white/65";

export const OPTION_ACTIVE =
  "border-[#2D6B7A] bg-[#2D6B7A] text-white shadow-[0_10px_24px_rgba(45,107,122,0.32)] ring-2 ring-[#2D6B7A]/25";

export const OPTION_SOLID_ACTIVE = OPTION_ACTIVE;
