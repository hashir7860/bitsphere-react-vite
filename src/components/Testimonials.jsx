import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialItems = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    photo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    quote: "This company is amazing! They helped me launch my business with outstanding solutions.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Marketing Director",
    photo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    quote: "Incredible service! The team was professional, and the results exceeded my expectations.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    position: "Product Manager",
    photo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    quote: "I've been using their services for years. Consistent quality and dedication to customer success!",
    rating: 5,
  },
  {
    name: "Sarah Connor",
    position: "UX Designer",
    photo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    quote: "Absolutely thrilled with the results! My website looks fantastic, and the functionality is top-notch.",
    rating: 4,
  },
  {
    name: "Mark Johnson",
    position: "CTO, Startup Inc",
    photo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
    quote: "I highly recommend this company to anyone looking for reliable and innovative solutions.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialItems.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialItems.length) % testimonialItems.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hear from businesses who've transformed their digital presence with us
        </motion.p>

        <div className="relative h-96 md:h-80">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex justify-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-4 border border-red-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <img
                      src={testimonialItems[currentIndex].photo}
                      alt={testimonialItems[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-red-200 shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 ${i < testimonialItems[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <motion.blockquote 
                      className="text-xl italic text-gray-700 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonialItems[currentIndex].quote}"
                    </motion.blockquote>
                    <div>
                      <p className="font-bold text-gray-800">{testimonialItems[currentIndex].name}</p>
                      <p className="text-sm text-gray-500">{testimonialItems[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 cursor-pointer hover:bg-red-50 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-red-100 cursor-pointer hover:bg-red-50 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;