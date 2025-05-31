// import { ChevronDown, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { a } from "framer-motion/client";

// export default function DesktopMenu({ menu, isActive, setActiveMenu }) {
//   const [activeSubMenu, setActiveSubMenu] = useState(null);
//   const [isIntentionalHover, setIsIntentionalHover] = useState(false);
//   const dropdownRef = useRef(null);
//   const hasSubMenu = menu?.subMenu?.length;
//   const navigate = useNavigate();

//   const maxHeight = `calc(100vh - 120px)`;

//   useEffect(() => {
//     if (isActive && dropdownRef.current) {
//       const dropdownElement = dropdownRef.current;
//       const handleMouseEnter = () => setIsIntentionalHover(true);
//       const handleMouseLeave = () => setIsIntentionalHover(false);

//       dropdownElement.addEventListener("mouseenter", handleMouseEnter);
//       dropdownElement.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
//         dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }
//   }, [isActive]);

//   const dropdownVariants = {
//     hidden: {
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.2,
//         when: "afterChildren",
//       },
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.05,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const menuItemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.15 },
//     },
//   };

//   const handleMenuItemClick = (submenu) => {
//     const routePath = submenu.name.toLowerCase().replace(/\s+/g, '-');
//     navigate(`/${routePath}`);
//     setActiveMenu(null);
//     setActiveSubMenu(null);
//   };

//   return (
//     <motion.li
//       className="group/link relative"
//       onHoverStart={() => setActiveMenu(menu.name)}
//       onHoverEnd={() => {
//         if (!isIntentionalHover) {
//           setActiveMenu(null);
//           setActiveSubMenu(null);
//         }
//       }}
//       key={menu.name}
//     >
//       <motion.span
//         className={`flex items-center gap-1 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
//           isActive 
//             ? "text-white bg-red-500 shadow-md" 
//             : "text-gray-700 hover:text-red-600 hover:bg-red-50"
//         }`}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.98 }}
//         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//       >
//         <span className="font-medium">{menu.name}</span>
//         {hasSubMenu && (
//           <motion.span
//             animate={{ rotate: isActive ? 180 : 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <ChevronDown className="h-4 w-4 mt-0.5" />
//           </motion.span>
//         )}
//       </motion.span>

//       <AnimatePresence>
//         {hasSubMenu && isActive && (
//           <>
//             <motion.div
//               className="absolute left-0 right-0 h-4"
//               style={{ bottom: "-16px" }}
//               onMouseEnter={() => setIsIntentionalHover(true)}
//               onMouseLeave={() => setIsIntentionalHover(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             <motion.div
//               ref={dropdownRef}
//               className="fixed left-0 right-0 top-20 bg-white backdrop-blur-lg shadow-lg border-t border-red-100"
//               variants={dropdownVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               style={{
//                 width: "100vw",
//                 marginLeft: "calc(-50vw + 50%)",
//                 maxHeight: maxHeight,
//               }}
//               onHoverStart={() => setIsIntentionalHover(true)}
//               onHoverEnd={() => {
//                 setIsIntentionalHover(false);
//                 setActiveMenu(null);
//                 setActiveSubMenu(null);
//               }}
//             >
//               <div className="p-8 max-w-7xl mx-auto">
//                 <div className="grid grid-cols-4 gap-8">
//                   {/* Left side - Menu items */}
//                   <motion.div
//                     className="col-span-1 border-r border-red-100 pr-8"
//                     variants={dropdownVariants}
//                   >
//                     <motion.h3
//                       className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2"
//                       variants={menuItemVariants}
//                     >
//                       <span className="bg-red-500 w-1 h-6 rounded-full"></span>
//                       {menu.name}
//                     </motion.h3>
//                     <ul className="space-y-1">
//                       {menu.subMenu.map((submenu, i) => (
//                         <motion.li
//                           key={i}
//                           className={`p-3 rounded-lg transition-colors cursor-pointer ${
//                             activeSubMenu?.name === submenu.name
//                               ? "bg-red-50 border-l-2 border-red-500"
//                               : "hover:bg-red-50"
//                           }`}
//                           onMouseEnter={() => setActiveSubMenu(submenu)}
//                           onClick={() => handleMenuItemClick(submenu)}
//                           variants={menuItemVariants}
//                           whileHover={{
//                             x: 5,
//                             transition: { type: "spring", stiffness: 300 },
//                           }}
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-3">
//                               {submenu.icon && (
//                                 <motion.div
//                                   className={`p-2 rounded-lg ${
//                                     activeSubMenu?.name === submenu.name
//                                       ? "bg-red-100 text-red-600"
//                                       : "bg-red-50 text-gray-600"
//                                   }`}
//                                   whileHover={{ rotate: 5 }}
//                                 >
//                                   <submenu.icon size={18} />
//                                 </motion.div>
//                               )}
//                               <span className="font-medium text-gray-700">{submenu.name}</span>
//                             </div>
//                             <ChevronRight className="h-4 w-4 text-gray-400" />
//                           </div>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </motion.div>

//                   {/* Right side - Dynamic content */}
//                   <div className="col-span-3">
//                     <AnimatePresence mode="wait">
//                       {activeSubMenu ? (
//                         <motion.div
//                           key={activeSubMenu.name}
//                           variants={contentVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                         >
//                           <div className="flex items-center gap-4 mb-8">
//                             {activeSubMenu.icon && (
//                               <motion.div
//                                 className="bg-red-100 p-3 rounded-xl shadow-sm"
//                                 initial={{ scale: 0.8 }}
//                                 animate={{ scale: 1 }}
//                                 transition={{ type: "spring" }}
//                               >
//                                 <activeSubMenu.icon
//                                   size={28}
//                                   className="text-red-600"
//                                 />
//                               </motion.div>
//                             )}
//                             <motion.h2
//                               className="text-2xl font-bold text-gray-800"
//                               initial={{ y: 10 }}
//                               animate={{ y: 0 }}
//                             >
//                               {activeSubMenu.name}
//                             </motion.h2>
//                           </div>

//                           <div className="grid grid-cols-2 gap-6">
//                             <motion.div
//                               className="col-span-2"
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ delay: 0.1 }}
//                             >
//                               <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//                                 {activeSubMenu.desc}
//                               </p>
//                             </motion.div>

//                             <motion.div
//                               className="bg-red-50 p-6 rounded-xl border border-red-100"
//                               initial={{ y: 20 }}
//                               animate={{ y: 0 }}
//                               transition={{ delay: 0.15 }}
//                             >
//                               <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-gray-800">
//                                 <span className="bg-red-500 w-2 h-2 rounded-full"></span>
//                                 Key Features
//                               </h3>
//                               <ul className="space-y-3">
//                                 {getFeatures(activeSubMenu.name).map(
//                                   (feature, i) => (
//                                     <motion.li
//                                       key={i}
//                                       className="flex items-start gap-3"
//                                       initial={{ opacity: 0 }}
//                                       animate={{ opacity: 1 }}
//                                       transition={{ delay: 0.2 + i * 0.05 }}
//                                     >
//                                       <span className="text-red-500 mt-1">
//                                         <svg
//                                           xmlns="http://www.w3.org/2000/svg"
//                                           width="16"
//                                           height="16"
//                                           viewBox="0 0 24 24"
//                                           fill="none"
//                                           stroke="currentColor"
//                                           strokeWidth="2"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                         >
//                                           <polyline points="20 6 9 17 4 12"></polyline>
//                                         </svg>
//                                       </span>
//                                       <span className="text-gray-700">{feature}</span>
//                                     </motion.li>
//                                   )
//                                 )}
//                               </ul>
//                             </motion.div>

//                             <motion.div
//                               className="bg-white p-6 rounded-xl border border-red-100 shadow-sm"
//                               initial={{ y: 20 }}
//                               animate={{ y: 0 }}
//                               transition={{ delay: 0.2 }}
//                             >
//                               <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-gray-800">
//                                 <span className="bg-red-400 w-2 h-2 rounded-full"></span>
//                                 Technologies
//                               </h3>
//                               <div className="flex flex-wrap gap-3">
//                                 {getTechnologies(activeSubMenu.name).map(
//                                   (tech, i) => (
//                                     <motion.span
//                                       key={i}
//                                       className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium border border-red-200"
//                                       initial={{ scale: 0 }}
//                                       animate={{ scale: 1 }}
//                                       transition={{
//                                         type: "spring",
//                                         delay: 0.25 + i * 0.03,
//                                       }}
//                                     >
//                                       {tech}
//                                     </motion.span>
//                                   )
//                                 )}
//                               </div>
//                             </motion.div>
//                           </div>
//                         </motion.div>
//                       ) : (
//                         <motion.div
//                           key="overview"
//                           variants={contentVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                         >
//                           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                             {menu.name} Overview
//                           </h2>
//                           <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//                             {getMenuDescription(menu.name)}
//                           </p>

//                           <div className="grid grid-cols-2 gap-6">
//                             {menu.subMenu.slice(0, 4).map((item, i) => (
//                               <motion.div
//                                 key={i}
//                                 className="bg-white p-6 rounded-xl border border-red-100 cursor-pointer hover:border-red-200 transition-all shadow-sm"
//                                 onMouseEnter={() => setActiveSubMenu(item)}
//                                 whileHover={{ y: -5 }}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.1 + i * 0.05 }}
//                               >
//                                 <div className="flex items-center gap-4 mb-3">
//                                   {item.icon && (
//                                     <div className="bg-red-100 p-2.5 rounded-lg">
//                                       <item.icon
//                                         size={20}
//                                         className="text-red-600"
//                                       />
//                                     </div>
//                                   )}
//                                   <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//                                 </div>
//                                 <p className="text-gray-600 text-sm leading-relaxed">
//                                   {item.desc}
//                                 </p>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.li>
//   );
// }

// // Helper functions remain the same
// function getMenuDescription(menuName) {
//   const descriptions = {
//     Services:
//       "We offer comprehensive digital solutions tailored to your business needs. Our expert team delivers cutting-edge technology services.",
//     Company:
//       "Learn more about our organization, our values, and the talented people who make it all happen.",
//     Work: "Explore our portfolio of successful projects and see how we've helped businesses like yours.",
//     Resources:
//       "Access valuable information, insights, and tools to help you navigate the digital landscape.",
//     Contact:
//       "Get in touch with our team to discuss how we can help bring your ideas to life.",
//   };

//   return (
//     descriptions[menuName] ||
//     "Explore our offerings and learn how we can help your business grow."
//   );
// }

// function getFeatures(menuItem) {
//   const features = {
//     "Web Development": [
//       "Responsive design for all devices",
//       "SEO-optimized architecture",
//       "Fast loading performance",
//       "Secure coding practices",
//       "CMS integration options",
//     ],
//     "Mobile Apps": [
//       "Cross-platform development",
//       "Native performance",
//       "Offline capabilities",
//       "Push notifications",
//       "App store optimization",
//     ],
//   };

//   return (
//     features[menuItem] || [
//       "Custom solutions for your needs",
//       "Industry best practices",
//       "Scalable architecture",
//       "Ongoing support",
//       "Performance optimization",
//     ]
//   );
// }

// function getTechnologies(menuItem) {
//   const technologies = {
//     "Web Development": [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Node.js",
//     ],
//     "Mobile Apps": ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
//     "Backend & APIs": ["Node.js", "Python", "Django", "GraphQL", "PostgreSQL"],
//   };

//   return (
//     technologies[menuItem] || [
//       "JavaScript",
//       "HTML5",
//       "CSS3",
//       "REST APIs",
//       "Cloud Services",
//     ]
//   );
// }



// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function DesktopMenu() {
//   const navigate = useNavigate();

//   const menus = [
//     { name: "About", path: "/about" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Privacy Policy", path: "/privacy-policy" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const handleMenuClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <ul className="flex space-x-4">
//       {menus.map((menu) => (
//         <motion.li
//           key={menu.name}
//           className="px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => handleMenuClick(menu.path)}
//         >
//           {menu.name}
//         </motion.li>
//       ))}
//     </ul>
//   );
// }


// import React from "react";
// import { NavLink } from "react-router-dom";

// const DesktopMenu = ({ menus }) => {
//   return (
//     <>
//       {menus.map((menu) => (
//         <NavLink
//           key={menu.name}
//           to={menu.path}
//           className={({ isActive }) =>
//             `px-4 py-2 rounded-md font-medium transition-all ${isActive ? "text-gray-800 bg-red-100" : "text-gray-800 hover:text-red-600"
//             }`
//           }
//         >
//           {menu.name}
//         </NavLink>
//       ))}
//     </>
//   );
// };

// export default DesktopMenu;

import React from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menus }) => {
  return (
    <>
      {menus.map((menu) => (
        <NavLink
          key={menu.name}
          to={menu.path}
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition-all ${
              isActive
                ? "text-red-600 bg-red-100"
                : "text-black hover:bg-red-100 hover:text-red-600"
            }`
          }
        >
          {menu.name}
        </NavLink>
      ))}
    </>
  );
};

export default DesktopMenu;

