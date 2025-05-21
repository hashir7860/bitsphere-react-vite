import React from 'react'
import CountUp from 'react-countup';

function Counter() {
    return (
        <section className='py-5 counter-bg section-margin'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-5 my-5">
                <div class="grid grid-cols-1 md:grid-cols-2 py-5 lg:grid-cols-4 gap-4 place-items-center">
                    <div className='text-center'>
                        <h2 className="text-5xl font-bold mb-4 text-white">
                            <CountUp end={47} suffix="+" />
                        </h2>
                        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-white">Years of Experience</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className="text-5xl font-bold mb-4 text-white">
                            <CountUp end={470} suffix="+" />
                        </h2>
                        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-white">Happy Client</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className="text-5xl font-bold mb-4 text-white">
                            <CountUp end={150} suffix="+" />
                        </h2>
                        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-white">Employees</h2>
                    </div>
                    <div className='text-center'>
                        <h2 className="text-5xl font-bold mb-4 text-white">
                            <CountUp end={15} suffix="+" />
                        </h2>
                        <h2 className="text-4xl lg:text-2xl font-bold mb-4 text-white">Offices</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter