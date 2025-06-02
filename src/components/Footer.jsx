import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    // bg-[#000A24]
    <motion.footer
      className="bg-[#000A24] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#00A6FF]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated background elements - updated to light red */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00A6FF] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00A6FF] rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TechBasePro</span>
              </div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1, }} // Scale up and change background on hover
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-10 bg-[#00A6FF] rounded-lg flex items-center justify-start px-4 cursor-pointer">
                <span className="text-white font-bold text-sm tracking-tight">
                  Bitsphere Pro
                </span>
              </div>
            </motion.div>


            <p className="text-white mb-6">
              Building exceptional digital experiences and innovative solutions for the modern world.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, color: "hover:text-white" },
                { icon: <Twitter size={20} />, color: "hover:text-white" },
                { icon: <Linkedin size={20} />, color: "hover:text-white" },
                { icon: <Github size={20} />, color: "hover:text-white" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`text-white transition-colors ${social.color}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#00A6FF] rounded-full"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'AI Integration', 'Consulting'].map((service, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#00A6FF] rounded-full"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="text-white mt-1 flex-shrink-0" size={18} />
                <span className="text-white">W1K 3EP 49 Grosvenor square Mayfair, London</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white" size={18} />
                <a href="mailto:hello@ilt.com" className="text-white hover:text-white">sales@Bitshpere pro.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white" size={18} />
                <a href="tel:+1234567890" className="text-white hover:text-white">+1 (234) 567-890</a>
              </li>
            </ul>
{/* 
            <div>
              <h5 className="font-semibold mb-4 text-white">Stay Updated</h5>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-red-50 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-300 border border-red-200 flex-grow"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r  from-red-400 to-red-600 hover:bg-red-600 text-white px-6 py-3 rounded-r-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
              <AnimatePresence>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white text-sm mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </div> */}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-red-100 text-center text-white text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Bitshpere pro Technologies. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;