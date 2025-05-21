import { section } from 'framer-motion/client'
import React from 'react'

function About() {
    return (
        <section className='bg-skyblue py-5 mt-5'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            About <span className="text-blue-500">Us</span>
                        </h2>
                        <p className="text-xl lg:text-lg text-gray-600 max-w-3xl mx">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut maxime error distinctio delectus vitae possimus beatae, sint dignissimos? Eum repellat aliquam, praesentium quibusdam perspiciatis excepturi eos doloribus adipisci pariatur accusamus?
                        </p>
                        <button className="btn free-consultant-btn mt-3">
                            Book Free Consultant
                        </button>
                    </div>
                    <div>
                        <img src="/Assets/about.jpg" alt="" className="img-fluid img-rounded" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About