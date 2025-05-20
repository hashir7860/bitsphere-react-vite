import { motion } from "framer-motion";
import { useState } from "react";
import { HardDrive, Network, Cpu, Lock, Code, Coins, Globe, Zap, ArrowRight, ChevronRight, Link } from "lucide-react";

const BlockChainAndWeb3 = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTab, setActiveTab] = useState("platforms");

  const services = [
    {
      icon: HardDrive,
      title: "Blockchain Development",
      description: "Secure, decentralized ledger solutions",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      icon: Network,
      title: "dApp Development",
      description: "Decentralized applications on Ethereum & other chains",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      icon: Cpu,
      title: "Smart Contracts",
      description: "Self-executing contract logic",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      icon: Lock,
      title: "Tokenization",
      description: "Asset digitization and NFT solutions",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      icon: Code,
      title: "Web3 Integration",
      description: "Blockchain-enable existing applications",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    },
    {
      icon: Coins,
      title: "DeFi Solutions",
      description: "Decentralized finance platforms",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/20"
    }
  ];

  const blockchainFeatures = [
    {
      title: "Immutability",
      description: "Tamper-proof record keeping",
      icon: <Lock className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Transparency",
      description: "Publicly verifiable transactions",
      icon: <Globe className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Security",
      description: "Cryptographic protection",
      icon: <Zap className="text-blue-500" />,
      color: "bg-blue-100"
    },
    {
      title: "Automation",
      description: "Smart contract execution",
      icon: <Cpu className="text-blue-500" />,
      color: "bg-blue-100"
    }
  ];

  const platforms = {
    "platforms": [
      { name: "Ethereum", type: "Smart Contract", icon: "ETH", color: "bg-blue-100 text-blue-600" },
      { name: "Polygon", type: "Layer 2", icon: "MATIC", color: "bg-blue-100 text-blue-600" },
      { name: "Solana", type: "High Throughput", icon: "SOL", color: "bg-blue-100 text-blue-600" }
    ],
    "frameworks": [
      { name: "Hardhat", type: "Dev Environment", icon: "HH", color: "bg-blue-100 text-blue-600" },
      { name: "Truffle", type: "Dev Suite", icon: "TR", color: "bg-blue-100 text-blue-600" },
      { name: "Foundry", type: "Testing Framework", icon: "FD", color: "bg-blue-100 text-blue-600" }
    ],
    "storage": [
      { name: "IPFS", type: "Decentralized", icon: "IPFS", color: "bg-blue-100 text-blue-600" },
      { name: "Arweave", type: "Permanent", icon: "AR", color: "bg-blue-100 text-blue-600" },
      { name: "Filecoin", type: "Incentivized", icon: "FIL", color: "bg-blue-100 text-blue-600" }
    ]
  };

  const caseStudies = [
    {
      title: "Supply Chain Transparency",
      description: "Blockchain solution reduced audit times by 70% and eliminated counterfeit products",
      icon: <Network className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["Ethereum", "IPFS", "Polygon"]
    },
    {
      title: "DeFi Lending Platform",
      description: "Built a decentralized lending protocol with $50M+ TVL",
      icon: <Coins className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["Solidity", "Chainlink", "Aave"]
    },
    {
      title: "NFT Marketplace",
      description: "Created a gas-efficient NFT platform with 10K+ users",
      icon: <Lock className="text-blue-500" />,
      color: "bg-blue-100",
      tags: ["ERC-721", "OpenSea API", "ZK-Rollups"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 relative overflow-hidden">
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
          <p className="text-sm font-medium text-blue-600">Blockchain & Web3</p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Decentralized</span> Future Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          We build secure, transparent blockchain applications that redefine trust and enable new business models.
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
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Start Building <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-xl bg-white border-2 border-blue-300 text-blue-500 font-semibold hover:bg-blue-50 flex items-center gap-2 cursor-pointer"
          >
            Explore Use Cases <ArrowRight size={18} />
          </motion.button>
        </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blockchain Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for the decentralized web
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className={`bg-white p-8 rounded-2xl border ${
                hoveredService === index ? "border-blue-300" : "border-gray-200"
              } transition-all shadow-sm hover:shadow-md relative overflow-hidden group`}
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
              
              <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 relative z-10`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10 mb-4">{service.description}</p>
              
              <motion.div 
                className="relative z-10"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: hoveredService === index ? 1 : 0, x: hoveredService === index ? 0 : -5 }}
              >
                <a href="#" className="text-blue-500 text-sm font-medium flex items-center gap-1">
                  Learn more <ChevronRight size={14} className="mt-0.5" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl border border-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Blockchain Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fundamental advantages of decentralized technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockchainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Leading blockchain platforms and frameworks we work with
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-blue-50 p-1 rounded-xl border border-blue-100">
              {Object.keys(platforms).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {platforms[activeTab].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${tech.color} p-3 rounded-lg`}>
                    <span className="font-bold">{tech.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blockchain Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real-world implementations delivering measurable impact
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="bg-blue-100 p-2 rounded-full"
                  whileHover={{ rotate: 15 }}
                >
                  {caseStudy.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blockchain Visualization */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link className="text-blue-500" />
                <span className="text-sm font-medium text-blue-500">BLOCKCHAIN VISUALIZATION</span>
              </motion.div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                How Blockchain Works
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                A decentralized network of nodes working together to validate transactions and maintain the ledger.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  <h3 className="font-semibold mb-2">Key Components</h3>
                  <ul className="text-gray-600 space-y-1">
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span>Distributed Nodes</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span>Consensus Mechanisms</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span>Cryptographic Hashing</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span>Immutable Ledger</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="bg-blue-50 flex items-center justify-center p-8 min-h-[400px]">
              <motion.div 
                className="relative w-full h-full"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  transition: { duration: 4, repeat: Infinity }
                }}
              >
                {/* Blockchain nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-white rounded-full border-2 border-blue-400 flex items-center justify-center"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`
                    }}
                    animate={{
                      y: [0, -5, 0],
                      borderColor: ["#60a5fa", "#3b82f6", "#60a5fa"],
                      transition: {
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity
                      }
                    }}
                  >
                    <Lock className="w-4 h-4 text-blue-500" />
                  </motion.div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {[...Array(6)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`}
                      y2={`${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`}
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Floating tech elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2
            }}
          />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white">Ready to Decentralize?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg relative z-10">
            Let's discuss how blockchain can transform your business operations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              Start Your Project 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Book Consultation
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlockChainAndWeb3;