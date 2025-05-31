// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function MobMenu({ Menus }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [clicked, setClicked] = useState(null);
//   const navigate = useNavigate();

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//     setClicked(null);
//   };

//   const handleSubMenuClick = (name) => {
//     const routePath = name.toLowerCase().replace(/\s+/g, "-");
//     navigate(`/${routePath}`);
//     toggleDrawer();
//   };

//   const subMenuDrawer = {
//     enter: {
//       height: "auto",
//       overflow: "hidden",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     },
//     exit: {
//       height: 0,
//       overflow: "hidden",
//       transition: {
//         duration: 0.2,
//         ease: "easeInOut"
//       }
//     },
//   };

//   return (
//     <div className="lg:hidden">
//       <button 
//         className="z-[999] relative p-2 text-gray-700 hover:text-red-600 transition-colors"
//         onClick={toggleDrawer}
//       >
//         {isOpen ? (
//           <X className="h-6 w-6" />
//         ) : (
//           <Menu className="h-6 w-6" />
//         )}
//       </button>

//       <motion.div
//         className="fixed left-0 right-0 top-16 overflow-y-auto bg-white backdrop-blur-lg text-gray-800 p-6 pb-20 shadow-xl border-t border-red-100"
//         initial={{ x: "-100%" }}
//         animate={{ x: isOpen ? "0%" : "-100%" }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//       >
//         <ul className="space-y-1">
//           {Menus.map(({ name, subMenu }, i) => {
//             const isClicked = clicked === i;
//             const hasSubMenu = subMenu?.length;
//             return (
//               <li key={name} className="">
//                 <div
//                   className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
//                     isClicked ? "bg-red-50 text-red-600" : "hover:bg-red-50 hover:text-red-600"
//                   }`}
//                   onClick={() => setClicked(isClicked ? null : i)}
//                 >
//                   <span className="font-medium">{name}</span>
//                   {hasSubMenu && (
//                     <motion.div
//                       animate={{ rotate: isClicked ? 180 : 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <ChevronDown className="h-5 w-5" />
//                     </motion.div>
//                   )}
//                 </div>
//                 {hasSubMenu && (
//                   <motion.ul
//                     initial="exit"
//                     animate={isClicked ? "enter" : "exit"}
//                     variants={subMenuDrawer}
//                     className="ml-4 border-l-2 border-red-100"
//                   >
//                     {subMenu.map(({ name, icon: Icon }) => (
//                       <li
//                         key={name}
//                         className="p-3 flex items-center hover:bg-red-50 rounded-lg gap-3 cursor-pointer text-gray-700 hover:text-red-600 transition-colors"
//                         onClick={() => handleSubMenuClick(name)}
//                       >
//                         {Icon && (
//                           <Icon className="h-4 w-4 text-red-500" />
//                         )}
//                         <span>{name}</span>
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobMenu = ({ menus }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-gray-700">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (
        <div className="absolute -right-6 mt-2 w-screen bg-white rounded-lg shadow-lg z-50 p-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.name}
              to={menu.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md text-sm ${isActive ? "bg-red-100 text-red-600" : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobMenu;