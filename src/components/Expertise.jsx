import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

const Expertise = () => {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollCards = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const expertiseData = [
    {
      title: "UI/UX Design",
      bg: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007680_1_19d09f6f39.webp",
      bullets: ["Wireframing", "Prototyping", "User Testing"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Web Development",
      bg: "https://invozone-backend.s3.us-east-1.amazonaws.com/education_592ecc3d5c.webp",
      bullets: ["React", "TailwindCSS", "Node.js"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Mobile Apps",
      bg: "https://invozone-backend.s3.us-east-1.amazonaws.com/travel_5213ff55c0.webp",
      bullets: ["Payment Gateway", "OpenAI Integration", "Real Time Update"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Product Strategy",
      bg: "https://invozone-backend.s3.us-east-1.amazonaws.com/realestate_544e623be9.webp",
      bullets: ["MVP Design", "Market Fit", "Growth Hacking"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Brand Identity",
      bg: "https://invozone-backend.s3.us-east-1.amazonaws.com/healthcare_b27e93b03c.webp",
      bullets: ["Logo", "Colors", "Typography"],
      color: "from-blue-400 to-blue-500"
    },
  ];

  return (
    <section className="bg-white py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-blue-500 mb-2 block">
            OUR CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Areas of Expertise
          </h2>
        </motion.div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <motion.button
            onClick={() => scrollCards("left")}
            className="absolute -left-7 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-blue-100 hover:bg-blue-50 hidden cursor-pointer lg:flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="text-blue-500 h-6 w-6" />
          </motion.button>

          <motion.button
            onClick={() => scrollCards("right")}
            className="absolute -right-7 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-blue-100 hover:bg-blue-50 hidden cursor-pointer lg:flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-blue-500 h-6 w-6" />
          </motion.button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden scrollbar-hide scroll-smooth gap-8 py-4 px-2"
          >
            {expertiseData.map((field, index) => (
              <motion.div
                key={index}
                className="w-[300px] flex-shrink-0 relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${field.color} opacity-90`} />
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-10 rounded-2xl"
                  style={{ backgroundImage: `url(${field.bg})` }}
                />

                {/* Content */}
                <div className="relative z-10 h-[400px] flex flex-col justify-between p-8">
                  <div>
                    <span className="text-xs font-medium tracking-wider text-white/80 mb-2 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {field.title}
                    </h3>
                    <ul className="space-y-2">
                      {field.bullets.map((item, i) => (
                        <li key={i} className="text-white/90 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-white mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={() => setActiveCard(index)}
                    className="relative overflow-hidden cursor-pointer rounded-full w-full mt-6"
                    whileHover={{ boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                  >
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <div className="relative z-10 flex items-center justify-between px-6 py-3">
                      <span className="text-white font-medium">Explore</span>
                      <motion.div
                        animate={{ 
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                          transition: { repeat: Infinity, duration: 1.5 }
                        }}
                      >
                        <ArrowRight className="text-white" />
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-8 lg:hidden">
          <button
            onClick={() => scrollCards("left")}
            className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full border border-blue-200 transition-all"
          >
            <ChevronLeft className="text-blue-500 h-5 w-5" />
          </button>
          <button
            onClick={() => scrollCards("right")}
            className="bg-blue-50 hover:bg-blue-100 p-3 rounded-full border border-blue-200 transition-all"
          >
            <ChevronRight className="text-blue-500 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Modal for Detailed View */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveCard(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden border border-blue-100 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${expertiseData[activeCard]?.color} opacity-10`} />
              <div className="relative z-10 p-8">
                <button 
                  onClick={() => setActiveCard(null)}
                  className="absolute top-6 right-6 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {expertiseData[activeCard]?.title}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {expertiseData[activeCard]?.bullets.map((item, i) => (
                    <div key={i} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="text-blue-500 font-medium mb-2">{item}</div>
                      <p className="text-gray-600 text-sm">
                        Comprehensive solutions tailored to your {expertiseData[activeCard]?.title.toLowerCase()} needs.
                      </p>
                    </div>
                  ))}
                </div>
                <button className="mt-8 px-6 py-3 rounded-full cursor-pointer bg-gradient-to-r  from-blue-400 to-blue-600 text-white font-medium hover:bg-blue-600 transition-colors">
                  Get Started with {expertiseData[activeCard]?.title}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Expertise;