import { section } from 'framer-motion/client'
// import React from 'react'
import React, { useState } from 'react';
import about from '../assets/about.jpg'
import { motion } from 'framer-motion';

function About() {
    const [ctaModalOpen, setCtaModalOpen] = useState(false);
    return (
        <section className='bg-blue-100 py-5 mt-5'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            About <span className="text-[#00A6FF]">Us</span>
                        </h2>
                        <p className="text-md lg:text-lg text-gray-600 max-w-3xl mx">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                        </p>
                        {/* <button
                            onClick={() => setCtaModalOpen(true)}
                            type='button' className="btn free-consultant-btn px-10 py-4 rounded-xl bg-gradient-to-r from-[#00A6FF] to-[#00A6FF] bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-out mt-3">
                            Book Free Consultant
                        </button> */}
                        <motion.button
                            onClick={() => setCtaModalOpen(true)}
                            type="button"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(0, 166, 255, 0.6)",
                                backgroundPosition: "100% 0"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="btn free-consultant-btn px-10 py-4 mt-3 rounded-xl cursor-pointer
             bg-gradient-to-r from-[#00A6FF] to-[#00A6FF] 
             bg-[length:200%_100%] hover:bg-[length:100%_100%] 
             text-white font-semibold text-lg tracking-wide 
             transition-all duration-500 ease-out"
                        >
                            Book Free Consultant
                        </motion.button>

                        {/* <button
                            onClick={() => setCtaModalOpen(true)}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(137, 207, 240, 0.6)",
                                backgroundPosition: "100% 0",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                duration: 0.3,
                            }}
                            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#00A6FF] to-[#00A6FF] bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-out"
                        >
                            Get Started
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                &rarr;
                            </span>
                        </button> */}
                    </div>
                    <div>
                        <img src={about} alt="" className="img-fluid img-rounded" />
                    </div>
                </div>
            </div>
            {/* cta modal section */}
            {ctaModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h2>
                        <form className="space-y-4">
                            <input
                                placeholder="Name"
                                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                                type="text"
                            />
                            <input
                                placeholder="Phone"
                                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                                type="tel"
                            />
                            <input
                                placeholder="Email"
                                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                                type="email"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00A6FF] focus:border-transparent transition-all"
                            >
                            </textarea>
                            <div className="flex gap-3 justify-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#00A6FF] text-white rounded hover:bg-[#00A6FF]"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCtaModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* End cta modal section */}
        </section>

    )
}

export default About