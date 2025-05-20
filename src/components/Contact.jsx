import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.includes("@")) newErrors.email = "Please enter a valid email address.";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="relative py-24 px-6 bg-[#0f0f10] text-white overflow-hidden">
      {/* Background Motion Blur Effects */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]"
          animate={{ x: [0, 60, -60, 0], y: [0, -60, 60, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-2xl bottom-[-100px] right-[-100px]"
          animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Form Card */}
      <div className="relative z-10 max-w-xl mx-auto bg-[#1e1e20] p-10 rounded-2xl shadow-2xl border border-white/10">
        <h2 className="text-4xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 mb-8 text-center">
          Have a question or proposal? Fill out the form and we’ll get back to you shortly.
        </p>

        {submitted ? (
          <motion.p
            className="text-green-400 text-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Thank you! We'll be in touch soon.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#121212] px-4 py-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  {errors.name}
                </motion.p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#121212] px-4 py-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-[#121212] px-4 py-3 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && (
                <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
