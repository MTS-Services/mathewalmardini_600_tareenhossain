// import { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "motion/react";

// const processSteps = [
//   {
//     id: 1,
//     title: "Idea",
//     description:
//       "If you're reading this, then chances are you've already made a decision and have an idea about your renovation. Bespoke will turn that idea into a reality.",
//     // image: "/Our_process/1_Idea.jpg",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779691/1_Idea_r5ll2w.jpg",
//   },
//   {
//     id: 2,
//     title: "Talk to us",
//     description:
//       "Tell us everything - from what you want your remodel to look like to why you've chosen to do it.",
//     // image: "/Our_process/2_Talk_to_us.png",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779715/2_Talk_to_us_mtuzfw.png",
//   },
//   {
//     id: 3,
//     title: "Get a quote",
//     description:
//       "You may be thinking about your project. Cost, details, timeliness and accuracy are the keys to successful project. Bespoke takes estimates as serious as you do.",
//     // image: "/Our_process/3_Get_a_quote.jpg",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772780047/3_Get_a_quote_izblui.jpg",
//   },
//   {
//     id: 4,
//     title: "Design",
//     description:
//       "Once you give us the green light. Together, we'll help you plan and design your dream project, and set a timeline that you feel good about.",
//     // image: "/Our_process/4_Design.jpg",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779863/4_Design_wauygh.jpg",
//   },
//   {
//     id: 5,
//     title: "The fun part",
//     description:
//       "Once the final game plan is in place, then it's time for the magic to begin. Relax and enjoy the process while we take care of all the work.",
//     // image: "/Our_process/5_The_fun_part.png",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779884/5_The_fun_part_awdjao.png",
//   },
//   {
//     id: 6,
//     title: "Stay informed",
//     description:
//       "If we weren't named Bespoke, we might be called transparency. Our team will provide you with updates throughout the entire project to keep you informed. (And excited!)",
//     // image: "/Our_process/6_Stay_informed.png",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779906/6_Stay_informed_tqlxtx.png",
//   },
//   {
//     id: 7,
//     title: "Celebrate",
//     description:
//       "It's the moment you've been waiting for: your project is complete! Invite your family and friends and get the stake on the barbecue.",
//     // image: "/Our_process/7_Celebrate.png",
//     image:
//       "https://res.cloudinary.com/dv18awr10/image/upload/v1772779926/7_Celebrate_cijwoz.png",
//   },
// ];

// const n = processSteps.length;

// // ─── BACKGROUND crossfade (unchanged — already correct) ───
// const getBackgroundRange = (index) => {
//   const stepSize = 1 / n;
//   const cross = stepSize * 0.4;

//   if (index === 0) {
//     const fadeOutStart = stepSize - cross / 2;
//     const fadeOutEnd = stepSize + cross / 2;
//     return {
//       input: [0, 0, Math.min(fadeOutStart, 1), Math.min(fadeOutEnd, 1)],
//       output: [1, 1, 1, 0],
//     };
//   }

//   if (index === n - 1) {
//     const prevBoundary = index * stepSize;
//     const fadeInStart = prevBoundary - cross / 2;
//     const fadeInEnd = prevBoundary + cross / 2;
//     return {
//       input: [Math.max(fadeInStart, 0), Math.max(fadeInEnd, 0), 1, 1],
//       output: [0, 1, 1, 1],
//     };
//   }

//   const prevBoundary = index * stepSize;
//   const nextBoundary = (index + 1) * stepSize;
//   return {
//     input: [
//       Math.max(prevBoundary - cross / 2, 0),
//       Math.min(prevBoundary + cross / 2, 1),
//       Math.max(nextBoundary - cross / 2, 0),
//       Math.min(nextBoundary + cross / 2, 1),
//     ],
//     output: [0, 1, 1, 0],
//   };
// };

// /**
//  * CONTENT ranges — strictly sequential, NO overlap between steps.
//  * Each step fades out THEN next fades in. Fade window is very tight (3% of
//  * total scroll) so the brief opacity=0 moment is imperceptible.
//  * useSpring smooths it further. Matches reference: no overlap, no black flash.
//  */
// const getContentRange = (index) => {
//   const stepSize = 1 / n;
//   const fade = stepSize * 0.03; // very tight fade — fast transition, no visible gap

//   if (index === 0) {
//     return {
//       input: [0, 0, stepSize - fade, stepSize],
//       output: [1, 1, 1, 0],
//     };
//   }

//   if (index === n - 1) {
//     const start = index * stepSize;
//     return {
//       input: [start, start + fade, 1, 1],
//       output: [0, 1, 1, 1],
//     };
//   }

//   const start = index * stepSize;
//   const end = (index + 1) * stepSize;
//   return {
//     input: [start, start + fade, end - fade, end],
//     output: [0, 1, 1, 0],
//   };
// };

// /* ─── Full-bleed per-step background (shared) ─── */
// const BackgroundImages = ({ scrollProgress }) => (
//   <div className="absolute inset-0 overflow-hidden">
//     {processSteps.map((step, index) => {
//       const { input: bgInput, output: bgOutput } = getBackgroundRange(index);
//       const opacity = useTransform(scrollProgress, bgInput, bgOutput);
//       return (
//         <motion.div
//           key={step.id}
//           style={{ opacity }}
//           className="absolute inset-0"
//         >
//           <img
//             src={step.image}
//             alt=""
//             aria-hidden="true"
//             className="w-full h-full object-cover"
//             style={{ filter: "blur(2px)", transform: "scale(1.05)" }}
//           />
//           <div
//             className="absolute inset-0"
//             style={{ background: "rgba(0,0,0,0.65)" }}
//           />
//         </motion.div>
//       );
//     })}
//   </div>
// );

// /* ─── Mobile sticky step card ─── */
// const MobileStepCard = ({ scrollProgress }) => {
//   return (
//     <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
//       {processSteps.map((step, index) => {
//         const { input: inputRange, output: outputValues } =
//           getContentRange(index);

//         const opacity = useTransform(scrollProgress, inputRange, outputValues);
//         const y = useTransform(scrollProgress, inputRange, [40, 0, 0, -40]);

//         return (
//           <motion.div
//             key={step.id}
//             style={{
//               opacity,
//               y,
//               position: "absolute",
//               left: "1.25rem",
//               right: "1.25rem",
//               top: "20%",
//             }}
//           >
//             {/* Image */}
//             <div
//               style={{
//                 width: "100%",
//                 aspectRatio: "4/3",
//                 borderRadius: "0.75rem",
//                 overflow: "hidden",
//                 marginBottom: "1rem",
//               }}
//             >
//               <img
//                 src={step.image}
//                 alt={step.title}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   display: "block",
//                 }}
//               />
//             </div>

//             {/* Process name */}
//             <h3
//               style={{
//                 fontSize: "clamp(1.3rem, 5.5vw, 1.75rem)",
//                 fontWeight: 700,
//                 color: "#FFFFFF",
//                 marginBottom: "0.4rem",
//                 lineHeight: 1.2,
//               }}
//             >
//               {step.title}
//             </h3>

//             {/* Description */}
//             <p
//               style={{
//                 fontSize: "clamp(0.8rem, 3.5vw, 0.95rem)",
//                 color: "#FFFDF1",
//                 lineHeight: 1.6,
//               }}
//             >
//               {step.description}
//             </p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// /* ─── Mobile progress dots ─── */
// const MobileProgressDots = ({ scrollProgress }) => {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         bottom: "2rem",
//         left: 0,
//         right: 0,
//         display: "flex",
//         justifyContent: "center",
//         gap: "0.5rem",
//         zIndex: 30,
//       }}
//     >
//       {processSteps.map((_, index) => {
//         const { input: inputRange, output: outputValues } =
//           getContentRange(index);

//         const scale = useTransform(
//           scrollProgress,
//           inputRange,
//           [1, 1.6, 1.6, 1],
//         );
//         const bg = useTransform(scrollProgress, inputRange, [
//           "rgba(255,255,255,0.35)",
//           "rgba(255,255,255,1)",
//           "rgba(255,255,255,1)",
//           "rgba(255,255,255,0.35)",
//         ]);

//         return (
//           <motion.div
//             key={index}
//             style={{
//               width: 8,
//               height: 8,
//               borderRadius: 9999,
//               backgroundColor: bg,
//               scale,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// /* ─── Main Component ─── */
// const ProcessSection = () => {
//   const containerRef = useRef(null);
//   const mobileContainerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const { scrollYProgress: mobileScrollYProgress } = useScroll({
//     target: mobileContainerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 85,
//     damping: 24,
//     mass: 0.55,
//   });
//   const smoothMobileProgress = useSpring(mobileScrollYProgress, {
//     stiffness: 85,
//     damping: 24,
//     mass: 0.55,
//   });

//   // Desktop: "Our Process" title fades out on scroll
//   const titleOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);
//   const titleY = useTransform(smoothProgress, [0, 0.08], [0, -40]);

//   // Mobile: "Our Process" title fades out on scroll
//   const mobileTitleOpacity = useTransform(
//     smoothMobileProgress,
//     [0, 0.06],
//     [1, 0],
//   );
//   const mobileTitleY = useTransform(smoothMobileProgress, [0, 0.06], [0, -30]);

//   return (
//     <div className="relative" style={{ background: "#000" }}>
//       {/* ───── DESKTOP ───── */}
//       <div ref={containerRef} className="hidden lg:block">
//         <div className="h-[850vh]">
//           <div className="sticky top-0 h-screen overflow-hidden">
//             <BackgroundImages scrollProgress={smoothProgress} />

//             {/* Centered "Our Process" title */}
//             <motion.div
//               style={{
//                 opacity: titleOpacity,
//                 y: titleY,
//                 position: "absolute",
//                 top: "8vh",
//                 left: 0,
//                 right: 0,
//                 zIndex: 20,
//                 display: "flex",
//                 justifyContent: "center",
//                 pointerEvents: "none",
//               }}
//             >
//               <h2
//                 className="font-bold text-white"
//                 style={{
//                   fontSize: "clamp(2rem, 4vw, 3.5rem)",
//                   lineHeight: 1.1,
//                   textAlign: "center",
//                 }}
//               >
//                 OUR PROCESS
//               </h2>
//             </motion.div>

//             <div className="relative z-10 grid grid-cols-2 h-full">
//               {/* Left: steps list */}
//               <div
//                 className="flex flex-col justify-center"
//                 style={{ padding: "2rem 4rem 2rem 10rem" }}
//               >
//                 <div className="process-list">
//                   {processSteps.map((step, index) => {
//                     // 🔧 Use getBackgroundRange so adjacent items' white highlights
//                     // OVERLAP during transition — exactly like the reference video.
//                     // getContentRange had a gap where BOTH items were gray simultaneously.
//                     const { input: navInput, output: navOutput } =
//                       getBackgroundRange(index);

//                     const color = useTransform(
//                       smoothProgress,
//                       navInput,
//                       navOutput.map((v) =>
//                         v >= 1
//                           ? "#FFFFFF"
//                           : `rgba(189,185,185,${Math.max(0.4, v)})`,
//                       ),
//                     );

//                     return (
//                       <motion.div key={step.id} className="text-left">
//                         <div
//                           className="flex items-center gap-4"
//                           style={{ minHeight: "5rem" }}
//                         >
//                           <motion.h3
//                             className="text-3xl lg:text-5xl font-bold"
//                             style={{ color }}
//                           >
//                             {step.title}
//                           </motion.h3>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Right: image + description */}
//               <div
//                 className="relative flex items-center justify-center"
//                 style={{ padding: "3rem 4rem" }}
//               >
//                 <div className="w-full max-w-7xl">
//                   {/* Image container */}
//                   <div
//                     className="relative overflow-hidden"
//                     style={{
//                       marginTop: "10rem",
//                       marginBottom: "1.5rem",
//                       borderRadius: "0.75rem",
//                       aspectRatio: "16/10",
//                       height: "auto",
//                     }}
//                   >
//                     {processSteps.map((step, index) => {
//                       const { input: imgInput, output: imgOutput } =
//                         getContentRange(index);

//                       const opacity = useTransform(
//                         smoothProgress,
//                         imgInput,
//                         imgOutput,
//                       );
//                       const scale = useTransform(
//                         smoothProgress,
//                         imgInput,
//                         [0.93, 1, 1, 0.93],
//                       );
//                       const y = useTransform(
//                         smoothProgress,
//                         imgInput,
//                         [50, 0, 0, -50],
//                       );

//                       return (
//                         <motion.div
//                           key={step.id}
//                           style={{ opacity, scale, y }}
//                           className="absolute inset-0"
//                         >
//                           <img
//                             src={step.image}
//                             alt={step.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </motion.div>
//                       );
//                     })}
//                   </div>

//                   {/* Description container */}
//                   <div className="relative h-48">
//                     {processSteps.map((step, index) => {
//                       const { input: descInput, output: descOutput } =
//                         getContentRange(index);

//                       const opacity = useTransform(
//                         smoothProgress,
//                         descInput,
//                         descOutput,
//                       );
//                       const y = useTransform(
//                         smoothProgress,
//                         descInput,
//                         [24, 0, 0, -24],
//                       );

//                       return (
//                         <motion.div
//                           key={step.id}
//                           style={{ opacity, y }}
//                           className="absolute inset-0"
//                         >
//                           <h2
//                             className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white"
//                             style={{ marginBottom: "1rem" }}
//                           >
//                             {step.title}
//                           </h2>
//                           <p className="text-gray-300 text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
//                             {step.description}
//                           </p>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ───── MOBILE ───── */}
//       <div ref={mobileContainerRef} className="block lg:hidden">
//         <div style={{ height: `${(processSteps.length + 1) * 100}vh` }}>
//           <div className="sticky top-0 h-screen overflow-hidden">
//             <BackgroundImages scrollProgress={smoothMobileProgress} />

//             {/* "Our Process" centered title */}
//             <motion.div
//               style={{
//                 opacity: mobileTitleOpacity,
//                 y: mobileTitleY,
//                 position: "absolute",
//                 top: "8vh",
//                 left: 0,
//                 right: 0,
//                 zIndex: 20,
//                 display: "flex",
//                 justifyContent: "center",
//                 pointerEvents: "none",
//               }}
//             >
//               <h2
//                 style={{
//                   fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
//                   fontWeight: 700,
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                 }}
//               >
//                 OUR PROCESS
//               </h2>
//             </motion.div>

//             <MobileStepCard scrollProgress={smoothMobileProgress} />
//             <MobileProgressDots scrollProgress={smoothMobileProgress} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const processSteps = [
  {
    id: 1,
    title: "Idea",
    description:
      "If you're reading this, then chances are you've already made a decision and have an idea about your renovation. Bespoke will turn that idea into a reality.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/1_Idea.jpg",
      //   image:
      // "/Our_process/1_Idea.jpg",
  },
  {
    id: 2,
    title: "Talk to us",
    description:
      "Tell us everything - from what you want your remodel to look like to why you've chosen to do it.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/2_Talk_to_us.png",
      //   image:
      // "/Our_process/2_Talk_to_us.png",
  },
  {
    id: 3,
    title: "Get a quote",
    description:
      "You may be thinking about your project. Cost, details, timeliness and accuracy are the keys to successful project. Bespoke takes estimates as serious as you do.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/3_Get_a_quote.jpg",
      //   image:
      // "/Our_process/3_Get_a_quote.jpg",
  },
  {
    id: 4,
    title: "Design",
    description:
      "Once you give us the green light. Together, we'll help you plan and design your dream project, and set a timeline that you feel good about.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/4_Design.jpg",
      //   image:
      // "/Our_process/4_Design.jpg",
  },
  {
    id: 5,
    title: "The fun part",
    description:
      "Once the final game plan is in place, then it's time for the magic to begin. Relax and enjoy the process while we take care of all the work.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/5_The_fun_part.png",
      //   image:
      // "/Our_process/5_The_fun_part.png",
  },
  {
    id: 6,
    title: "Stay informed",
    description:
      "If we weren't named Bespoke, we might be called transparency. Our team will provide you with updates throughout the entire project to keep you informed. (And excited!)",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/6_Stay_informed.png",
      //   image:
      // "/Our_process/6_Stay_informed.png",
  },
  {
    id: 7,
    title: "Celebrate",
    description:
      "It's the moment you've been waiting for: your project is complete! Invite your family and friends and get the stake on the barbecue.",
    image:
      "https://dc3v08iv2c2ou.cloudfront.net/Our_process/7_Celebrate.png",
      //   image:
      // "/Our_process/7_Celebrate.png",
  },
];

const TimelineProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="bg-white py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to bringing your vision to life
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Gray Background) - Stops at last circle center */}
          <div 
            className="absolute w-1 bg-gray-300"
            style={{ 
              left: "2rem",
              top: "2rem",
              height: "calc(100% - 20rem)",
              zIndex: 1 
            }}
          />
          
          {/* Animated Progress Line - Grows on Scroll */}
          <motion.div
            className="absolute w-1 origin-top bg-[#2d6b7a]"
            style={{
              left: "2rem",
              top: "2rem",
              height: "calc(100% - 20rem)",
              scaleY: smoothProgress,
              zIndex: 2,
            }}
          />

          {/* Process Steps */}
          <div className="space-y-32 md:space-y-40 lg:space-y-48">
            {processSteps.map((step, index) => {
              // Each step occupies an equal portion of scroll
              const stepCount = processSteps.length;
              const stepSize = 1 / stepCount;
              const stepStart = index * stepSize;
              const stepEnd = (index + 1) * stepSize;
              
              // First step active by default, last step stays active at the end
              const isActive = useTransform(
                smoothProgress,
                index === 0
                  ? [0, 0.001, stepEnd - 0.02, stepEnd]
                  : index === stepCount - 1
                  ? [stepStart, stepStart + 0.02, 0.95, 1]
                  : [stepStart, stepStart + 0.02, stepEnd - 0.02, stepEnd],
                index === 0
                  ? [1, 1, 1, 0]
                  : index === stepCount - 1
                  ? [0, 1, 1, 1]
                  : [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={step.id}
                  className="relative flex items-start gap-8 md:gap-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Left: Number Circle - Line goes through center */}
                  <div className="shrink-0 relative" style={{ zIndex: 10 }}>
                    <motion.div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-2xl"
                      style={{
                        borderColor: useTransform(
                          isActive,
                          [0, 1],
                          ["#d1d5db", "#2d6b7a"]
                        ),
                        backgroundColor: useTransform(
                          isActive,
                          [0, 1],
                          ["#ffffff", "#2d6b7a"]
                        ),
                        color: useTransform(
                          isActive,
                          [0, 1],
                          ["#6b7280", "#ffffff"]
                        ),
                      }}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Image */}
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </motion.div>

                    {/* Title & Description */}
                    <div className="flex flex-col justify-center">
                      <motion.h3
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                        style={{
                          color: useTransform(
                            isActive,
                            [0, 1],
                            ["#374151", "#2d6b7a"]
                          ),
                        }}
                      >
                        {step.title}
                      </motion.h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineProcessSection;
