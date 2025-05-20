import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Users, Rocket, Shield, Layers, BarChart2, Zap, Globe, Clock, Smartphone, GitBranch, Cpu } from "lucide-react";

const ProductEngineering = () => {
  const features = [
    {
      icon: Code,
      title: "Full-Cycle Development",
      description: "End-to-end product development from concept to deployment and continuous improvement",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Cpu,
      title: "Tech Architecture",
      description: "Scalable, resilient systems designed for future growth",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Intelligent data pipelines and storage architectures",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Server,
      title: "DevOps Integration",
      description: "Automated CI/CD pipelines for seamless delivery",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Optimized for cloud scalability and performance",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Agile processes with transparent communication",
      color: "from-blue-400 to-blue-600"
    }
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Deep dive into your business objectives and user needs",
      icon: Layers
    },
    {
      title: "Design",
      description: "Crafting intuitive interfaces and robust architectures",
      icon: BarChart2
    },
    {
      title: "Development",
      description: "Agile sprints with continuous integration",
      icon: Code
    },
    {
      title: "Testing",
      description: "Comprehensive QA and performance validation",
      icon: Shield
    },
    {
      title: "Deployment",
      description: "Smooth rollout with zero downtime",
      icon: Rocket
    },
    {
      title: "Maintenance",
      description: "Proactive monitoring and iterative improvements",
      icon: Cpu
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "GraphQL", category: "API" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "TensorFlow", category: "AI" },
    { name: "Flutter", category: "Mobile" }
  ];

  const caseStudies = [
    {
      title: "Fintech Platform",
      description: "Scalable banking solution processing 1M+ transactions daily",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      title: "Healthcare SaaS",
      description: "HIPAA-compliant patient management system",
      tags: ["TypeScript", "GraphQL", "Kubernetes"]
    },
    {
      title: "Retail Analytics",
      description: "Real-time inventory and customer behavior tracking",
      tags: ["Python", "TensorFlow", "BigQuery"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Product Engineering Excellence</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Future-Ready</span> Digital Products
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We engineer digital products that solve real problems, scale effortlessly, 
            and deliver exceptional user experiences through cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg cursor-pointer"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 cursor-pointer"
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

           {/* Stats Section with animated counters */}
           <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 150, text: "Products Launched" },
            { value: 99.9, text: "Uptime Guarantee" },
            { value: 10, text: "Daily Users" },
            { value: 4.8, text: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-blue-500 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}+
                {index === 3 && "/5"}
              </motion.div>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Engineering Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive services to take your product from idea to market leader
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
              }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm relative overflow-hidden group"
            >
               {/* Animated background effect on hover */}
               <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
              
              <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl my-16">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A structured approach to building successful digital products
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 -ml-0.5"></div>
          
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm ${
                  index % 2 === 0 ? "lg:mr-8" : "lg:ml-8 lg:mt-16"
                }`}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <step.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-10 h-10">
                    <Rocket className="w-full h-full text-blue-400 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We work with modern technologies to build robust, scalable solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.05)"
              }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm text-center relative overflow-hidden group"
            >
              <div className="text-blue-500 text-sm mb-1">{tech.category}</div>
              <h3 className="text-lg font-medium text-gray-800">{tech.name}</h3>
                 {/* Hover effect */}
                 <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore how we've helped businesses transform through technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 2
              }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md relative group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              <Globe 
                  size={48} 
                  className="text-blue-500 z-10" 
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 50],
                transition: {
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build Your Next Product?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how we can help you create a market-leading digital product
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10"
              >
                Book a Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductEngineering;