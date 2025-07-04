import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cloud, Shield, Github, Cpu, Database, Server, Lock, CpuIcon, BrainCircuit, Network } from "lucide-react";

const services = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "We build intelligent systems that learn, adapt, and automate complex processes using cutting-edge machine learning and deep learning technologies.",
    features: [
      "Machine Learning Models",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Predictive Analytics"
    ],
    tech: [
      { icon: <Cpu className="w-8 h-8" />, name: "TensorFlow" },
      { icon: <Database className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Server className="w-8 h-8" />, name: "OpenCV" }
    ]
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Network className="w-5 h-5" />,
    description: "Our DevOps solutions streamline your development pipeline with automated CI/CD, infrastructure as code, and cloud-native architectures for maximum efficiency.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Automation"
    ],
    tech: [
      { icon: <Cloud className="w-8 h-8" />, name: "Kubernetes" },
      { icon: <Github className="w-8 h-8" />, name: "Docker" },
      { icon: <Server className="w-8 h-8" />, name: "Terraform" }
    ]
  },
  {
    id: "web",
    name: "Web Development",
    icon: <Code className="w-5 h-5" />,
    description: "We craft high-performance, scalable web applications with modern frameworks that deliver exceptional user experiences across all devices.",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "API Development",
      "Real-time Features"
    ],
    tech: [
      { icon: <Code className="w-8 h-8" />, name: "React" },
      { icon: <Server className="w-8 h-8" />, name: "Node.js" },
      { icon: <Database className="w-8 h-8" />, name: "GraphQL" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: <Cloud className="w-5 h-5" />,
    description: "Our cloud experts design and implement scalable, secure cloud architectures that optimize performance while reducing infrastructure costs.",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "Hybrid Cloud Solutions",
      "Cost Optimization"
    ],
    tech: [
      { icon: <Cloud className="w-8 h-8" />, name: "AWS" },
      { icon: <Cloud className="w-8 h-8" />, name: "Azure" },
      { icon: <Cloud className="w-8 h-8" />, name: "GCP" }
    ]
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: <Lock className="w-5 h-5" />,
    description: "We develop secure, decentralized blockchain solutions that bring transparency, trust, and efficiency to your business processes.",
    features: [
      "Smart Contracts",
      "DApp Development",
      "Tokenization",
      "DeFi Solutions"
    ],
    tech: [
      { icon: <CpuIcon className="w-8 h-8" />, name: "Ethereum" },
      { icon: <Database className="w-8 h-8" />, name: "Hyperledger" },
      { icon: <Lock className="w-8 h-8" />, name: "Solidity" }
    ]
  },
  {
    id: "security",
    name: "Cyber Security",
    icon: <Shield className="w-5 h-5" />,
    description: "Our security experts protect your digital assets with comprehensive threat assessment, penetration testing, and enterprise-grade security solutions.",
    features: [
      "Threat Detection",
      "Vulnerability Assessment",
      "Security Audits",
      "Compliance Management"
    ],
    tech: [
      { icon: <Shield className="w-8 h-8" />, name: "SIEM" },
      { icon: <Lock className="w-8 h-8" />, name: "OWASP" },
      { icon: <Server className="w-8 h-8" />, name: "Firewalls" }
    ]
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="py-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Our <span className="text-[#00A6FF]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ducimus, asperiores fugiat quasi fugit ratione voluptate enim eos eum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Services Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {services.map((service) => (
                // <motion.button
                //   key={service.id}
                //   className={`p-5 rounded-xl text-left transition-all duration-300 flex items-start gap-3 ${selectedService.id === service.id
                //       // ? 'bg-gradient-to-r  [#00A6FF] from-red-400 to-red-600 text-white shadow-lg'
                //       ? 'bg-red-500 from-red-400 to-red-600 text-white shadow-lg'
                //       : 'bg-red-100 hover:bg-red-500 hover:text-white text-gray-800 border border-red-100'
                //     }`}
                //   onClick={() => setSelectedService(service)}
                //   whileHover={{ y: -5 }}
                //   whileTap={{ scale: 0.98 }}
                // >
                //   <div className={`p-2 rounded-lg ${selectedService.id === service.id
                //       ? 'bg-white text-red-500'
                //       : 'bg-red-500 text-white'
                //     }`}>
                //     {service.icon}
                //   </div>
                //   <span className="font-medium">{service.name}</span>
                // </motion.button>
                <motion.button
                  key={service.id}
                  className={`group p-5 rounded-xl text-left transition-all duration-300 flex items-start gap-3 ${selectedService.id === service.id
                    ? 'bg-[#00A6FF] text-white shadow-lg'
                    : 'bg-blue-100 hover:bg-[#00A6FF] hover:text-white text-gray-800 border border-[#00A6FF]'
                    }`}
                  onClick={() => setSelectedService(service)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${selectedService.id === service.id
                      ? 'bg-white text-[#00A6FF]'
                      : 'bg-[#00A6FF] text-white group-hover:bg-white group-hover:text-[#00A6FF]'
                      }`}
                  >
                    {service.icon}
                  </div>
                  <span className="font-medium">{service.name}</span>
                </motion.button>

              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-9 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl h-full border border-[#00A6FF]"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800">
                  <div className="p-2 bg-[#00A6FF] rounded-lg text-white">
                    {selectedService.icon}
                  </div>
                  {selectedService.name}
                </h3>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-lg text-gray-800">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg border border-[#00A6FF]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-[#00A6FF] mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg text-gray-800">Technologies We Use</h4>
                  <div className="flex gap-4 flex-wrap">
                    {selectedService.tech.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        onHoverStart={() => setHoveredTech(index)}
                        onHoverEnd={() => setHoveredTech(null)}
                      >
                        <motion.div
                          className="bg-blue-50 p-4 rounded-xl flex flex-col items-center gap-2 w-24 border border-[#00A6FF]"
                          whileHover={{ y: -5 }}
                        >
                          {React.cloneElement(tech.icon, { className: "w-8 h-8 text-[#00A6FF]" })}
                          <AnimatePresence>
                            {/* {hoveredTech === index && (
                              <motion.span
                                className="absolute -bottom-6 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                              >
                                {tech.name}
                              </motion.span>
                            )} */}
                            {/* {React.cloneElement(tech.icon, { className: "w-8 h-8 text-[#00A6FF]" })}
                            <span className="text-sm text-gray-700 text-center mt-2">{tech.name}</span> */}
                            <motion.span
                                className="absolute -bottom-8 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                              >
                                {tech.name}
                              </motion.span>
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   Code,
//   Cloud,
//   Shield,
//   Github,
//   Cpu,
//   Database,
//   Server,
//   Lock,
//   CpuIcon,
//   BrainCircuit,
//   Network,
// } from "lucide-react";

// const services = [
//   {
//     id: "ai",
//     name: "Artificial Intelligence",
//     icon: <BrainCircuit className="w-5 h-5" />,
//     description:
//       "We build intelligent systems that learn, adapt, and automate complex processes using cutting-edge machine learning and deep learning technologies.",
//     features: [
//       "Machine Learning Models",
//       "Computer Vision Solutions",
//       "Natural Language Processing",
//       "Predictive Analytics",
//     ],
//     tech: [
//       { icon: <Cpu className="w-8 h-8" />, name: "TensorFlow" },
//       { icon: <Database className="w-8 h-8" />, name: "PyTorch" },
//       { icon: <Server className="w-8 h-8" />, name: "OpenCV" },
//     ],
//   },
//   {
//     id: "devops",
//     name: "DevOps",
//     icon: <Network className="w-5 h-5" />,
//     description:
//       "Our DevOps solutions streamline your development pipeline with automated CI/CD, infrastructure as code, and cloud-native architectures for maximum efficiency.",
//     features: [
//       "CI/CD Pipelines",
//       "Infrastructure as Code",
//       "Container Orchestration",
//       "Cloud Automation",
//     ],
//     tech: [
//       { icon: <Cloud className="w-8 h-8" />, name: "Kubernetes" },
//       { icon: <Github className="w-8 h-8" />, name: "Docker" },
//       { icon: <Server className="w-8 h-8" />, name: "Terraform" },
//     ],
//   },
//   {
//     id: "web",
//     name: "Web Development",
//     icon: <Code className="w-5 h-5" />,
//     description:
//       "We craft high-performance, scalable web applications with modern frameworks that deliver exceptional user experiences across all devices.",
//     features: [
//       "Responsive Design",
//       "Progressive Web Apps",
//       "API Development",
//       "Real-time Features",
//     ],
//     tech: [
//       { icon: <Code className="w-8 h-8" />, name: "React" },
//       { icon: <Server className="w-8 h-8" />, name: "Node.js" },
//       { icon: <Database className="w-8 h-8" />, name: "GraphQL" },
//     ],
//   },
//   {
//     id: "cloud",
//     name: "Cloud Computing",
//     icon: <Cloud className="w-5 h-5" />,
//     description:
//       "Our cloud experts design and implement scalable, secure cloud architectures that optimize performance while reducing infrastructure costs.",
//     features: [
//       "Cloud Migration",
//       "Serverless Architecture",
//       "Hybrid Cloud Solutions",
//       "Cost Optimization",
//     ],
//     tech: [
//       { icon: <Cloud className="w-8 h-8" />, name: "AWS" },
//       { icon: <Cloud className="w-8 h-8" />, name: "Azure" },
//       { icon: <Cloud className="w-8 h-8" />, name: "GCP" },
//     ],
//   },
//   {
//     id: "blockchain",
//     name: "Blockchain",
//     icon: <Lock className="w-5 h-5" />,
//     description:
//       "We develop secure, decentralized blockchain solutions that bring transparency, trust, and efficiency to your business processes.",
//     features: [
//       "Smart Contracts",
//       "DApp Development",
//       "Tokenization",
//       "DeFi Solutions",
//     ],
//     tech: [
//       { icon: <CpuIcon className="w-8 h-8" />, name: "Ethereum" },
//       { icon: <Database className="w-8 h-8" />, name: "Hyperledger" },
//       { icon: <Lock className="w-8 h-8" />, name: "Solidity" },
//     ],
//   },
//   {
//     id: "security",
//     name: "Cyber Security",
//     icon: <Shield className="w-5 h-5" />,
//     description:
//       "Our security experts protect your digital assets with comprehensive threat assessment, penetration testing, and enterprise-grade security solutions.",
//     features: [
//       "Threat Detection",
//       "Vulnerability Assessment",
//       "Security Audits",
//       "Compliance Management",
//     ],
//     tech: [
//       { icon: <Shield className="w-8 h-8" />, name: "SIEM" },
//       { icon: <Lock className="w-8 h-8" />, name: "OWASP" },
//       { icon: <Server className="w-8 h-8" />, name: "Firewalls" },
//     ],
//   },
// ];

// const ServicesSection = () => {
//   const [activeId, setActiveId] = useState(services[0].id);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries.find((entry) => entry.isIntersecting);
//         if (visible) {
//           setActiveId(visible.target.getAttribute("data-id"));
//         }
//       },
//       { threshold: 0.5 }
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       sectionRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const target = sectionRefs.current.find((ref) => ref?.dataset?.id === id);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <section className="bg-white py-20">
//       <div className="text-center mb-15">
//         <h2 className="text-5xl font-bold mb-4 text-gray-800">
//             Our <span className="text-[#00A6FF]">Expertise</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ducimus, asperiores fugiat quasi fugit ratione voluptate enim eos eum
//           </p>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 lg:flex gap-10">
//         {/* Sidebar Navigation */}
//         <div className="lg:w-1/4 mb-10 lg:mb-0 sticky top-20 h-fit">
//           <div className="space-y-4">
//             {services.map((service) => (
//               <button
//                 key={service.id}
//                 onClick={() => scrollToSection(service.id)}
//                 className={`w-full text-left p-4 rounded-lg flex items-center gap-3 transition ${
//                   activeId === service.id
//                     ? "bg-[#00A6FF] text-white shadow-lg"
//                     : "bg-blue-100 hover:bg-[#00A6FF] hover:text-white text-gray-800"
//                 }`}
//               >
//                 <div
//                   className={`p-2 rounded-lg ${
//                     activeId === service.id
//                       ? "bg-white text-[#00A6FF]"
//                       : "bg-[#00A6FF] text-white"
//                   }`}
//                 >
//                   {service.icon}
//                 </div>
//                 <span>{service.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Scrollable Content */}
//         <div className="lg:w-3/4 space-y-20">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               ref={(el) => (sectionRefs.current[index] = el)}
//               data-id={service.id}
//               className="scroll-mt-24"
//             >
//               <div className="border border-[#00A6FF] rounded-2xl p-8 shadow-xl">
//                 <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-800">
//                   <div className="p-2 bg-[#00A6FF] rounded-lg text-white">
//                     {service.icon}
//                   </div>
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>

//                 <div className="mb-8">
//                   <h4 className="font-semibold text-lg text-gray-800 mb-3">
//                     Key Features
//                   </h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {service.features.map((feature, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg border border-[#00A6FF]"
//                       >
//                         <span className="text-[#00A6FF] mt-1">✓</span>
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-lg text-gray-800 mb-3">
//                     Technologies We Use
//                   </h4>
//                   <div className="flex flex-wrap gap-4">
//                     {service.tech.map((tech, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-blue-50 p-4 rounded-xl border border-[#00A6FF] flex flex-col items-center w-24"
//                       >
//                         {React.cloneElement(tech.icon, {
//                           className: "w-8 h-8 text-[#00A6FF]",
//                         })}
//                         <span className="text-sm text-center text-gray-700 mt-2">
//                           {tech.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
