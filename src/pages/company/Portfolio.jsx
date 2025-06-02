import React from 'react'
import { motion } from "framer-motion";
import { Users, Rocket, Globe, Award, Code, Heart, Shield, Clock } from "lucide-react";
import Projects from '../../components/Projects';
import CallToAction from '../../components/CallToAction';

function Portfolio() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section with Interactive Background */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="py-20 contact-hero mx-auto text-center relative overflow-hidden"
            >
                {/* Animated background elements */}
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
                        className="mb-6 inline-block bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-2 rounded-full backdrop-blur-sm border border-[#00A6FF]"
                    >
                        <p className="text-sm font-medium text-[#00A6FF]">Our Projects</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl text-white md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A6FF] to-[#00A6FF]">Portfolio</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-600 text-white max-w-3xl mx-auto leading-relaxed"
                    >
                        At Techbase, we put people and technology at the forefront of our business. Our team has deep experience in transforming ideas into highly successful and powerful technology solutions.
                    </motion.p>
                </motion.div>

            </motion.section>

            <Projects/>
            <CallToAction/>

            {/* <section className="section-margin section-padding">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5'>
                    <div class="grid grid-cols-1 md:grid-cols-2 py-5 lg:grid-cols-3 gap-4 place-items-center">
                        <div className='shadow'>
                            <img src="/Assets/portfolio-1.png" alt="" className="img-fluid portfolio-img" />
                            <h4 className='text-4xl lg:text-4xl font-bold mt-5'>
                                Portfolio
                            </h4>
                            <p>
                                The Stanford SpineKeeper app will provide data about your activity, fitness, and back pain. These results could certainly generate a wide range of emotions.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Portfolio