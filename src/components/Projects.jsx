import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Projects = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main ref={container} className="relative bg-white">
      {/* Hero Section */}
      <div className="my-20 flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our finest work with cutting-edge animations and seamless interactions
          </p>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              transition: { repeat: Infinity, duration: 2 }
            }}
            className="mt-16"
          >
            <ChevronRight className="h-8 w-8 text-[#00A6FF] mx-auto rotate-90" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/30 z-0" />
      </div>

      {/* Project Sections */}
      <div className="relative h-[400vh] bg-blue-100">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
        <Section4 scrollYProgress={scrollYProgress} />
      </div>

      {/* Footer CTA */}
      <div className="py-28 px-6 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's create something extraordinary together
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(137, 207, 240, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl cursor-pointer bg-gradient-to-r  from-[#00A6FF] to-[#00A6FF] text-white font-semibold text-lg"
          >
            Get in Touch
            <ArrowRight className="inline ml-2" />
          </motion.button>
        </div>
      </div>
    </main>
  );
};

// Project Card Component
const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  videoUrl, 
  position = "left",
  color = "blue",
  scale,
  rotate
}) => {
  const colors = {
    red: "bg-blue-100 border-blue-200",
    sky: "bg-sky-100 border-sky-200",
    teal: "bg-teal-100 border-teal-200",
    cyan: "bg-cyan-100 border-cyan-200"
  };

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex items-center justify-center"
    >
      <div className={`relative rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden w-[90%] max-w-6xl h-[70%] border-2 ${colors[color]}`}>
        {/* Content */}
        <div className={`w-full md:w-1/2 p-10 flex flex-col justify-center space-y-6 bg-white z-10 ${position === "right" ? "order-2" : ""}`}>
          <div className="text-[#00A6FF] font-mono text-sm mb-2">FEATURED PROJECT</div>
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          
          <div className="mt-4">
            <div className="text-sm text-[#00A6FF] mb-3">TECHNOLOGIES USED</div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-50 text-[#00A6FF] rounded-full text-sm border border-[#00A6FF]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center mt-8 text-[#00A6FF] group"
          >
            <span className="mr-2">View Case Study</span>
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                transition: { repeat: Infinity, duration: 1.5 }
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.span>
          </motion.button>
        </div>

        {/* Video */}
        <div className="w-full md:w-1/2 h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/10 z-10" />
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-white/80 rounded-full px-3 py-1 text-sm text-[#00A6FF] backdrop-blur-sm border border-blue-100">
            Interactive Demo
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Sections
const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -1]);

  return (
    <ProjectCard
      title="Project Alpha"
      description="A sleek portfolio landing page using Framer Motion and smooth scroll animations powered by Lenis."
      techStack={["React", "Framer Motion", "Tailwind CSS", "Lenis"]}
      videoUrl="https://res.cloudinary.com/dp4wdlita/video/upload/v1728452063/Pre-comp_1_1_iwpfl9.mp4"
      position="left"
      color="sky"
      scale={scale}
      rotate={rotate}
    />
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <ProjectCard
      title="Tap2Pay Demo"
      description="A seamless payment UI demo with smooth transitions and a mobile-first design."
      techStack={["React", "Tailwind CSS", "Motion Design"]}
      videoUrl="https://res.cloudinary.com/dp4wdlita/video/upload/v1727865482/tap2pay_solution_anct0h.mp4"
      position="right"
      color="red"
      scale={scale}
      rotate={rotate}
    />
  );
};

const Section3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <ProjectCard
      title="Foodiee Demo"
      description="Versatile mobile app development performing impeccably across almost all platforms."
      techStack={["React", "Tailwind CSS", "Motion Design"]}
      videoUrl="https://res.cloudinary.com/dp4wdlita/video/upload/v1730094441/app_jc76ut.mp4"
      position="left"
      color="teal"
      scale={scale}
      rotate={rotate}
    />
  );
};

const Section4 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <ProjectCard
      title="Frontend Development"
      description="Intuitive and engaging user web interfaces for a notable user-friendly experience."
      techStack={["React", "Tailwind CSS", "Motion Design"]}
      videoUrl="https://res.cloudinary.com/dp4wdlita/video/upload/v1721290391/Front_End_Development_goyp6y.mp4"
      position="right"
      color="cyan"
      scale={scale}
      rotate={rotate}
    />
  );
};

export default Projects;