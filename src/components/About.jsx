import { section } from 'framer-motion/client'
import React from 'react'

function About() {
    return (
        <section className='bg-white py-5'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-5">
                <div className="row align-items-center">
                    {/* <div className="col-md-6 mt-3">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            About <span className="text-blue-500">Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </div> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-800">
                                About <span className="text-blue-500">Us</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx">
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About