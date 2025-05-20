import { motion } from "framer-motion";
import { Cloud,Code, LineChart,Server, Cpu, GitBranch, Shield, Zap, Database, Network } from "lucide-react";

const DevOpsAndCloud = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Design and implement scalable cloud solutions",
      color: "text-blue-400"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated, version-controlled infrastructure",
      color: "text-purple-400"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment",
      color: "text-green-400"
    },
    {
      icon: Shield,
      title: "DevSecOps",
      description: "Security integrated throughout the lifecycle",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-availability, low-latency systems",
      color: "text-red-400"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable, resilient data systems",
      color: "text-pink-400"
    }
  ];

  const techStack = [
    {
      category: "Cloud Providers",
      items: [
        { name: "AWS", icon: "AWS", color: "bg-orange-500/10 text-orange-500" },
        { name: "Azure", icon: "AZ", color: "bg-blue-500/10 text-blue-500" },
        { name: "GCP", icon: "GC", color: "bg-green-500/10 text-green-500" }
      ]
    },
    {
      category: "Orchestration",
      items: [
        { name: "Kubernetes", icon: "K8s", color: "bg-blue-600/10 text-blue-600" },
        { name: "Docker", icon: "DC", color: "bg-blue-400/10 text-blue-400" },
        { name: "Terraform", icon: "TF", color: "bg-purple-500/10 text-purple-500" }
      ]
    },
    {
      category: "Monitoring",
      items: [
        { name: "Prometheus", icon: "PM", color: "bg-red-500/10 text-red-500" },
        { name: "Grafana", icon: "GF", color: "bg-orange-400/10 text-orange-400" },
        { name: "Datadog", icon: "DD", color: "bg-yellow-500/10 text-yellow-500" }
      ]
    }
  ];

  const workflow = [
    {
      step: "Plan",
      description: "Infrastructure design and requirements",
      icon: <Network className="text-blue-400" />
    },
    {
      step: "Code",
      description: "IaC and application development",
      icon: <Code className="text-purple-400" />
    },
    {
      step: "Build",
      description: "Containerization and packaging",
      icon: <Cpu className="text-green-400" />
    },
    {
      step: "Test",
      description: "Automated testing and security scans",
      icon: <Shield className="text-yellow-400" />
    },
    {
      step: "Release",
      description: "Artifact management and staging",
      icon: <GitBranch className="text-red-400" />
    },
    {
      step: "Deploy",
      description: "Infrastructure provisioning",
      icon: <Cloud className="text-pink-400" />
    },
    {
      step: "Operate",
      description: "Monitoring and incident response",
      icon: <Zap className="text-blue-400" />
    },
    {
      step: "Monitor",
      description: "Performance tracking and logging",
      icon: <LineChart className="text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block bg-blue-600/20 px-4 py-2 rounded-full"
        >
          <p className="text-sm font-medium text-blue-400">DevOps & CloudOps</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Cloud-Native <span className="text-blue-400">Infrastructure</span> Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          We build and maintain secure, scalable cloud infrastructure with automated CI/CD pipelines for continuous innovation.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our DevOps & Cloud Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for modern infrastructure needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all"
            >
              <div className={`${service.color} mb-4`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800/20 rounded-3xl my-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-leading tools for infrastructure and operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                {stack.category}
              </h3>
              <div className="space-y-3">
                {stack.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className={`${item.color} p-3 rounded-lg flex items-center gap-3`}
                  >
                    <div className="font-bold">{item.icon}</div>
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DevOps Workflow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">DevOps Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our continuous integration and delivery process
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-800/50 p-4 rounded-lg border border-gray-700 z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-700/50 p-2 rounded-full mb-2">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{step.step}</h3>
                  <p className="text-xs text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Visualization */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <Network className="text-blue-400" />
                <span className="text-sm font-medium text-blue-400">CLOUD ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Scalable Cloud Infrastructure</h2>
              <p className="text-gray-400 mb-6">
                We designed and implemented a highly available cloud architecture that handles 50K+ requests per second with 99.99% uptime.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Solution Components</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Kubernetes clusters with auto-scaling</li>
                    <li>• Multi-region deployment</li>
                    <li>• Infrastructure as Code (Terraform)</li>
                    <li>• Real-time monitoring and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-700/50 flex items-center justify-center p-8 min-h-[400px]">
              <motion.div 
                className="relative w-full h-full"
                animate={{
                  opacity: [0.9, 1, 0.9],
                  transition: { duration: 4, repeat: Infinity }
                }}
              >
                {/* Cloud architecture visualization */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Cloud outline */}
                  <div className="w-48 h-32 rounded-full bg-blue-600/10 border-2 border-blue-400/30"></div>
                  
                  {/* Services nodes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gray-800 rounded-full border-2 border-blue-400 flex items-center justify-center"
                      style={{
                        left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                        top: `${50 + 25 * Math.sin((angle * Math.PI) / 180)}%`
                      }}
                      animate={{
                        y: [0, -5, 0],
                        transition: {
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity
                        }
                      }}
                    >
                      {i % 2 === 0 ? (
                        <Server className="w-4 h-4 text-blue-400" />
                      ) : (
                        <Database className="w-4 h-4 text-blue-400" />
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Connection lines */}
                  <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`}
                        y2={`${50 + 25 * Math.sin((angle * Math.PI) / 180)}%`}
                        stroke="rgba(96, 165, 250, 0.3)"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss how we can optimize your cloud environment and deployment pipelines
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg"
          >
            Optimize Your Infrastructure
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default DevOpsAndCloud;