// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer style={{ backgroundColor: "#6a6a6a" }}>
// //       {/* Main Footer Content */}
// //       <div
// //         style={{
// //           width: "min(1500px, 95%)",
// //           margin: "0 auto",
// //           paddingTop: "3rem",
// //           paddingBottom: "2.5rem",
// //         }}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
// //           {/* Logo and Company Description */}
// //           <div>
// //             <div style={{ marginBottom: "1.25rem" }}>
// //               <img src="/logo.png" alt="B-spoke" style={{ height: "6rem" }} />
// //             </div>
// //             <p
// //               className="text-gray-200 text-sm leading-relaxed"
// //               style={{ lineHeight: "1.8" }}
// //             >
// //               At B-spoke we understand that your property is your investment, so
// //               we take pride in providing the best quality workmanship sharing
// //               your passion for results. From end to end we discover your kitchen
// //               and bathroom ideas, design, plan, and construct. We guarantee
// //               excellent results that are cost effective and time efficient.
// //             </p>
// //           </div>

// //           {/* Get In Touch */}
// //           <div>
// //             <h3
// //               className="text-white font-bold text-xl"
// //               style={{ marginBottom: "1.5rem" }}
// //             >
// //               Get In Touch
// //             </h3>
// //             <div className="flex flex-col" style={{ gap: "1rem" }}>
// //               <a
// //                 href="tel:0432661176"
// //                 className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
// //                 style={{ gap: "0.75rem" }}
// //               >
// //                 <div
// //                   className="flex items-center justify-center"
// //                   style={{
// //                     width: "2.5rem",
// //                     height: "2.5rem",
// //                     backgroundColor: "#2d2d2d",
// //                     flexShrink: 0,
// //                   }}
// //                 >
// //                   <svg
// //                     className="w-5 h-5 text-white"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <div className="text-xs text-gray-300">Phone</div>
// //                   <div className="text-white font-medium">0432661176</div>
// //                 </div>
// //               </a>

// //               <a
// //                 href="mailto:info@b-spoke.com.au"
// //                 className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
// //                 style={{ gap: "0.75rem" }}
// //               >
// //                 <div
// //                   className="flex items-center justify-center"
// //                   style={{
// //                     width: "2.5rem",
// //                     height: "2.5rem",
// //                     backgroundColor: "#2d2d2d",
// //                     flexShrink: 0,
// //                   }}
// //                 >
// //                   <svg
// //                     className="w-5 h-5 text-white"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <div className="text-xs text-gray-300">Email</div>
// //                   <div className="text-white font-medium">
// //                     info@b-spoke.com.au
// //                   </div>
// //                 </div>
// //               </a>

// //               <div
// //                 className="flex items-center text-gray-200"
// //                 style={{ gap: "0.75rem" }}
// //               >
// //                 <div
// //                   className="flex items-center justify-center"
// //                   style={{
// //                     width: "2.5rem",
// //                     height: "2.5rem",
// //                     backgroundColor: "#2d2d2d",
// //                     flexShrink: 0,
// //                   }}
// //                 >
// //                   <svg
// //                     className="w-5 h-5 text-white"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
// //                     />
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <div className="text-white font-medium">Sunbury</div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Social Media inside Get In Touch */}
// //             <div
// //               className="flex flex-wrap"
// //               style={{ gap: "0.75rem", marginTop: "1.5rem" }}
// //             >
// //               <a
// //                 href="https://www.facebook.com/profile.php?id=100086378871246"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center text-white rounded transition-all duration-300 hover:opacity-90"
// //                 style={{
// //                   padding: "0.5rem 1rem",
// //                   gap: "0.5rem",
// //                   backgroundColor: "#5A7FB5",
// //                 }}
// //               >
// //                 <svg
// //                   className="w-4 h-4"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
// //                 </svg>
// //                 <span className="font-medium text-sm">Facebook</span>
// //               </a>

// //               <a
// //                 href="https://www.instagram.com/_bespoke.designs.construction_/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center text-white rounded transition-all duration-300 hover:opacity-90"
// //                 style={{
// //                   padding: "0.5rem 1rem",
// //                   gap: "0.5rem",
// //                   backgroundColor: "#3d3d3d",
// //                 }}
// //               >
// //                 <svg
// //                   className="w-4 h-4"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
// //                 </svg>
// //                 <span className="font-medium text-sm">Instagram</span>
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3
// //               className="text-white font-bold text-xl"
// //               style={{ marginBottom: "1.5rem" }}
// //             >
// //               Quick Links
// //             </h3>
// //             <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
// //               {[
// //                 "Home",
// //                 "Services",
// //                 "Portfolio",
// //                 "About",
// //                 "FAQS",
// //                 "Blog",
// //                 "Contact",
// //               ].map((link) => (
// //                 <li key={link}>
// //                   <a
// //                     href={`/${link.toLowerCase()}`}
// //                     className="text-gray-200 hover:text-white transition-colors duration-300"
// //                   >
// //                     {link}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Copyright Bar */}
// //       <div style={{ backgroundColor: "#2d2d2d", borderTop: "1px solid #444" }}>
// //         <div
// //           style={{
// //             width: "min(1500px, 95%)",
// //             margin: "0 auto",
// //             padding: "1.25rem 0",
// //           }}
// //         >
// //           <p className="text-center text-white text-sm">
// //             Copyright © {currentYear} B-spoke.com.au All Right Reserved
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer style={{ backgroundColor: "#6a6a6a" }}>
//       {/* Main Footer Content */}
//       <div
//         style={{
//           width: "min(1500px, 95%)",
//           margin: "0 auto",
//           paddingTop: "3rem",
//           paddingBottom: "2.5rem",
//         }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
//           {/* Logo and Company Description */}
//           <div>
//             <div style={{ marginBottom: "1.25rem" }}>
//               <img src="/logo.png" alt="B-spoke" style={{ height: "6rem" }} />
//             </div>
//             <p
//               className="text-gray-200 text-sm leading-relaxed"
//               style={{ lineHeight: "1.8" }}
//             >
//               At B-spoke we understand that your property is your investment, so
//               we take pride in providing the best quality workmanship sharing
//               your passion for results. From end to end we discover your kitchen
//               and bathroom ideas, design, plan, and construct. We guarantee
//               excellent results that are cost effective and time efficient.
//             </p>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h3
//               className="text-white font-bold text-xl"
//               style={{ marginBottom: "1.5rem" }}
//             >
//               Get In Touch
//             </h3>
//             <div className="flex flex-col" style={{ gap: "1rem" }}>
//               <a
//                 href="tel:0432661176"
//                 className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
//                 style={{ gap: "0.75rem" }}
//               >
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     width: "2.5rem",
//                     height: "2.5rem",
//                     backgroundColor: "#2d2d2d",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <svg
//                     className="w-5 h-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-300">Phone</div>
//                   <div className="text-white font-medium">0432661176</div>
//                 </div>
//               </a>

//               <a
//                 href="mailto:info@b-spoke.com.au"
//                 className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
//                 style={{ gap: "0.75rem" }}
//               >
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     width: "2.5rem",
//                     height: "2.5rem",
//                     backgroundColor: "#2d2d2d",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <svg
//                     className="w-5 h-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-300">Email</div>
//                   <div className="text-white font-medium">
//                     info@b-spoke.com.au
//                   </div>
//                 </div>
//               </a>

//               <div
//                 className="flex items-center text-gray-200"
//                 style={{ gap: "0.75rem" }}
//               >
//                 <div
//                   className="flex items-center justify-center"
//                   style={{
//                     width: "2.5rem",
//                     height: "2.5rem",
//                     backgroundColor: "#2d2d2d",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <svg
//                     className="w-5 h-5 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="text-white font-medium">Sunbury</div>
//                 </div>
//               </div>
//             </div>
//             {/* Social media buttons REMOVED from here */}
//           </div>

//           {/* Quick Links + Social Media */}
//           <div>
//             <h3
//               className="text-white font-bold text-xl"
//               style={{ marginBottom: "1.5rem" }}
//             >
//               Quick Links
//             </h3>
//             <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
//               {[
//                 "Home",
//                 "Services",
//                 "Portfolio",
//                 "About",
//                 "FAQS",
//                 "Blog",
//                 "Contact",
//               ].map((link) => (
//                 <li key={link}>
//                   <a
//                     href={`/${link.toLowerCase()}`}
//                     className="text-gray-200 hover:text-white transition-colors duration-300"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Social Media Buttons - moved here, bigger size */}
//             <div
//               className="flex flex-wrap"
//               style={{ gap: "0.75rem", marginTop: "1.75rem" }}
//             >
//               <a
//                 href="https://www.facebook.com/profile.php?id=100086378871246"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-white rounded transition-all duration-300 hover:opacity-90"
//                 style={{
//                   padding: "0.75rem 1.5rem",
//                   gap: "0.6rem",
//                   backgroundColor: "#5A7FB5",
//                   fontSize: "1rem",
//                 }}
//               >
//                 <svg
//                   style={{ width: "1.4rem", height: "1.4rem" }}
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//                 <span className="font-semibold">Facebook</span>
//               </a>

//               <a
//                 href="https://www.instagram.com/_bespoke.designs.construction_/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-white rounded transition-all duration-300 hover:opacity-90"
//                 style={{
//                   padding: "0.75rem 1.5rem",
//                   gap: "0.6rem",
//                   backgroundColor: "#3d3d3d",
//                   fontSize: "1rem",
//                 }}
//               >
//                 <svg
//                   style={{ width: "1.4rem", height: "1.4rem" }}
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//                 <span className="font-semibold">Instagram</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div style={{ backgroundColor: "#2d2d2d", borderTop: "1px solid #444" }}>
//         <div
//           style={{
//             width: "min(1500px, 95%)",
//             margin: "0 auto",
//             padding: "1.25rem 0",
//           }}
//         >
//           <p className="text-center text-white text-sm">
//             Copyright © {currentYear} B-spoke.com.au All Right Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faqs" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#6a6a6a" }}>
      {/* Main Footer Content */}
      <div
        style={{
          width: "min(1500px, 95%)",
          margin: "0 auto",
          paddingTop: "3rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Company Description */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <img src="https://b-spoke-media.s3.eu-north-1.amazonaws.com/logo.png" alt="B-spoke" width="150" height="96" loading="lazy" style={{ height: "6rem", width: "auto" }} />
            </div>
            <p
              className="text-gray-200 text-sm leading-relaxed"
              style={{ lineHeight: "1.8" }}
            >
              At B-spoke we understand that your property is your investment, so
              we take pride in providing the best quality workmanship sharing
              your passion for results. From end to end we discover your kitchen
              and bathroom ideas, design, plan, and construct. We guarantee
              excellent results that are cost effective and time efficient.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3
              className="text-white font-bold text-xl"
              style={{ marginBottom: "1.5rem" }}
            >
              Get In Touch
            </h3>
            <div className="flex flex-col" style={{ gap: "1rem" }}>
              <a
                href="tel:0432661176"
                className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
                style={{ gap: "0.75rem" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#2d2d2d",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-300">Phone</div>
                  <div className="text-white font-medium">0432661176</div>
                </div>
              </a>

              <a
                href="mailto:info@b-spoke.com.au"
                className="flex items-center text-gray-200 hover:text-white transition-colors duration-300"
                style={{ gap: "0.75rem" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#2d2d2d",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-300">Email</div>
                  <div className="text-white font-medium">
                    info@b-spoke.com.au
                  </div>
                </div>
              </a>

              <div
                className="flex items-center text-gray-200"
                style={{ gap: "0.75rem" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "#2d2d2d",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Sunbury</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-bold text-xl"
              style={{ marginBottom: "1.5rem" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col" style={{ gap: "0.5rem" }}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media - New Right Column */}
          <div>
            <h3
              className="text-white font-bold text-xl"
              style={{ marginBottom: "1.5rem" }}
            >
              Follow Us
            </h3>
            <div className="flex flex-col" style={{ gap: "1rem" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100086378871246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white rounded transition-all duration-300 hover:opacity-90"
                style={{
                  padding: "1rem 1.5rem",
                  gap: "0.75rem",
                  backgroundColor: "#5A7FB5",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  width: "100%",
                }}
              >
                <svg
                  style={{ width: "1.6rem", height: "1.6rem" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/_bespoke.designs.construction_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white rounded transition-all duration-300 hover:opacity-90"
                style={{
                  padding: "1rem 1.5rem",
                  gap: "0.75rem",
                  backgroundColor: "#d62976",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  width: "100%",
                }}
              >
                <svg
                  style={{ width: "1.6rem", height: "1.6rem" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ backgroundColor: "#2d2d2d", borderTop: "1px solid #444" }}>
        <div
          style={{
            width: "min(1500px, 95%)",
            margin: "0 auto",
            padding: "1.25rem 0",
          }}
        >
          <p className="text-center text-white text-sm">
            Copyright © {currentYear} B-spoke.com.au All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
