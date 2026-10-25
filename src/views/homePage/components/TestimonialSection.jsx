// import { useState, useEffect } from "react";
// import { motion } from "motion/react";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Thompson",
//     rating: 5,
//     content:
//       "We were so thrilled with the superb job Mathew and his team did on our bathroom and en-suite, that we invited him to renovate our laundry and kitchen. Very happy with the end results. Would recommend B-spoke to anyone looking for good customer service, excellent ideas, a professional approach to the work and very reasonable rates.",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     rating: 5,
//     content:
//       "I am so glad to find this company to renovate my home. They did an amazing job with renovation of my home. B-spoke is easy to deal with, very good customer service, gave lots of ideas, and on top of all this the work they did was amazing. I love my new Home and Thank you B-Spoke!",
//   },
//   {
//     id: 3,
//     name: "Jennifer Martinez",
//     rating: 5,
//     content:
//       "Absolutely amazing bathrooms and awesome home renovation. Matt and his team were very professional, provided great customer service, very thorough and overall an absolute pleasure to deal with. Would highly recommend B-spoke for home owners looking to renovate. Thanks guys!",
//   },
//   {
//     id: 4,
//     name: "David Roberts",
//     rating: 5,
//     content:
//       "Totally in love with my new bathroom! Slick clean lines, beautiful workmanship, and an end result that's exactly and even better than I imagined. Matt and crew are amazing and such nice guys! I will be telling everyone to come to him for any work.",
//   },
// ];

// const TestimonialSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(1);

//   useEffect(() => {
//     const updateVisibleCount = () => {
//       const width = window.innerWidth;
//       if (width < 768) {
//         setVisibleCount(1); // Mobile
//       } else if (width < 1024) {
//         setVisibleCount(2); // Tablet
//       } else if (width < 1440) {
//         setVisibleCount(3); // Laptop
//       } else {
//         setVisibleCount(4); // Large desktop
//       }
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       Math.min(testimonials.length - visibleCount, prev + 1),
//     );
//   };

//   const renderStars = (rating) => {
//     return (
//       <div className="flex" style={{ gap: "0.25rem" }}>
//         {[...Array(rating)].map((_, index) => (
//           <Star
//             key={index}
//             className="text-yellow-400"
//             size={20}
//             fill="currentColor"
//           />
//         ))}
//       </div>
//     );
//   };

//   const visibleTestimonials = testimonials.slice(
//     currentIndex,
//     currentIndex + visibleCount,
//   );

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < testimonials.length - visibleCount;

//   return (
//     <div
//       className="bg-gradient-to-b from-black to-gray-900"
//       style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
//     >
//       {/* Section Title */}
//       <div style={{ marginBottom: "3rem", textAlign: "center" }}>
//         <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
//           What Our Clients Say
//         </h2>
//         <p
//           className="text-gray-400 text-sm md:text-base"
//           style={{ marginTop: "0.5rem" }}
//         >
//           Trusted by homeowners for exceptional renovations
//         </p>
//       </div>

//       {/* Carousel Container */}
//       <div
//         className="relative"
//         style={{
//           width: "min(95%, 100%)",
//           margin: "0 auto",
//         }}
//       >
//         {/* Left Arrow - Desktop Only */}
//         {canGoPrevious && (
//           <button
//             onClick={handlePrevious}
//             className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
//             style={{
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               left: "0.5rem",
//               padding: "0.75rem",
//             }}
//             aria-label="Previous testimonial"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//         )}

//         {/* Right Arrow - Desktop Only */}
//         {canGoNext && (
//           <button
//             onClick={handleNext}
//             className="hidden md:block absolute top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
//             style={{
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               right: "0.5rem",
//               padding: "0.75rem",
//             }}
//             aria-label="Next testimonial"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-7 w-7"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         )}

//         {/* Testimonials Container */}
//         <div
//           className="overflow-hidden"
//           style={{
//             paddingLeft: visibleCount === 1 ? "0" : "2.75rem",
//             paddingRight: visibleCount === 1 ? "0" : "2.75rem",
//           }}
//         >
//           <div className="flex-1 overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
//                 gap: visibleCount === 1 ? "0" : "1.5rem",
//               }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-gray-800 rounded-2xl shadow-xl flex-shrink-0 flex flex-col"
//                   style={{
//                     width:
//                       visibleCount === 1
//                         ? "100%"
//                         : `calc(${100 / visibleCount}% - ${(24 * (visibleCount - 1)) / visibleCount}px)`,
//                     padding: "1.5rem",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     minHeight: "350px",
//                   }}
//                 >
//                   {/* Rating */}
//                   <div style={{ marginBottom: "0.75rem" }}>
//                     {renderStars(testimonial.rating)}
//                   </div>

//                   {/* Content */}
//                   <p
//                     className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow"
//                     style={{ marginBottom: "1rem" }}
//                   >
//                     "{testimonial.content}"
//                   </p>

//                   {/* Name */}
//                   <div
//                     className="flex items-center"
//                     style={{ marginTop: "auto" }}
//                   >
//                     <div
//                       className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
//                       style={{ marginRight: "0.75rem" }}
//                     >
//                       {testimonial.name.charAt(0)}
//                     </div>
//                     <div>
//                       <h4 className="text-white font-semibold text-base md:text-lg">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-gray-500 text-xs md:text-sm">
//                         Verified Client
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Arrows - Below Cards */}
//         <div
//           className="flex md:hidden justify-center items-center"
//           style={{ gap: "1rem", marginTop: "1.5rem" }}
//         >
//           <button
//             onClick={handlePrevious}
//             disabled={!canGoPrevious}
//             className={`bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm ${
//               !canGoPrevious ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             style={{
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               padding: "0.75rem",
//             }}
//             aria-label="Previous testimonial"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={!canGoNext}
//             className={`bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-sm ${
//               !canGoNext ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             style={{
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               padding: "0.75rem",
//             }}
//             aria-label="Next testimonial"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         {visibleCount < testimonials.length && (
//           <div
//             className="flex justify-center"
//             style={{ gap: "0.5rem", marginTop: "1.5rem" }}
//           >
//             {Array.from(
//               { length: testimonials.length - visibleCount + 1 },
//               (_, i) => i,
//             ).map((index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "bg-white w-8 h-2"
//                     : "bg-white/30 w-2 h-2 hover:bg-white/50"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Thompson",
//     rating: 5,
//     content:
//       "We were so thrilled with the superb job Mathew and his team did on our bathroom and en-suite, that we invited him to renovate our laundry and kitchen. Very happy with the end results. Would recommend B-spoke to anyone looking for good customer service, excellent ideas, a professional approach to the work and very reasonable rates.",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     rating: 5,
//     content:
//       "I am so glad to find this company to renovate my home. They did an amazing job with renovation of my home. B-spoke is easy to deal with, very good customer service, gave lots of ideas, and on top of all this the work they did was amazing. I love my new Home and Thank you B-Spoke!",
//   },
//   {
//     id: 3,
//     name: "Jennifer Martinez",
//     rating: 5,
//     content:
//       "Absolutely amazing bathrooms and awesome home renovation. Matt and his team were very professional, provided great customer service, very thorough and overall an absolute pleasure to deal with. Would highly recommend B-spoke for home owners looking to renovate. Thanks guys!",
//   },
//   {
//     id: 4,
//     name: "David Roberts",
//     rating: 5,
//     content:
//       "Totally in love with my new bathroom! Slick clean lines, beautiful workmanship, and an end result that's exactly and even better than I imagined. Matt and crew are amazing and such nice guys! I will be telling everyone to come to him for any work.",
//   },
// ];

// // Animation variants — flip/fade combo
// const cardVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 80 : -80,
//     opacity: 0,
//     scale: 0.95,
//     rotateY: direction > 0 ? 12 : -12,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     rotateY: 0,
//     transition: {
//       duration: 0.55,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
//   exit: (direction) => ({
//     x: direction > 0 ? -80 : 80,
//     opacity: 0,
//     scale: 0.95,
//     rotateY: direction > 0 ? -12 : 12,
//     transition: {
//       duration: 0.4,
//       ease: [0.55, 0, 0.78, 0],
//     },
//   }),
// };

// const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

// const TestimonialSection = () => {
//   const [[currentIndex, direction], setPage] = useState([0, 0]);
//   const timerRef = useRef(null);

//   const paginate = (newDirection) => {
//     setPage(([prev]) => {
//       const next =
//         (prev + newDirection + testimonials.length) % testimonials.length;
//       return [next, newDirection];
//     });
//   };

//   // Auto-play
//   const resetTimer = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       paginate(1);
//     }, AUTO_PLAY_INTERVAL);
//   };

//   useEffect(() => {
//     resetTimer();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const handleManual = (dir) => {
//     paginate(dir);
//     resetTimer();
//   };

//   const handleDotClick = (index) => {
//     const dir = index > currentIndex ? 1 : -1;
//     setPage([index, dir]);
//     resetTimer();
//   };

//   const renderStars = (rating) => (
//     <div style={{ display: "flex", gap: "0.25rem" }}>
//       {[...Array(rating)].map((_, i) => (
//         <Star key={i} className="text-yellow-400" size={18} fill="currentColor" />
//       ))}
//     </div>
//   );

//   const testimonial = testimonials[currentIndex];

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to bottom, #000000, #111827)",
//         paddingTop: "4rem",
//         paddingBottom: "4rem",
//         fontFamily: "'Georgia', serif",
//       }}
//     >
//       {/* Section Title */}
//       <div style={{ marginBottom: "3rem", textAlign: "center" }}>
//         <h2
//           style={{
//             color: "#ffffff",
//             fontWeight: "700",
//             fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
//             letterSpacing: "-0.02em",
//             margin: 0,
//           }}
//         >
//           What Our Clients Say
//         </h2>
//         <p style={{ color: "#9ca3af", marginTop: "0.5rem", fontSize: "0.95rem" }}>
//           Trusted by homeowners for exceptional renovations
//         </p>
//       </div>

//       {/* Card Carousel */}
//       <div
//         style={{
//           maxWidth: "680px",
//           margin: "0 auto",
//           padding: "0 1.5rem",
//           position: "relative",
//         }}
//       >
//         {/* Progress bar */}
//         <div
//           style={{
//             height: "2px",
//             background: "rgba(255,255,255,0.1)",
//             borderRadius: "9999px",
//             marginBottom: "2rem",
//             overflow: "hidden",
//           }}
//         >
//           <motion.div
//             key={currentIndex}
//             initial={{ width: "0%" }}
//             animate={{ width: "100%" }}
//             transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
//             style={{
//               height: "100%",
//               background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
//               borderRadius: "9999px",
//             }}
//           />
//         </div>

//         {/* AnimatePresence Card */}
//         <div
//           style={{
//             position: "relative",
//             perspective: "1000px",
//             minHeight: "320px",
//           }}
//         >
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.div
//               key={testimonial.id}
//               custom={direction}
//               variants={cardVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(31,41,55,0.95) 0%, rgba(17,24,39,0.98) 100%)",
//                 borderRadius: "1.25rem",
//                 padding: "2rem",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 boxShadow:
//                   "0 25px 60px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Decorative quote mark */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "1rem",
//                   right: "1.5rem",
//                   fontSize: "6rem",
//                   lineHeight: 1,
//                   color: "rgba(96,165,250,0.12)",
//                   fontFamily: "Georgia, serif",
//                   userSelect: "none",
//                   pointerEvents: "none",
//                 }}
//               >
//                 "
//               </div>

//               {/* Stars */}
//               <div style={{ marginBottom: "1rem" }}>{renderStars(testimonial.rating)}</div>

//               {/* Content */}
//               <p
//                 style={{
//                   color: "#d1d5db",
//                   fontSize: "1rem",
//                   lineHeight: "1.75",
//                   marginBottom: "1.5rem",
//                   fontStyle: "italic",
//                   position: "relative",
//                   zIndex: 1,
//                 }}
//               >
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//                 <div
//                   style={{
//                     width: "48px",
//                     height: "48px",
//                     borderRadius: "50%",
//                     background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                     fontWeight: "700",
//                     fontSize: "1.1rem",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <h4
//                     style={{
//                       color: "#ffffff",
//                       fontWeight: "600",
//                       fontSize: "1rem",
//                       margin: 0,
//                     }}
//                   >
//                     {testimonial.name}
//                   </h4>
//                   <p style={{ color: "#6b7280", fontSize: "0.8rem", margin: 0 }}>
//                     Verified Client
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Navigation Row */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginTop: "1.75rem",
//           }}
//         >
//           {/* Previous Button */}
//           <button
//             onClick={() => handleManual(-1)}
//             aria-label="Previous"
//             style={{
//               background: "rgba(255,255,255,0.07)",
//               border: "1px solid rgba(255,255,255,0.15)",
//               borderRadius: "50%",
//               width: "44px",
//               height: "44px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#fff",
//               cursor: "pointer",
//               transition: "background 0.2s",
//               flexShrink: 0,
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
//             }
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Dots */}
//           <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleDotClick(i)}
//                 aria-label={`Go to testimonial ${i + 1}`}
//                 style={{
//                   borderRadius: "9999px",
//                   height: "8px",
//                   width: i === currentIndex ? "28px" : "8px",
//                   background:
//                     i === currentIndex
//                       ? "linear-gradient(90deg, #60a5fa, #a78bfa)"
//                       : "rgba(255,255,255,0.25)",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: 0,
//                   transition: "all 0.3s ease",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={() => handleManual(1)}
//             aria-label="Next"
//             style={{
//               background: "rgba(255,255,255,0.07)",
//               border: "1px solid rgba(255,255,255,0.15)",
//               borderRadius: "50%",
//               width: "44px",
//               height: "44px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#fff",
//               cursor: "pointer",
//               transition: "background 0.2s",
//               flexShrink: 0,
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
//             }
//           >
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    rating: 5,
    content:
      "We were so thrilled with the superb job Mathew and his team did on our bathroom and en-suite, that we invited him to renovate our laundry and kitchen. Very happy with the end results. Would recommend B-spoke to anyone looking for good customer service, excellent ideas, a professional approach to the work and very reasonable rates.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    content:
      "I am so glad to find this company to renovate my home. They did an amazing job with renovation of my home. B-spoke is easy to deal with, very good customer service, gave lots of ideas, and on top of all this the work they did was amazing. I love my new Home and Thank you B-Spoke!",
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    rating: 5,
    content:
      "Absolutely amazing bathrooms and awesome home renovation. Matt and his team were very professional, provided great customer service, very thorough and overall an absolute pleasure to deal with. Would highly recommend B-spoke for home owners looking to renovate. Thanks guys!",
  },
  {
    id: 4,
    name: "David Roberts",
    rating: 5,
    content:
      "Totally in love with my new bathroom! Slick clean lines, beautiful workmanship, and an end result that's exactly and even better than I imagined. Matt and crew are amazing and such nice guys! I will be telling everyone to come to him for any work.",
  },
];

// Animation variants — flip/fade combo
const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.95,
    rotateY: direction > 0 ? 12 : -12,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.95,
    rotateY: direction > 0 ? -12 : 12,
    transition: {
      duration: 0.4,
      ease: [0.55, 0, 0.78, 0],
    },
  }),
};

const AUTO_PLAY_INTERVAL = 15000; // 15 seconds

const TestimonialSection = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const timerRef = useRef(null);

  const paginate = (newDirection) => {
    setPage(([prev]) => {
      const next =
        (prev + newDirection + testimonials.length) % testimonials.length;
      return [next, newDirection];
    });
  };

  // Auto-play
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleManual = (dir) => {
    paginate(dir);
    resetTimer();
  };

  const handleDotClick = (index) => {
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
    resetTimer();
  };

  const renderStars = (rating) => (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="text-yellow-400"
          size={18}
          fill="currentColor"
        />
      ))}
    </div>
  );

  const testimonial = testimonials[currentIndex];

  return (
    <div
      style={{
        // background: "linear-gradient(to bottom, #000000, #111827)",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Section Title */}
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h2
          style={{
            color: "#0f172a",
            fontWeight: "700",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          WHAT OUR CLIENTS SAY
        </h2>
        <p
          style={{ color: "#475569", marginTop: "0.5rem", fontSize: "0.95rem" }}
        >
          Trusted by homeowners for exceptional renovations
        </p>
      </div>

      {/* Card Carousel */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
        }}
      >
        {/* Progress bar */}
        <div
          style={{
            height: "2px",
            background: " rgba(255,255,255,0.1)",
            borderRadius: "9999px",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          <motion.div
            key={currentIndex}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              borderRadius: "9999px",
            }}
          />
        </div>

        {/* AnimatePresence Card */}
        <div
          style={{
            position: "relative",
            perspective: "1000px",
            minHeight: "420px",
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background:
                  "linear-gradient(135deg, rgba(31,41,55,0.95) 0%, rgba(17,24,39,0.98) 100%)",
                borderRadius: "1.25rem",
                padding: "2.5rem 2rem 2.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 25px 60px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontSize: "6rem",
                  lineHeight: 1,
                  color: "rgba(96,165,250,0.12)",
                  fontFamily: "'Poppins', sans-serif",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ marginBottom: "1rem" }}>
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "1rem",
                  lineHeight: "1.75",
                  marginBottom: "1.5rem",
                  fontStyle: "",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4
                    style={{
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{ color: "#6b7280", fontSize: "0.8rem", margin: 0 }}
                  >
                    Verified Client
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Only */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "1.75rem",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                borderRadius: "9999px",
                height: "8px",
                width: i === currentIndex ? "28px" : "8px",
                background:
                  i === currentIndex
                    ? "linear-gradient(90deg, #60a5fa, #a78bfa)"
                    : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
