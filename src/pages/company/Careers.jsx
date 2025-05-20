import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Award,
  Globe,
  Clock,
  ArrowRight,
  ChevronDown,
  Heart,
  Zap,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [expandedJob, setExpandedJob] = useState(null);

  const stats = [
    {
      value: "50+",
      label: "Team Members",
      icon: <Users className="text-blue-500" />,
    },
    {
      value: "12+",
      label: "Countries",
      icon: <Globe className="text-blue-500" />,
    },
    {
      value: "4.8",
      label: "Rating",
      icon: <Award className="text-blue-500" />,
    },
    { value: "5+", label: "Years", icon: <Clock className="text-blue-500" /> },
  ];

  const benefits = [
    {
      icon: <Heart className="text-blue-500" />,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      icon: <Zap className="text-blue-500" />,
      title: "Learning Budget",
      description: "$2,000 annual stipend for professional development",
    },
    {
      icon: <Globe className="text-blue-500" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with our distributed team",
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Unlimited PTO",
      description: "Take time when you need it to recharge",
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "product", name: "Product" },
    { id: "marketing", name: "Marketing" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "Build beautiful, performant user interfaces for our products.",
      responsibilities: [
        "Develop and maintain our React-based web applications",
        "Collaborate with designers to implement pixel-perfect UIs",
        "Optimize applications for maximum performance",
        "Mentor junior engineers",
      ],
      requirements: [
        "5+ years of frontend development experience",
        "Expertise in React, TypeScript, and modern CSS",
        "Experience with state management solutions",
        "Strong UX sensibilities",
      ],
    },
    {
      id: 2,
      title: "UX Designer",
      department: "design",
      type: "Full-time",
      location: "Remote",
      description: "Create intuitive and delightful user experiences.",
      responsibilities: [
        "Conduct user research and testing",
        "Design wireframes and high-fidelity prototypes",
        "Collaborate with engineers to implement designs",
        "Maintain and evolve our design system",
      ],
      requirements: [
        "3+ years of UX design experience",
        "Portfolio demonstrating strong UX skills",
        "Proficiency in Figma",
        "Experience with design systems",
      ],
    },
    {
      id: 3,
      title: "Product Manager",
      department: "product",
      type: "Full-time",
      location: "Remote",
      description: "Lead product strategy and execution.",
      responsibilities: [
        "Define product vision and roadmap",
        "Work with cross-functional teams to deliver features",
        "Analyze metrics to inform product decisions",
        "Gather and prioritize product requirements",
      ],
      requirements: [
        "4+ years of product management experience",
        "Technical background or experience working with engineers",
        "Strong analytical skills",
        "Excellent communication skills",
      ],
    },
  ];

  const filteredJobs =
    activeDepartment === "all"
      ? jobs
      : jobs.filter((job) => job.department === activeDepartment);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
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
            className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-blue-200"
          >
            <p className="text-sm font-medium text-blue-600">Join Our Team</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Future
            </span>{" "}
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We're looking for passionate, creative thinkers to help solve
            meaningful problems.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg flex items-center gap-2 mx-auto shadow-lg cursor-pointer"
          >
            View Open Roles <ArrowRight size={20} />
          </motion.button>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
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
                className="text-3xl font-bold mb-2 text-blue-500"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Our Culture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We believe work should be meaningful, challenging, and fun
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <div className="space-y-6">
              {[
                "Customer obsession",
                "Bias for action",
                "Ownership mentality",
                "Long-term thinking",
                "Radical transparency",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-100 p-1.5 rounded-full mt-1">
                    <CheckCircle className="text-blue-500" size={16} />
                  </div>
                  <p className="text-lg text-gray-600">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Life at Our Company</h3>
            <div className="aspect-w-16 aspect-h-9 bg-blue-50 rounded-xl mb-6 overflow-hidden">
              {/* Video placeholder - replace with actual video */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Rocket className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <p className="text-gray-600">Company culture video</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              We host regular team retreats, hackathons, and learning sessions
              to foster connection and growth.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            Perks & Benefits
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We take care of our team so you can do your best work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="inline-block"
                >
                  {benefit.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-blue-50 rounded-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our team of talented, passionate people building the future
          </motion.p>
        </div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {departments.map((dept) => (
            <motion.button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeDepartment === dept.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100 border border-gray-200"
              }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full text-left p-6 hover:bg-blue-50 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`transform transition-transform ${
                      expandedJob === job.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">About the Role</h4>
                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-2">Responsibilities</h4>
                        <ul className="space-y-2 text-gray-600">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-blue-500 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-2 text-gray-600">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-blue-500 mt-0.5 flex-shrink-0"
                                size={16}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-sm"
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <p className="text-xl text-gray-600 mb-6">
                No open positions in this department right now
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDepartment("all")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm"
              >
                View All Positions
              </motion.button>
            </motion.div>
          )}
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          </div>

          <h2 className="text-3xl font-bold mb-4 relative z-10 text-white">
            Don't See Your Dream Role?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            We're always looking for talented people. Send us your resume and
            we'll contact you when we have an opening that matches your skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
            >
              Submit Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Contact Talent Team
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
