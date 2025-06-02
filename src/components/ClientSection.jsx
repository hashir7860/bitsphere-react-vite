import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
];

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Updated background gradient animation
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["linear-gradient(0deg, #FFFFFF 0%, #F5FBFF 100%)", "linear-gradient(180deg, #FFFFFF 0%, #E1F5FE 100%)"]
  );

  return (
    // bg-skyblue
    <section 
      ref={sectionRef} 
      className="relative h-[300vh] client-section bg-blue-100"
      style={{ background }}
    >
      <div className="sticky top-0 py-15 w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
                y: useTransform(scrollYProgress, [0, 0.2], [0, -50]),
              }}
            >
              Trusted by <span className="text-[#00A6FF]">Innovators</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{
              //   opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
                y: useTransform(scrollYProgress, [0, 0.3], [0, -30]),
              }}
            >
              We partner with industry leaders to deliver exceptional results
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {brands.map((brand, i) => {
              const start = i * (1 / brands.length);
              const end = (i + 1) * (1 / brands.length);
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );
              const translateY = useTransform(
                scrollYProgress,
                [start, end],
                [60, 0]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [0.8, 1]
              );
              const rotate = useTransform(
                scrollYProgress,
                [start, end],
                [5, 0]
              );

              return (
                <motion.div
                  key={i}
                  style={{ 
                    opacity,
                    y: translateY,
                    scale,
                    rotate,
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="p-6 rounded-xl bg-white border-2 border-[#00A6FF] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32 hover:border-[#00A6FF]"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-12 max-w-full object-contain"
                    style={{ filter: 'brightness(0) saturate(100%)' }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Floating brand particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: useTransform(scrollYProgress, [0.7, 1], [0, 0.05]),
            }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-100 text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: useTransform(scrollYProgress, [0.7, 1], [0, 0.3]),
                  scale: useTransform(scrollYProgress, [0.7, 1], [0.5, 1]),
                }}
              >
                {brands[i % brands.length].name}
              </motion.div>
            ))}
          </motion.div>

          {/* Animated divider - updated to light red */}
          {/* <motion.div
            className="absolute bottom-0 left-0 w-full h-32"
            style={{
              opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
              y: useTransform(scrollYProgress, [0.8, 1], [50, 0]),
            }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="#E1F5FE"
              ></path>
            </svg>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;