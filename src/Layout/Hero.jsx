import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import ContactModal from "../components/ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [showParticles, setShowParticles] = useState(true);

  // Load from session on mount
  useEffect(() => {
    const saved = sessionStorage.getItem("showParticles");
    if (saved !== null) {
      setShowParticles(saved === "true");
    }
  }, []);

  // Save to session when toggled
  const toggleParticles = () => {
    setShowParticles((prev) => {
      sessionStorage.setItem("showParticles", !prev);
      return !prev;
    });
  };

  return (
    <section className="relative min-h-screen flex hero items-center justify-center text-center px-6 bg-white text-gray-800 overflow-hidden">
      {/* Conditionally render Particle Background */}
      {showParticles && <ParticleBackground density={80} color="#89CFF0" />}

      {/* <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 group">
        <div
          className="bg-red-500 text-white rounded-l-full shadow-lg flex items-center overflow-hidden transition-all duration-300 ease-in-out w-12 group-hover:w-38 cursor-pointer"
          onClick={toggleParticles}
        >
          <span className="px-3 text-lg font-semibold">⚙</span>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            {showParticles ? "Hide Particles" : "Show Particles"}
          </span>
        </div>
      </div> */}

      <div className="z-10 relative flex flex-col items-center max-w-6xl mx-auto">
        {/* Animated gradient text for main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2"
        >
          <span className="text-lg font-medium text-white tracking-wider">
            INNOVATIVE DIGITAL SOLUTIONS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-7xl font-bold leading-tight text-white pb-2"
        >
          Build Modern <br className="hidden md:block" /> Software With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl md:text-2xl text-white max-w-3xl leading-relaxed"
        >
          We craft{" "}
          <span className="text-[#00A6FF] font-medium">cutting-edge</span>{" "}
          applications, websites, and{" "}
          <span className="text-[#00A6FF] font-medium">
            digital experiences{" "}
          </span>
          that drive measurable business growth.
        </motion.p>

        <motion.div
          className="mt-12 flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Primary Button - now with baby red gradient */}
          {/* <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(137, 207, 240, 0.6)",
              backgroundPosition: "100% 0",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: 0.3,
            }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r  from-red-400 to-red-600 bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-out"
          >
            Get Started
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </motion.button> */}
          <motion.button
            onClick={() => setCtaModalOpen(true)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(137, 207, 240, 0.6)",
              backgroundPosition: "100% 0",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: 0.3,
            }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#00A6FF] to-[#00A6FF] bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-out"
          >
            Get Started
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </motion.button>

          {/* Secondary Button - light red outline */}
          {/* <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(137, 207, 240, 0.2)",
              backgroundColor: "rgba(176, 224, 230, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: 0.3,
            }}
            onClick={handleModalToggle}
            className="px-10 py-4 rounded-xl border-2 border-red-300 hover:border-red-400 bg-white text-red-500 font-semibold text-lg tracking-wide transition-all duration-300"
          >
            Contact Us
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </motion.button> */}
        </motion.div>

        {/* Trust indicators - updated colors */}
        {/* <motion.div
          className="mt-16 flex items-center gap-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
          <span className="mt-3">Trusted by innovative companies worldwide</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </motion.div> */}
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      {/* cta modal section */}
      {ctaModalOpen && (
        // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        //   <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
        //     <h2 className="text-xl font-bold mb-4">Welcome!</h2>
        //     <p className="mb-4">This is a modal triggered by your button.</p>
        //     <button
        //       onClick={() => setCtaModalOpen(false)}
        //       className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        //     >
        //       Close
        //     </button>
        //   </div>
        // </div>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <input
                placeholder="Name"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                type="text"
              />
              <input
                placeholder="Phone"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                type="tel"
              />
              <input
                placeholder="Email"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                type="email"
              />
              <textarea
                placeholder="Message"
                rows="5"
                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
              >
              </textarea>
              <div className="flex gap-3 justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#00A6FF] text-white rounded hover:bg-[#00A6FF]"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setCtaModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* End cta modal section */}

      {/* Decorative elements - now red */}
      {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="text-red-300 hover:text-red-500 cursor-pointer"
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight - 100,
              behavior: "smooth",
            })
          }
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;
