import React from 'react'

function CallToAction() {
    return (
        <section className='bg-skyblue py-5 mt-5 section-padding'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                            Elevate your <span className="text-blue-500">Business</span> to the Next Level of Height!
                        </h2>
                        <p className="text-xl lg:text-lg text-gray-600 max-w-3xl mx">
                            Get in touch with our expert professionals to drive rapid online success.
                        </p>
                    </div>
                    <div className="flex justify-right text-right ">
                        <button className=" btn free-consultant-btn mt-3">
                            Shedule a meeting
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CallToAction