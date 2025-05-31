import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@example.com",
      color: "from-red-500 to-red-600",
      action: "mailto:contact@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      color: "from-red-500 to-red-600",
      action: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "W1K 3EP 49 Grosvenor square Mayfair, London",
      color: "from-red-500 to-red-600",
      action: "#map",
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, color: "text-red-500", url: "#" },
    { name: "LinkedIn", icon: Linkedin, color: "text-red-500", url: "#" },
    { name: "GitHub", icon: Github, color: "text-gray-600", url: "#" },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Animated Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 mx-auto text-center relative overflow-hidden contact-hero"
      >
        {/* Floating tech elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-100 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-100 rounded-full filter blur-3xl"></div>
        </div> */}

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
            className="mb-6 inline-block bg-gradient-to-r from-red-100 to-red-200 px-6 py-2 rounded-full backdrop-blur-sm border border-red-200"
          >
            <p className="text-sm font-medium text-red-600">Let's Connect</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-white"
          >
            Have a project in mind or want to collaborate? Reach out—we'd love
            to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg flex items-center gap-2 cursor-pointer"
            >
              Schedule a Call <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-white border-2 border-red-300 text-red-500 font-semibold hover:bg-red-50 flex items-center gap-2 cursor-pointer"
            >
              View Our Work <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <motion.h2
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Send className="text-red-500" /> Send Us a Message
            </motion.h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg"
              >
                <p className="text-green-600">
                  Thank you! Your message has been sent. We'll get back to you
                  soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "message", label: "Message", type: "textarea" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-gray-600 mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows="5"
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    onHoverStart={() => setHoveredContact(index)}
                    onHoverEnd={() => setHoveredContact(null)}
                    initial={{ x: -10 }}
                    whileInView={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`bg-gradient-to-r ${method.color} p-3 rounded-lg transition-all group-hover:scale-110`}
                    >
                      <method.icon className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{method.title}</h3>
                      <p className="text-lg font-medium group-hover:text-red-500 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-50 hover:bg-red-100 border border-red-100 rounded-lg p-4 flex flex-col items-center gap-2 transition-all"
                  >
                    <div className={`text-2xl ${social.color}`}>
                      <social.icon />
                    </div>
                    <span className="font-medium text-gray-700">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Office Hours */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-red-500" />
                <h2 className="text-2xl font-bold">Office Hours</h2>
              </div>
              <div className="space-y-4">
                {officeHours.map((hours, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span className="text-gray-500">{hours.day}</span>
                    <span className="font-medium text-gray-700">
                      {hours.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
        >
          <div className="h-96 w-full relative">
            <div className="absolute inset-0 bg-red-50 flex items-center justify-center">
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                    },
                  }}
                >
                  <MapPin className="w-12 h-12 mx-auto text-red-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Our Headquarters</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  W1K 3EP 49 Grosvenor square Mayfair, London
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center gap-2 mx-auto shadow-sm"
                >
                  Get Directions <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-400/20 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-red-100 max-w-2xl mx-auto mb-8 text-lg">
              We're excited to hear about your ideas and help bring them to
              life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                Schedule a Call
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
                View Portfolio
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GetInTouch;
