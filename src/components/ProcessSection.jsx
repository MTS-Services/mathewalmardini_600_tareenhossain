import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const processSteps = [
  {
    id: 1,
    title: "Idea",
    description:
      "If you're reading this, then chances are you've already made a decision and have an idea about your renovation. Bespoke will turn that idea into a reality.",
    image: "/Our_process/1_Idea.jpg",
  },
  {
    id: 2,
    title: "Talk to us",
    description:
      "Tell us everything - from what you want your remodel to look like to why you've chosen to do it.",
    image: "/Our_process/2_Talk_to_us.png",
  },
  {
    id: 3,
    title: "Get a quote",
    description:
      "You may be thinking about your project. Cost, details, timeliness and accuracy are the keys to successful project. Bespoke takes estimates as serious as you do.",
    image: "/Our_process/3_Get_a_quote.jpg",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Once you give us the green light. Together, we'll help you plan and design your dream project, and set a timeline that you feel good about.",
    image: "/Our_process/4_Design.jpg",
  },
  {
    id: 5,
    title: "The fun part",
    description:
      "Once the final game plan is in place, then it's time for the magic to begin. Relax and enjoy the process while we take care of all the work.",
    image: "/Our_process/5_The_fun_part.png",
  },
  {
    id: 6,
    title: "Stay informed",
    description:
      "If we weren't named Bespoke, we might be called transparency. Our team will provide you with updates throughout the entire project to keep you informed. (And excited!)",
    image: "/Our_process/6_Stay_informed.png",
  },
  {
    id: 7,
    title: "Celebrate",
    description:
      "It's the moment you've been waiting for: your project is complete! Invite your family and friends and get the stake on the barbecue.",
    image: "/Our_process/7_Celebrate.png",
  },
];

/* ─── Full-bleed per-step background (shared) ─── */
const BackgroundImages = ({ scrollProgress }) => (
  <div className="absolute inset-0 overflow-hidden">
    {processSteps.map((step, index) => {
      const stepProgress = index / (processSteps.length - 1);
      const nextStepProgress = (index + 1) / (processSteps.length - 1);
      const opacity = useTransform(
        scrollProgress,
        [Math.max(0, stepProgress - 0.01), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.01)],
        [0, 1, 1, 0],
      );
      return (
        <motion.div key={step.id} style={{ opacity }} className="absolute inset-0">
          <img
            src={step.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ filter: "blur(2px)", transform: "scale(1.05)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)" }} />
        </motion.div>
      );
    })}
  </div>
);

/* ─── Mobile sticky step card ─── */
const MobileStepCard = ({ scrollProgress }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
      }}
    >
      {processSteps.map((step, index) => {
        const stepProgress = index / (processSteps.length - 1);
        const nextStepProgress = (index + 1) / (processSteps.length - 1);

        const opacity = useTransform(
          scrollProgress,
          [
            Math.max(0, stepProgress - 0.005),
            stepProgress,
            nextStepProgress,
            Math.min(1, nextStepProgress + 0.005),
          ],
          [0, 1, 1, 0],
        );

        const y = useTransform(
          scrollProgress,
          [
            Math.max(0, stepProgress - 0.005),
            stepProgress,
            nextStepProgress,
            Math.min(1, nextStepProgress + 0.005),
          ],
          [40, 0, 0, -40],
        );

        return (
          <motion.div
            key={step.id}
            style={{
              opacity,
              y,
              position: "absolute",
              left: "1.25rem",
              right: "1.25rem",
              top: "20%",
            }}
          >
            {/* Step number */}
            <div style={{ marginBottom: "0.6rem" }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#FFFDF1",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Step {String(index + 1).padStart(2, "0")} / {String(processSteps.length).padStart(2, "0")}
              </span>
            </div>

            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "0.75rem",
                overflow: "hidden",
                marginBottom: "1rem",
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Process name */}
            <h3
              style={{
                fontSize: "clamp(1.3rem, 5.5vw, 1.75rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "0.4rem",
                lineHeight: 1.2,
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(0.8rem, 3.5vw, 0.95rem)",
                color: "#FFFDF1",
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ─── Mobile progress dots ─── */
const MobileProgressDots = ({ scrollProgress }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        zIndex: 30,
      }}
    >
      {processSteps.map((_, index) => {
        const stepProgress = index / (processSteps.length - 1);
        const nextStepProgress = (index + 1) / (processSteps.length - 1);

        const scale = useTransform(
          scrollProgress,
          [
            Math.max(0, stepProgress - 0.005),
            stepProgress,
            nextStepProgress,
            Math.min(1, nextStepProgress + 0.005),
          ],
          [1, 1.6, 1.6, 1],
        );

        const bg = useTransform(
          scrollProgress,
          [
            Math.max(0, stepProgress - 0.005),
            stepProgress,
            nextStepProgress,
            Math.min(1, nextStepProgress + 0.005),
          ],
          ["rgba(255,255,255,0.35)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.35)"],
        );

        return (
          <motion.div
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              backgroundColor: bg,
              scale,
            }}
          />
        );
      })}
    </div>
  );
};

/* ─── Main Component ─── */
const ProcessSection = () => {
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  // Desktop: "Our Process" title fades out on scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.08], [0, -40]);

  // Desktop: right panel appears on scroll
  const rightOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const rightPanelY = useTransform(scrollYProgress, [0, 0.06], [50, 0]);

  // Mobile: "Our Process" title fades out on scroll
  const mobileTitleOpacity = useTransform(mobileScrollYProgress, [0, 0.06], [1, 0]);
  const mobileTitleY = useTransform(mobileScrollYProgress, [0, 0.06], [0, -30]);

  return (
    <div className="relative" style={{ background: "#000" }}>


      <div ref={containerRef} className="hidden lg:block">
        <div className="h-[700vh]">
          <div className="sticky top-0 h-screen overflow-hidden">

            <BackgroundImages scrollProgress={scrollYProgress} />

            {/* Centered "Our Process" title */}
            <motion.div
              style={{
                opacity: titleOpacity,
                y: titleY,
                position: "absolute",
                top: "15vh",
                left: 0,
                right: 0,
                zIndex: 20,
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1, textAlign: "center" }}
              >
                Our Process
              </h2>
            </motion.div>

            <div className="relative z-10 grid grid-cols-2 h-full">
              {/* Left: steps list */}
              <div
                className="flex flex-col justify-center"
                style={{ padding: "2rem 4rem 2rem 10rem" }}
              >
                <div className="process-list">
                  {processSteps.map((step, index) => {
                    const stepProgress = index / (processSteps.length - 1);
                    const nextStepProgress = (index + 1) / (processSteps.length - 1);
                    const opacity = useTransform(scrollYProgress,
                      [Math.max(0, stepProgress - 0.006), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.006)],
                      [0.3, 1, 1, 0.3]
                    );
                    const color = useTransform(scrollYProgress,
                      [Math.max(0, stepProgress - 0.006), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.006)],
                      ["#9CA3AF", "#FFFFFF", "#FFFFFF", "#9CA3AF"]
                    );
                    return (
                      <motion.div key={step.id} style={{ opacity }} className="text-left">
                        <div className="flex items-center gap-4" style={{ minHeight: "3.5rem" }}>
                          <motion.h3 className="text-2xl lg:text-4xl font-bold" style={{ color, transformOrigin: "left center" }}>
                            {step.title}
                          </motion.h3>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: image + description */}
              <div className="relative flex items-center justify-center" style={{ padding: "4rem" }}>
                <motion.div className="w-full max-w-4xl" style={{ opacity: rightOpacity, y: rightPanelY }}>
                  <div
                    className="relative aspect-video overflow-hidden bg-neutral-900"
                    style={{ marginTop: "6rem", marginBottom: "2rem", borderRadius: "0.5rem" }}
                  >
                    {processSteps.map((step, index) => {
                      const stepProgress = index / (processSteps.length - 1);
                      const nextStepProgress = (index + 1) / (processSteps.length - 1);
                      const opacity = useTransform(scrollYProgress,
                        [Math.max(0, stepProgress - 0.005), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.005)],
                        [0, 1, 1, 0]
                      );
                      const scale = useTransform(scrollYProgress,
                        [Math.max(0, stepProgress - 0.005), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.005)],
                        [0.8, 1, 1, 0.8]
                      );
                      const y = useTransform(scrollYProgress,
                        [Math.max(0, stepProgress - 0.005), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.005)],
                        [50, 0, 0, -50]
                      );
                      return (
                        <motion.div key={step.id} style={{ opacity, scale, y }} className="absolute inset-0">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="relative h-48">
                    {processSteps.map((step, index) => {
                      const stepProgress = index / (processSteps.length - 1);
                      const nextStepProgress = (index + 1) / (processSteps.length - 1);
                      const opacity = useTransform(scrollYProgress,
                        [Math.max(0, stepProgress - 0.005), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.005)],
                        [0, 1, 1, 0]
                      );
                      const y = useTransform(scrollYProgress,
                        [Math.max(0, stepProgress - 0.005), stepProgress, nextStepProgress, Math.min(1, nextStepProgress + 0.005)],
                        [20, 0, 0, -20]
                      );
                      return (
                        <motion.div key={step.id} style={{ opacity, y }} className="absolute inset-0">
                          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ marginBottom: "1rem" }}>
                            {step.title}
                          </h2>
                          <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div ref={mobileContainerRef} className="block lg:hidden">
        {/* Scroll distance: 1 extra viewport per step */}
        <div style={{ height: `${(processSteps.length + 1) * 100}vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden">

            {/* Shared background */}
            <BackgroundImages scrollProgress={mobileScrollYProgress} />

            {/* "Our Process" centered title — fades out on first scroll */}
            <motion.div
              style={{
                opacity: mobileTitleOpacity,
                y: mobileTitleY,
                position: "absolute",
                top: "12vh",
                left: 0,
                right: 0,
                zIndex: 20,
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Our Process
              </h2>
            </motion.div>

            {/* Full-screen step cards */}
            <MobileStepCard scrollProgress={mobileScrollYProgress} />

            {/* Progress dots */}
            <MobileProgressDots scrollProgress={mobileScrollYProgress} />

          </div>
        </div>
      </div>

    </div>
  );
};

export default ProcessSection;