import { motion } from "framer-motion";
import { Server, Shield, Zap, Clock, BarChart2,Users, ArrowRight, Check, Wifi, Cloud, Database, Cpu, ChevronDown, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

const ManagedItSystems = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('services');
  const [expandedCase, setExpandedCase] = useState(null);
    const [activeFaq, setActiveFaq] = useState();
  
  const [email, setEmail] = useState('');

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee", icon: <Server className="text-blue-500" /> },
    { value: "24/7", label: "Monitoring & Support", icon: <Clock className="text-blue-500" /> },
    { value: "50%", label: "Cost Reduction", icon: <BarChart2 className="text-blue-500" /> },
    { value: "100+", label: "Systems Managed", icon: <Database className="text-blue-500" /> }
  ];

  const services = [
    {
      title: "Network Management",
      description: "Comprehensive management of your network infrastructure",
      features: [
        "Continuous network monitoring",
        "Performance optimization",
        "Security patching",
        "Bandwidth management"
      ],
      icon: <Wifi className="text-blue-500" />
    },
    {
      title: "Cloud Services",
      description: "End-to-end cloud infrastructure management",
      features: [
        "Cloud migration planning",
        "Cost optimization",
        "Security configuration",
        "Backup & disaster recovery"
      ],
      icon: <Cloud className="text-blue-500" />
    },
    {
      title: "Security Management",
      description: "Protecting your systems from threats",
      features: [
        "Firewall management",
        "Intrusion detection",
        "Vulnerability scanning",
        "Security audits"
      ],
      icon: <Shield className="text-blue-500" />
    },
    {
      title: "Server Management",
      description: "Proactive server administration and maintenance",
      features: [
        "Performance tuning",
        "Patch management",
        "Capacity planning",
        "Virtualization support"
      ],
      icon: <Cpu className="text-blue-500" />
    }
  ];

  const benefits = [
    {
      name: "Reduced Downtime",
      description: "Proactive monitoring prevents issues before they impact your business",
      icon: <Zap className="text-blue-500" />
    },
    {
      name: "Expert Team",
      description: "Access to certified IT professionals without the hiring overhead",
      icon: <Users className="text-blue-500" />
    },
    {
      name: "Predictable Costs",
      description: "Fixed monthly pricing replaces unpredictable IT expenses",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    }
  ];

  const caseStudies = [
    {
      id: 1,
      name: "Enterprise Network Overhaul",
      challenge: "Frequent network outages affecting productivity",
      solution: "Implemented proactive monitoring and redundancy systems",
      results: [
        "Reduced downtime by 90%",
        "Improved network speed by 40%",
        "Saved $50k in annual maintenance costs"
      ]
    },
    {
      id: 2,
      name: "Cloud Migration",
      challenge: "Legacy systems causing scalability issues",
      solution: "Managed cloud migration with zero downtime",
      results: [
        "Cut infrastructure costs by 60%",
        "Improved system reliability",
        "Enabled remote work capabilities"
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in your managed services?",
      answer: "Our services include 24/7 monitoring, security management, performance optimization, and regular reporting - all tailored to your specific needs."
    },
    {
      question: "How quickly can you respond to issues?",
      answer: "Our average response time is under 15 minutes for critical issues, with most problems resolved within 1 hour."
    },
    {
      question: "Can you work with our existing IT team?",
      answer: "Absolutely! We complement internal teams by handling routine maintenance and after-hours support."
    }
  ];

  const toggleCase = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
      >
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
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Proactive IT Management</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Managed</span> IT Systems
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Comprehensive IT system management that keeps your business running smoothly while reducing costs.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg cursor-pointer"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-300 hover:border-blue-400 text-blue-500 px-8 py-3 rounded-xl cursor-pointer font-semibold text-lg hover:bg-blue-50"
            >
              See Our Services
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.p
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-2 text-blue-600"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tabs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-50 rounded-lg p-1 border border-blue-100">
            {[
              { id: 'services', label: 'Services' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'cases', label: 'Case Studies' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'text-blue-600 hover:text-blue-800'
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.05 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Our Managed IT Services</h2>
              
              <div className="flex overflow-x-auto pb-6 mb-8 scrollbar-hide">
                <div className="flex gap-2 mx-auto">
                  {services.map((service, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveService(index)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-6 py-3 rounded-full whitespace-nowrap ${
                        activeService === index
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      {service.title}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-50 rounded-xl border border-blue-200 p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {services[activeService].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{services[activeService].title}</h3>
                    <p className="text-gray-600">{services[activeService].description}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services[activeService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                        >
                          <div className="bg-blue-100 p-1 rounded-full">
                            <Check className="text-blue-500" size={16} />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">Business Benefits</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Why choose managed IT services for your business growth and stability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="mb-4">
                      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.name}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-blue-500 font-medium flex items-center gap-1"
                    >
                      Learn More <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'cases' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <h2 className="text-2xl font-bold mb-8">IT Management Case Studies</h2>
              
              <div className="space-y-6">
                {caseStudies.map((caseStudy) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCase(caseStudy.id)}
                      className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-1">{caseStudy.name}</h3>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      <ChevronDown
                        className={`transform transition-transform text-blue-500 ${
                          expandedCase === caseStudy.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedCase === caseStudy.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Our Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Results Achieved</h4>
                          <ul className="space-y-3 text-gray-600">
                            {caseStudy.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50/50">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Management Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A structured approach to ensure your IT systems are always optimized and secure
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600"></div>
          
          <div className="space-y-12">
            {[
              {
                step: "Initial Assessment",
                description: "Comprehensive audit of your current IT infrastructure",
                duration: "1-2 weeks"
              },
              {
                step: "Customized Plan",
                description: "Tailored management strategy for your business needs",
                duration: "1 week"
              },
              {
                step: "Implementation",
                description: "Deploy monitoring and management tools",
                duration: "2-4 weeks"
              },
              {
                step: "Ongoing Management",
                description: "24/7 monitoring and proactive maintenance",
                duration: "Continuous"
              },
              {
                step: "Quarterly Reviews",
                description: "Performance optimization and strategy updates",
                duration: "Ongoing"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center -translate-x-1/2">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <span className="text-sm text-blue-500">{item.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Everything you need to know about our managed IT services
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(index)}
                className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  className={`transform transition-transform text-blue-500 ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our managed IT services? Our team is ready to help optimize your technology infrastructure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href="mailto:it@example.com" className="text-blue-600 hover:underline">
                    it@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <a href="tel:+18005551234" className="text-blue-600 hover:underline">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MessageSquare className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Emergency Support</h4>
                  <p className="text-gray-600">24/7 critical issue response</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Request IT Assessment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Current IT Challenges
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your IT infrastructure needs..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-semibold shadow-lg"
              >
                Request Free Assessment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">Ready to Optimize Your IT?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Let us handle your IT systems so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10"
            >
              View Pricing Plans
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ManagedItSystems;