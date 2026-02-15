import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const processSteps = [
  {
    id: 1,
    title: "Idea",
    description:
      "If you're reading this, then chances are you've already made a decision and have an idea about your renovation. Bespoke will turn that idea into a reality.",
    video: "/Process/Idea.mp4",
  },
  {
    id: 2,
    title: "Talk to us",
    description:
      "Tell us everything - from what you want your remodel to look like to why you've chosen to do it.",
    video: "/Process/talk-animated-icon-2026-01-28-05-29-03-utc.mov",
  },
  {
    id: 3,
    title: "Get a quote",
    description:
      "You may be thinking about your project. Cost, details, timeliness and accuracy are the keys to successful project. Bespoke takes estimates as serious as you do.",
    video: "/Process/39.mp4",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Once you give us the green light. Together, we'll help you plan and design your dream project, and set a timeline that you feel good about.",
    video: "/Process/design.mp4",
  },
  {
    id: 5,
    title: "The fun part",
    description:
      "Once the final game plan is in place, then it's time for the magic to begin. Relax and enjoy the process while we take care of all the work.",
    video: "/Process/the_fun_part.mp4",
  },
  {
    id: 6,
    title: "Stay informed",
    description:
      "If we weren't named Bespoke, we might be called transparency. Our team will provide you with updates throughout the entire project to keep you informed. (And excited!)",
    video: "/Process/stay_informed.mp4",
  },
  {
    id: 7,
    title: "Celebrate",
    description:
      "It's the moment you've been waiting for: your project is complete! Invite your family and friends and get the stake on the barbecue.",
    video: "/Process/celebraction.mp4",
  },
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-black text-2xl md:text-[30px] lg:text-4xl"
    >
      <div>
        <div className="process-title-wrap">
          <h2 className="process-title">Our Process</h2>
        </div>
      </div>
      {/* Desktop / large screens: sticky storytelling layout */}
      <div className="hidden lg:block">
        {/* Spacer for scroll distance */}
        <div className="h-[700vh]">
          {/* Sticky Container */}
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Side - Process Steps List */}
              <LeftSide scrollProgress={scrollYProgress} />

              {/* Right Side - Sticky Video & Content */}
              <RightSide scrollProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet: simple stacked numbered cards with basic animation */}
      <div className="mobile-process block lg:hidden">
        <div className="mobile-process-list">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35 }}
              className="mobile-card"
            >
              <div className="mobile-card-badge">{index + 1}</div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <div
                    style={{ fontSize: 18, fontWeight: 700, color: "white" }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>
                    {step.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileList = () => {
  return (
    <div
      style={{ padding: "1.25rem", paddingLeft: "2.75rem" }}
      className="bg-black min-h-screen"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35 }}
            className=""
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.03)",
              padding: "0.75rem",
              paddingLeft: "2.25rem",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  background: "#0d9488",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </div>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "white" }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 6 }}>
                  {step.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const LeftSide = ({ scrollProgress }) => {
  return (
    <div
      className="flex items-center justify-start bg-black/50"
      style={{ padding: "2rem 4rem", paddingLeft: "10rem" }}
    >
      <div className="process-list">
        {processSteps.map((step, index) => {
          const stepProgress = index / (processSteps.length - 1);
          const nextStepProgress = (index + 1) / (processSteps.length - 1);

          const opacity = useTransform(
            scrollProgress,
            [
              Math.max(0, stepProgress - 0.006),
              stepProgress,
              nextStepProgress,
              Math.min(1, nextStepProgress + 0.006),
            ],
            [0.3, 1, 1, 0.3],
          );

          // left titles: no scale, only opacity and color

          // color animation: muted gray -> white -> muted gray (matches reference)
          const color = useTransform(
            scrollProgress,
            [
              Math.max(0, stepProgress - 0.006),
              stepProgress,
              nextStepProgress,
              Math.min(1, nextStepProgress + 0.006),
            ],
            ["#9CA3AF", "#FFFFFF", "#FFFFFF", "#9CA3AF"],
          );

          return (
            <motion.div key={step.id} style={{ opacity }} className="text-left">
              <div
                className="flex items-center gap-4"
                style={{ minHeight: "3.5rem" }}
              >
                <motion.h3
                  className="text-2xl lg:text-4xl font-bold"
                  style={{
                    marginLeft: 0,
                    color,
                    transformOrigin: "left center",
                  }}
                >
                  {step.title}
                </motion.h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const RightSide = ({ scrollProgress }) => {
  return (
    <div
      className="relative flex items-center justify-center bg-black"
      style={{ padding: "4rem" }}
    >
      <div className="w-full max-w-4xl">
        {/* Video Container */}
        <div
          className="relative aspect-video overflow-hidden bg-neutral-900"
          style={{
            marginTop: "6rem",
            marginBottom: "2rem",
            borderRadius: "0.5rem",
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

            const scale = useTransform(
              scrollProgress,
              [
                Math.max(0, stepProgress - 0.005),
                stepProgress,
                nextStepProgress,
                Math.min(1, nextStepProgress + 0.005),
              ],
              [0.8, 1, 1, 0.8],
            );

            const y = useTransform(
              scrollProgress,
              [
                Math.max(0, stepProgress - 0.005),
                stepProgress,
                nextStepProgress,
                Math.min(1, nextStepProgress + 0.005),
              ],
              [50, 0, 0, -50],
            );

            return (
              <motion.div
                key={step.id}
                style={{ opacity, scale, y }}
                className="absolute inset-0"
              >
                <video
                  src={step.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            );
          })}
        </div>

        {/* Text Content */}
        <div className="relative h-48">
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
              [20, 0, 0, -20],
            );

            return (
              <motion.div
                key={step.id}
                style={{ opacity, y }}
                className="absolute inset-0"
              >
                <h2
                  className="text-3xl lg:text-4xl font-bold text-white"
                  style={{ marginBottom: "1rem" }}
                >
                  {step.title}
                </h2>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
