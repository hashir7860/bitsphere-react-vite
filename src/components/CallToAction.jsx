import React from 'react'

function CallToAction() {
    return (
        <section className='bg-red-50 py-5 mt-5 section-padding'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5">
                <div class=" place-items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">
                            Elevate your <span className="text-red-500">Business</span> to the Next Level of Height!
                        </h2>
                        <p className="text-xl lg:text-lg text-gray-600 text-center">
                            Get in touch with our expert professionals to drive rapid online success.
                        </p>
                    </div>
                    <div className="flex justify-right text-right mt-4">
                        <button className=" btn free-consultant-btn mt-3 px-10 py-4 rounded-xl bg-gradient-to-r from-red-400 to-red-600 bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-out">
                            Shedule a meeting
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CallToAction