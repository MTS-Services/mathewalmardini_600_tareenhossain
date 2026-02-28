// // import { Link } from "react-router";
// // import { motion, useScroll, useMotionValueEvent } from "motion/react";
// // import { Globe, Menu, X } from "lucide-react";
// // import { useState, useEffect } from "react";

// // function Header({ isDesktop }) {
// //   const { scrollY } = useScroll();
// //   const [hidden, setHidden] = useState(false);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   useEffect(() => {
// //     if (!isDesktop) {
// //       setHidden(false);
// //     }
// //   }, [isDesktop]);

// //   useMotionValueEvent(scrollY, "change", (latest) => {
// //     const previous = lastScrollY;

// //     // If scroll position is less than 50px, always show header
// //     if (latest < 50) {
// //       setHidden(false);
// //     }
// //     // If scrolling down, hide header
// //     else if (latest > previous && latest > 100 && isDesktop) {
// //       setHidden(true);
// //     }
// //     // If scrolling up, show header
// //     else if (latest < previous) {
// //       setHidden(false);
// //     }

// //     setLastScrollY(latest);
// //   });

// //   return (
// //     <header
// //       className={`fixed top-10 left-1/2 -translate-x-1/2 z-500 w-[90%] ${
// //         hidden ? "hidden" : "block"
// //       }`}
// //     >
// //       <div
// //         className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
// //         style={{ padding: "10px 20px" }}
// //       >
// //         <div className="flex items-center justify-between">
// //           <Link to="/" className="flex items-center gap-2 group">
// //             <div className="text-gray-900 text-2xl font-bold">
// //               <span className=" font-bold text-lg">B Spoke</span>
// //             </div>
// //           </Link>

// //           <nav className="hidden lg:flex items-center gap-10">
// //             <a
// //               href="#home"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               Home
// //             </a>
// //             <a
// //               href="#services"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               SERVICES
// //             </a>
// //             <a
// //               href="#portfolio"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               PORTFOLIO
// //             </a>
// //             <a
// //               href="#about"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               ABOUT
// //             </a>
// //             <a
// //               href="#faqs"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               FAQs
// //             </a>
// //             <a
// //               href="#blogs"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               BLOGS
// //             </a>
// //             <a
// //               href="#contact"
// //               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
// //             >
// //               CONTACT US
// //             </a>
// //           </nav>

// //           {/* Actions */}
// //           <div className="flex items-center gap-6">
// //             {isDesktop ? (
// //               <motion.button
// //                 className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
// //                 style={{ padding: "15px 20px" }}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Book Consultation
// //               </motion.button>
// //             ) : (
// //               <button
// //                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //                 className="lg:hidden w-10 h-10 flex items-center justify-center"
// //               >
// //                 {mobileMenuOpen ? (
// //                   <X className="w-6 h-6 text-gray-900" />
// //                 ) : (
// //                   <Menu className="w-6 h-6 text-gray-900" />
// //                 )}
// //               </button>
// //             )}
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {!isDesktop && mobileMenuOpen && (
// //           <div className="mt-4 pt-4 border-t border-gray-200">
// //             <nav className="flex flex-col gap-4">
// //               <a
// //                 href="#home"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 Home
// //               </a>
// //               <a
// //                 href="#services"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 SERVICES
// //               </a>
// //               <a
// //                 href="#portfolio"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 PORTFOLIO
// //               </a>
// //               <a
// //                 href="#about"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 ABOUT
// //               </a>
// //               <a
// //                 href="#faqs"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 FAQs
// //               </a>
// //               <a
// //                 href="#blogs"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 BLOGS
// //               </a>
// //               <a
// //                 href="#contact"
// //                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 CONTACT US
// //               </a>
// //               <button
// //                 className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-base w-full mt-2"
// //                 style={{ padding: "15px 20px" }}
// //               >
// //                 Book Consultation
// //               </button>
// //             </nav>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;

// import { Link } from "react-router";
// import { motion, useScroll, useMotionValueEvent } from "motion/react";
// import { Globe, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import { useState, useEffect } from "react";

// function Header({ isDesktop }) {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [blogsOpen, setBlogsOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

//   useEffect(() => {
//     if (!isDesktop) {
//       setHidden(false);
//     }
//   }, [isDesktop]);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = lastScrollY;

//     // If scroll position is less than 50px, always show header
//     if (latest < 50) {
//       setHidden(false);
//     }
//     // If scrolling down, hide header
//     else if (latest > previous && latest > 100 && isDesktop) {
//       setHidden(true);
//     }
//     // If scrolling up, show header
//     else if (latest < previous) {
//       setHidden(false);
//     }

//     setLastScrollY(latest);
//   });

//   return (
//     <header
//       className={`fixed top-10 left-1/2 -translate-x-1/2 z-500 w-[90%] ${
//         hidden ? "hidden" : "block"
//       }`}
//     >
//       <div
//         className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
//         style={{ padding: "0px 20px" }}
//       >
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-2 group">
//             <img src="/logo.png" alt="B Spoke Logo" className="w-32 h-auto" />
//           </Link>

//           <nav className="hidden lg:flex items-center gap-10">
//             <a
//               href="#home"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               Home
//             </a>

//             {/* Services Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium text-base">
//                 SERVICES
//                 {servicesOpen ? (
//                   <ChevronUp className="w-4 h-4" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4" />
//                 )}
//               </button>

//               {servicesOpen && (
//                 <motion.div
//                   className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
//                   style={{ width: "200px", padding: "8px 0" }}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                 >
//                   <a
//                     href="#bathroom-renovation"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{ padding: "8px 16px", fontSize: "16px" }}
//                   >
//                     Bathroom Renovation
//                   </a>
//                   <a
//                     href="#kitchen-renovation"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{ padding: "8px 16px", fontSize: "16px" }}
//                   >
//                     Kitchen Renovation
//                   </a>
//                   <a
//                     href="#laundry-renovation"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{ padding: "8px 16px", fontSize: "16px" }}
//                   >
//                     Laundry Renovation
//                   </a>
//                   <a
//                     href="#design-service"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{ padding: "8px 16px", fontSize: "16px" }}
//                   >
//                     Design Service
//                   </a>
//                 </motion.div>
//               )}
//             </div>

//             <a
//               href="#portfolio"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               PORTFOLIO
//             </a>
//             <a
//               href="#about"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               ABOUT
//             </a>
//             <a
//               href="#faqs"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               FAQs
//             </a>

//             {/* Blogs Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setBlogsOpen(true)}
//               onMouseLeave={() => setBlogsOpen(false)}
//             >
//               <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium text-base">
//                 BLOGS
//                 {blogsOpen ? (
//                   <ChevronUp className="w-4 h-4" />
//                 ) : (
//                   <ChevronDown className="w-4 h-4" />
//                 )}
//               </button>

//               {blogsOpen && (
//                 <motion.div
//                   className="absolute top-full bg-white  rounded-lg shadow-lg border border-gray-200 z-50"
//                   style={{
//                     right: "-210px",
//                     marginTop: "0px",
//                     width: "280px",
//                     padding: "8px 0",
//                   }}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                 >
//                   <a
//                     href="#blog-1"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom renovation in Essendon: 8 tricks to make it larger
//                   </a>
//                   <a
//                     href="#blog-2"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Kitchen Renovation In Woodend: Keys To A Total Renovation
//                   </a>
//                   <a
//                     href="#blog-3"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Caroline Springs
//                   </a>
//                   <a
//                     href="#blog-4"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Craigieburn
//                   </a>
//                   <a
//                     href="#blog-5"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Keilor
//                   </a>
//                   <a
//                     href="#blog-6"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Melton
//                   </a>
//                   <a
//                     href="#blog-7"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Sunbury
//                   </a>
//                   <a
//                     href="#blog-8"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Kitchen Renovations Sunbury
//                   </a>
//                   <a
//                     href="#blog-9"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom Renovations Taylors Lakes
//                   </a>
//                   <a
//                     href="#blog-10"
//                     className="block text-gray-900 hover:bg-gray-100 transition-colors"
//                     style={{
//                       padding: "8px 16px",
//                       fontSize: "16px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     Bathroom renovation near me: which company to choose?
//                   </a>
//                 </motion.div>
//               )}
//             </div>

//             <a
//               href="#contact"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               CONTACT US
//             </a>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-6">
//             {isDesktop ? (
//               <motion.button
//                 className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
//                 style={{ padding: "15px 20px" }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book Consultation
//               </motion.button>
//             ) : (
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden w-10 h-10 flex items-center justify-center"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6 text-gray-900" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-gray-900" />
//                 )}
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {!isDesktop && mobileMenuOpen && (
//           <div
//             className="my-4 py-4 border-t border-gray-200"
//             style={{
//               maxHeight: "70vh",
//               overflowY: "auto",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               WebkitOverflowScrolling: "touch",
//               // margin: "0 20px",
//               padding: "16px 0",
//             }}
//           >
//             <style>
//               {`
//                 .mt-4::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}
//             </style>
//             <nav className="flex flex-col gap-4">
//               <a
//                 href="#home"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Home
//               </a>

//               {/* Mobile Services Dropdown */}
//               <div>
//                 <button
//                   className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                 >
//                   SERVICES
//                   {mobileServicesOpen ? (
//                     <ChevronUp className="w-4 h-4" />
//                   ) : (
//                     <ChevronDown className="w-4 h-4" />
//                   )}
//                 </button>
//                 {mobileServicesOpen && (
//                   <motion.div
//                     style={{
//                       paddingLeft: "16px",
//                       marginTop: "8px",
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "4px",
//                     }}
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <a
//                       href="#bathroom-renovation"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{ fontSize: "14px", padding: "4px 0" }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovation
//                     </a>
//                     <a
//                       href="#kitchen-renovation"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{ fontSize: "14px", padding: "4px 0" }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Kitchen Renovation
//                     </a>
//                     <a
//                       href="#laundry-renovation"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{ fontSize: "14px", padding: "4px 0" }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Laundry Renovation
//                     </a>
//                     <a
//                       href="#design-service"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{ fontSize: "14px", padding: "4px 0" }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Design Service
//                     </a>
//                   </motion.div>
//                 )}
//               </div>

//               <a
//                 href="#portfolio"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 PORTFOLIO
//               </a>
//               <a
//                 href="#about"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 ABOUT
//               </a>
//               <a
//                 href="#faqs"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 FAQs
//               </a>

//               {/* Mobile Blogs Dropdown */}
//               <div>
//                 <button
//                   className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                   onClick={() => setMobileBlogsOpen(!mobileBlogsOpen)}
//                 >
//                   BLOGS
//                   {mobileBlogsOpen ? (
//                     <ChevronUp className="w-4 h-4" />
//                   ) : (
//                     <ChevronDown className="w-4 h-4" />
//                   )}
//                 </button>
//                 {mobileBlogsOpen && (
//                   <motion.div
//                     style={{
//                       paddingLeft: "16px",
//                       marginTop: "8px",
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "4px",
//                     }}
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <a
//                       href="#blog-1"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom renovation in Essendon: 8 tricks to make it
//                       larger
//                     </a>
//                     <a
//                       href="#blog-2"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Kitchen Renovation In Woodend: Keys To A Total Renovation
//                     </a>
//                     <a
//                       href="#blog-3"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Caroline Springs
//                     </a>
//                     <a
//                       href="#blog-4"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Craigieburn
//                     </a>
//                     <a
//                       href="#blog-5"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Keilor
//                     </a>
//                     <a
//                       href="#blog-6"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Melton
//                     </a>
//                     <a
//                       href="#blog-7"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Sunbury
//                     </a>
//                     <a
//                       href="#blog-8"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Kitchen Renovations Sunbury
//                     </a>
//                     <a
//                       href="#blog-9"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom Renovations Taylors Lakes
//                     </a>
//                     <a
//                       href="#blog-10"
//                       className="text-gray-800 hover:text-gray-900 transition-colors"
//                       style={{
//                         fontSize: "14px",
//                         padding: "4px 0",
//                         lineHeight: "1.4",
//                       }}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Bathroom renovation near me: which company to choose?
//                     </a>
//                   </motion.div>
//                 )}
//               </div>

//               <a
//                 href="#contact"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT US
//               </a>
//               <button
//                 className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-base w-full mt-2"
//                 style={{ padding: "15px 20px" }}
//               >
//                 Book Consultation
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

// import { Link } from "react-router";
// import { motion, useScroll, useMotionValueEvent } from "motion/react";
// import { Globe, Menu, X } from "lucide-react";
// import { useState, useEffect } from "react";

// function Header({ isDesktop }) {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     if (!isDesktop) {
//       setHidden(false);
//     }
//   }, [isDesktop]);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = lastScrollY;

//     // If scroll position is less than 50px, always show header
//     if (latest < 50) {
//       setHidden(false);
//     }
//     // If scrolling down, hide header
//     else if (latest > previous && latest > 100 && isDesktop) {
//       setHidden(true);
//     }
//     // If scrolling up, show header
//     else if (latest < previous) {
//       setHidden(false);
//     }

//     setLastScrollY(latest);
//   });

//   return (
//     <header
//       className={`fixed top-10 left-1/2 -translate-x-1/2 z-500 w-[90%] ${
//         hidden ? "hidden" : "block"
//       }`}
//     >
//       <div
//         className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
//         style={{ padding: "10px 20px" }}
//       >
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="text-gray-900 text-2xl font-bold">
//               <span className=" font-bold text-lg">B Spoke</span>
//             </div>
//           </Link>

//           <nav className="hidden lg:flex items-center gap-10">
//             <a
//               href="#home"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               Home
//             </a>
//             <a
//               href="#services"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               SERVICES
//             </a>
//             <a
//               href="#portfolio"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               PORTFOLIO
//             </a>
//             <a
//               href="#about"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               ABOUT
//             </a>
//             <a
//               href="#faqs"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               FAQs
//             </a>
//             <a
//               href="#blogs"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               BLOGS
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
//             >
//               CONTACT US
//             </a>
//           </nav>

//           {/* Actions */}
//           <div className="flex items-center gap-6">
//             {isDesktop ? (
//               <motion.button
//                 className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
//                 style={{ padding: "15px 20px" }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book Consultation
//               </motion.button>
//             ) : (
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden w-10 h-10 flex items-center justify-center"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6 text-gray-900" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-gray-900" />
//                 )}
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {!isDesktop && mobileMenuOpen && (
//           <div className="mt-4 pt-4 border-t border-gray-200">
//             <nav className="flex flex-col gap-4">
//               <a
//                 href="#home"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Home
//               </a>
//               <a
//                 href="#services"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 SERVICES
//               </a>
//               <a
//                 href="#portfolio"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 PORTFOLIO
//               </a>
//               <a
//                 href="#about"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 ABOUT
//               </a>
//               <a
//                 href="#faqs"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 FAQs
//               </a>
//               <a
//                 href="#blogs"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 BLOGS
//               </a>
//               <a
//                 href="#contact"
//                 className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT US
//               </a>
//               <button
//                 className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-base w-full mt-2"
//                 style={{ padding: "15px 20px" }}
//               >
//                 Book Consultation
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;

import { Link } from "react-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Globe, Menu, X, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useState, useEffect } from "react";

function Header({ isDesktop }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  useEffect(() => {
    if (!isDesktop) {
      setHidden(false);
    }
  }, [isDesktop]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY;

    // If scroll position is less than 50px, always show header
    if (latest < 50) {
      setHidden(false);
    }
    // If scrolling down, hide header (only on desktop)
    else if (latest > previous && latest > 100 && isDesktop) {
      setHidden(true);
    }
    // If scrolling up, show header
    else if (latest < previous) {
      setHidden(false);
    }

    setLastScrollY(latest);
  });

  return (
    <header
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-500 w-[92%] 2xl:w-[70%] 3xl:w-[75%] 4xl:w-[65%] ${
        hidden ? "hidden" : "block"
      }`}
    >
      <div
        className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl"
        style={{ padding: "0px 20px" }}
      >
        <div className="relative flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="B Spoke Logo" className="w-32 h-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 z-20">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              HOME
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium text-base">
                SERVICES
                {servicesOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    style={{ width: "230px", padding: "8px 0" }}
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <Link
                      to="/#bathroom-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      BATHROOM RENOVATION
                    </Link>
                    <Link
                      to="/#kitchen-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      KITCHEN RENOVATION
                    </Link>
                    <Link
                      to="/#laundry-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      LAUNDRY RENOVATION
                    </Link>
                    <Link
                      to="/#design-service"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      SHOP FITOUTS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium text-base">
                PORTFOLIO
                {portfolioOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              <AnimatePresence>
                {portfolioOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    style={{ width: "230px", padding: "8px 0" }}
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <Link
                      to="/#bathroom-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      BATHROOM RENOVATION
                    </Link>
                    <Link
                      to="/#kitchen-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      KITCHEN RENOVATION
                    </Link>
                    <Link
                      to="/#laundry-renovation"
                      className="block text-gray-900 hover:bg-gray-100 transition-colors"
                      style={{ padding: "8px 16px", fontSize: "16px" }}
                    >
                      LAUNDRY RENOVATION
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              ABOUT
            </Link>
            <Link
              to="/faqs"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              FAQs
            </Link>

            {/* Blogs dropdown removed — commented out below so it can be re-enabled if needed */}
            {/*
            <div
              className="relative"
              onMouseEnter={() => setBlogsOpen(true)}
              onMouseLeave={() => setBlogsOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium text-base">
                BLOGS
                {blogsOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {blogsOpen && (
                <motion.div
                  className="absolute top-full bg-white  rounded-lg shadow-lg border border-gray-200 z-50"
                  style={{
                    right: "-210px",
                    marginTop: "0px",
                    width: "280px",
                    padding: "8px 0",
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <a
                    href="#blog-1"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom renovation in Essendon: 8 tricks to make it larger
                  </a>
                  <a
                    href="#blog-2"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Kitchen Renovation In Woodend: Keys To A Total Renovation
                  </a>
                  <a
                    href="#blog-3"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Caroline Springs
                  </a>
                  <a
                    href="#blog-4"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Craigieburn
                  </a>
                  <a
                    href="#blog-5"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Keilor
                  </a>
                  <a
                    href="#blog-6"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Melton
                  </a>
                  <a
                    href="#blog-7"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Sunbury
                  </a>
                  <a
                    href="#blog-8"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Kitchen Renovations Sunbury
                  </a>
                  <a
                    href="#blog-9"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom Renovations Taylors Lakes
                  </a>
                  <a
                    href="#blog-10"
                    className="block text-gray-900 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "8px 16px",
                      fontSize: "16px",
                      lineHeight: "1.4",
                    }}
                  >
                    Bathroom renovation near me: which company to choose?
                  </a>
                </motion.div>
              )}
            </div>
            */}
            <Link
              to="/blog"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              BLOGS
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {isDesktop ? (
              <>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-gray-700 font-medium text-base whitespace-nowrap">
                    0432661176
                  </span>
                </p>
                <Link to="/book-consultation">
                  <motion.button
                    className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-base"
                    style={{ padding: "15px 20px" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Consultation
                  </motion.button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {!isDesktop && mobileMenuOpen && (
          <div
            className="my-4 py-4 border-t border-gray-200"
            style={{
              maxHeight: "70vh",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              // margin: "0 20px",
              padding: "16px 0",
            }}
          >
            <style>
              {`
                .mt-4::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  SERVICES
                  {mobileServicesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      style={{
                        paddingLeft: "16px",
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <Link
                        to="/#bathroom-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Bathroom Renovation
                      </Link>
                      <Link
                        to="/#kitchen-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Kitchen Renovation
                      </Link>
                      <Link
                        to="/#laundry-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Laundry Renovation
                      </Link>
                      <Link
                        to="/#design-service"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Design Service
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Portfolio Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                >
                  PORTFOLIO
                  {mobilePortfolioOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {mobilePortfolioOpen && (
                    <motion.div
                      style={{
                        paddingLeft: "16px",
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <Link
                        to="/#bathroom-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Bathroom Renovation
                      </Link>
                      <Link
                        to="/#kitchen-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Kitchen Renovation
                      </Link>
                      <Link
                        to="/#laundry-renovation"
                        className="text-gray-800 hover:text-gray-900 transition-colors"
                        style={{ fontSize: "14px", padding: "4px 0" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Laundry Renovation
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/faqs"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>

              {/* Mobile Blogs dropdown removed — commented out below so it can be re-enabled if needed */}
              {/*
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                  onClick={() => setMobileBlogsOpen(!mobileBlogsOpen)}
                >
                  BLOGS
                  {mobileBlogsOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {mobileBlogsOpen && (
                  <motion.div
                    style={{
                      paddingLeft: "16px",
                      marginTop: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#blog-1"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom renovation in Essendon: 8 tricks to make it larger
                    </a>
                    <a
                      href="#blog-2"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Kitchen Renovation In Woodend: Keys To A Total Renovation
                    </a>
                    <a
                      href="#blog-3"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Caroline Springs
                    </a>
                    <a
                      href="#blog-4"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Craigieburn
                    </a>
                    <a
                      href="#blog-5"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Keilor
                    </a>
                    <a
                      href="#blog-6"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Melton
                    </a>
                    <a
                      href="#blog-7"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Sunbury
                    </a>
                    <a
                      href="#blog-8"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Kitchen Renovations Sunbury
                    </a>
                    <a
                      href="#blog-9"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom Renovations Taylors Lakes
                    </a>
                    <a
                      href="#blog-10"
                      className="text-gray-800 hover:text-gray-900 transition-colors"
                      style={{
                        fontSize: "14px",
                        padding: "4px 0",
                        lineHeight: "1.4",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bathroom renovation near me: which company to choose?
                    </a>
                  </motion.div>
                )}
              </div>
              */}
              <Link
                to="/blog"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOGS
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>

              <a
                href="tel:+61432661176"
                className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold w-full mt-2 hover:bg-gray-50"
                style={{ padding: "8px 16px" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                <span>0432 661 176</span>
              </a>

              <Link
                to="/book-consultation"
                className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-base w-full mt-2 block text-center"
                style={{ padding: "15px 20px" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
