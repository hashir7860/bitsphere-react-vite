// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import DesktopMenu from "../components/DesktopMenu";
// import MobMenu from "../components/MobMenu";
// import { Menus } from "../utils";
// import { useNavigate } from "react-router-dom";
// import MeetingButton from "../components/MeetingButton";
// import { X, ChevronDown, ChevronUp } from "lucide-react";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isHoveringLogo, setIsHoveringLogo] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="relative z-50">
//       <header className="h-20 fixed top-0 left-0 right-0 flex-center backdrop-blur-md border-b border-blue-100 bg-white shadow-sm">
//         <nav className="px-6 flex-center-between w-full max-w-7xl mx-auto">
//           {/* Logo */}
//           <motion.div
//             className="flex-center gap-x-3 relative cursor-pointer"
//             onClick={() => {
//               setActiveMenu(null);
//               navigate("/");
//             }}
//             onHoverStart={() => setIsHoveringLogo(true)}
//             onHoverEnd={() => setIsHoveringLogo(false)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               animate={{
//                 rotate: isHoveringLogo ? [0, 10, -10, 0] : 0,
//                 transition: { duration: 0.6 },
//               }}
//               className="relative"
//             >
//               {/* <motion.div
//                 animate={{
//                   scale: isHoveringLogo ? [1, 1.1, 1] : 1,
//                   transition: { duration: 0.4 },
//                 }}
//                 className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
//               >
//                 <span className="text-white font-bold text-xl tracking-tight">TechBasePro</span>
//               </motion.div>
//                */}
//               <motion.div
//                 className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
//                 whileHover={{ width: 120 }} // Expands on hover
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 {/* Grid pattern background */}
//                 <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
//                   {[...Array(4)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className="bg-white/20"
//                       animate={{
//                         opacity: isHoveringLogo ? [0.2, 0.4, 0.2] : 0.2,
//                         transition: { duration: 0.6, delay: i * 0.1 }
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* Text container - absolutely centered */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {/* Default "TBP" */}
//                   <motion.div
//                     className="absolute flex justify-center w-full"
//                     animate={{
//                       opacity: isHoveringLogo ? 0 : 1,
//                       scale: isHoveringLogo ? 0.8 : 1,
//                       transition: { duration: 0.2 }
//                     }}
//                   >
//                     <span className="text-white font-bold text-xl tracking-tighter">
//                       <span className="text-blue-100">T</span>BP
//                     </span>
//                   </motion.div>

//                   {/* Full "TechBasePro" */}
//                   <motion.div
//                     className="absolute flex justify-center w-full"
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: isHoveringLogo ? 1 : 0,
//                       transition: { duration: 0.3 }
//                     }}
//                   >
//                     <span className="text-white font-bold text-sm tracking-tight">
//                       TechBasePro
//                     </span>
//                   </motion.div>
//                 </div>

//                 {/* Hover glow effect */}
//                 {isHoveringLogo && (
//                   <motion.div
//                     className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{
//                       opacity: [0, 0.4, 0],
//                       scale: [0.8, 1.2, 1],
//                     }}
//                     transition={{ duration: 0.8 }}
//                   />
//                 )}
//               </motion.div>
//               {isHoveringLogo && (
//                 <motion.div
//                   className="absolute inset-0 rounded-xl bg-blue-200 blur-md -z-10"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity: [0, 0.4, 0],
//                     scale: [0.8, 1.2, 1],
//                   }}
//                   transition={{ duration: 0.8 }}
//                 />
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex items-center gap-x-1">
//             {Menus.map((menu) => (
//               <DesktopMenu
//                 menu={menu}
//                 key={menu.name}
//                 isActive={activeMenu === menu.name}
//                 setActiveMenu={setActiveMenu}
//               />
//             ))}
//           </ul>

//           {/* CTA and Mobile Menu */}
//           <div className="flex items-center gap-x-6">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <MeetingButton
//                 setIsModalOpen={setIsModalOpen}
//                 isModalOpen={isModalOpen}
//               />
//             </motion.div>

//             <div className="lg:hidden">
//               <MobMenu Menus={Menus} />
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Meeting Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, y: 20, opacity: 0 }}
//               animate={{ scale: 1, y: 0, opacity: 1 }}
//               exit={{ scale: 0.95, y: 20, opacity: 0 }}
//               transition={{ type: "spring", damping: 20, stiffness: 300 }}
//               className="bg-white rounded-2xl border border-blue-100 max-w-md w-full p-8 relative shadow-xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-5 right-5 text-gray-500 hover:text-blue-500 transition-colors"
//               >
//                 <X size={24} />
//               </button>

//               <div className="text-center mb-2">
//                 <h3 className="text-2xl font-bold text-blue-600">
//                   Schedule a Meeting
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   Choose your preferred connection method
//                 </p>
//               </div>

//               <div className="space-y-4 mt-8">
//                 <motion.button
//                   whileHover={{
//                     y: -2,
//                     boxShadow: "0 4px 20px rgba(137, 207, 240, 0.4)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-6 rounded-xl flex items-center justify-between group cursor-pointer"
//                   onClick={() => {
//                     window.open("https://calendly.com/your-link", "_blank");
//                     setIsModalOpen(false);
//                   }}
//                 >
//                   <span className="font-medium">Video Call</span>
//                   <div className="flex items-center">
//                     <span className="text-sm opacity-80 mr-3 group-hover:mr-2 transition-all">15-30 min</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="group-hover:translate-x-1 transition-transform"
//                     >
//                       <polygon points="23 7 16 12 23 17 23 7"></polygon>
//                       <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
//                     </svg>
//                   </div>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{
//                     y: -2,
//                     backgroundColor: "rgba(176, 224, 230, 0.7)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-blue-50 hover:bg-blue-100 text-blue-500 py-4 px-6 rounded-xl flex items-center justify-between border border-blue-200 group cursor-pointer"
//                   onClick={() => {
//                     window.location.href = "/get-in-touch";
//                     setIsModalOpen(false);
//                   }}
//                 >
//                   <span className="font-medium">Phone Call</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-hover:translate-x-1 transition-transform"
//                   >
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                   </svg>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{
//                     y: -2,
//                     backgroundColor: "rgba(176, 224, 230, 0.7)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-blue-50 hover:bg-blue-100 text-blue-500 py-4 px-6 rounded-xl flex items-center justify-between border border-blue-200 group cursor-pointer"
//                   onClick={() => {
//                     window.location.href = "/get-in-touch";
//                     setIsModalOpen(false);
//                   }}
//                 >
//                   <span className="font-medium">In-Person Meeting</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-hover:translate-x-1 transition-transform"
//                   >
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="9" cy="7" r="4"></circle>
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                   </svg>
//                 </motion.button>
//               </div>

//               <div className="mt-6 pt-6 border-t border-blue-100">
//                 <p className="text-center text-gray-500 text-sm">
//                   Prefer email? <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">contact@example.com</a>
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Menus } from "../utils";
import { useNavigate } from "react-router-dom";
import MeetingButton from "../components/MeetingButton";
import { X } from "lucide-react";

const Navbar = () => {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative z-50">
      <header className="h-20 fixed top-0 left-0 right-0 flex-center backdrop-blur-md border-b border-blue-100 bg-white shadow-sm">
        <nav className="px-6 flex-center-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            className="flex-center gap-x-3 relative cursor-pointer"
            onClick={() => navigate("/")}
            onHoverStart={() => setIsHoveringLogo(true)}
            onHoverEnd={() => setIsHoveringLogo(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                rotate: isHoveringLogo ? [0, 10, -10, 0] : 0,
                transition: { duration: 0.6 },
              }}
              className="relative"
            >
              <motion.div
                className="relative w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
                whileHover={{ width: 120 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/20"
                      animate={{
                        opacity: isHoveringLogo ? [0.2, 0.4, 0.2] : 0.2,
                        transition: { duration: 0.6, delay: i * 0.1 }
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="absolute flex justify-center w-full"
                    animate={{
                      opacity: isHoveringLogo ? 0 : 1,
                      scale: isHoveringLogo ? 0.8 : 1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-white font-bold text-xl tracking-tighter">
                      <span className="text-blue-100">T</span>BP
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute flex justify-center w-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHoveringLogo ? 1 : 0,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className="text-white font-bold text-sm tracking-tight">
                      TechBasePro
                    </span>
                  </motion.div>
                </div>
                {isHoveringLogo && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [0.8, 1.2, 1],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-x-6">
            <DesktopMenu menus={Menus} />
          </ul>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <MeetingButton
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
              />
            </motion.div>
            <div className="lg:hidden">
              <MobMenu menus={Menus} />
            </div>
          </div>
        </nav>
      </header>

      {/* Meeting Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl border border-blue-100 max-w-md w-full p-8 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold text-blue-600">
                  Schedule a Meeting
                </h3>
                <p className="text-gray-600 mt-2">
                  Choose your preferred connection method
                </p>
              </div>

              <div className="space-y-4 mt-8">
                {/* Buttons */}
                {/* ...Same as your existing code... */}
              </div>

              <div className="mt-6 pt-6 border-t border-blue-100">
                <p className="text-center text-gray-500 text-sm">
                  Prefer email?{" "}
                  <a
                    href="mailto:contact@example.com"
                    className="text-blue-400 hover:underline"
                  >
                    contact@example.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
