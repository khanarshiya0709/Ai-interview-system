import React from 'react';

const features = () => {
    return (
        <div className='px-6 py-6'>

            {/* heading */}

            <div className='text-center'>
                <h1 className='text-4xl font-bold'>
                    Streamline your hiring process with AI

                </h1>
                <p className='mt-4'>
                    Find the best talent faster with our AI-driven recruitment tools.
                </p>
            </div>

            {/*Card */}
            <div className='max-w-4xl  mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6'>

                {/*single card */}
                <div className='p-4 bg-gray-200 rounded-2xl  text-center hover:scale-102 transition duration-300'>
                    <img
                        src="AI(CV)Screening.png"
                        alt="Ai cv image"
                        className="rounded-xl mx-auto mb-2"


                    />
                    <h2 className="text-xl font-semibold">
                        AI CV Screening
                    </h2>

                    <p className="mt-2 text-gray-500 ">
                        Automatically scan and filter CVs to identify top candidates.
                    </p>

                    <a href='#cv' className=" inline-block rounded-4xl py-2 px-6 bg-black mt-4 text-blue-600 font-medium hover:bg-gray-400 transition">
                        Learn More
                    </a>
                </div>

                {/*single card 2*/}
                <div className='p-4 bg-gray-200 rounded-2xl  text-center hover:scale-102 transition duration-300'>
                    <img
                        src="Ai(evaluation).png"
                        alt="Ai cv image"
                        className="rounded-xl mx-auto mb-2"


                    />
                    <h2 className="text-xl font-semibold">
                        AI CV Screening
                    </h2>

                    <p className="mt-2 text-gray-500 ">
                        Automatically scan and filter CVs to identify top candidates.
                    </p>

                    <a href='#email' className="inline-block rounded-4xl py-2 px-6 bg-black  mt-4 text-blue-600 font-medium hover:bg-gray-400 transition">
                        Learn More
                    </a>
                </div>


                {/*single card 3*/}

                <div className='p-4 bg-gray-200 rounded-2xl  text-center hover:scale-102 transition duration-300'>
                    <img
                        src="AI(email).png"
                        alt="Ai cv image"
                        className="rounded-xl mx-auto mb-2"


                    />
                    <h2 className="text-xl font-semibold">
                        AI CV Screening
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Automatically scan and filter CVs to identify top candidates.
                    </p>

                    <button className="rounded-4xl py-2 px-6 bg-black mt-4 text-blue-600 font-medium hover:bg-gray-400 transition">
                        Learn More
                    </button>
                </div>


                {/*single card4 */}

                <div className='p-4 bg-gray-200 rounded-2xl  text-center hover:scale-102 transition duration-300'>
                    <img
                        src="AI(recorder).png"
                        alt="Ai cv image"
                        className="rounded-xl mx-auto mb-2"


                    />
                    <h2 className="text-xl font-semibold">
                        AI CV Screening
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Automatically scan and filter CVs to identify top candidates.
                    </p>

                    <button className="rounded-4xl py-2 px-6 bg-black mt-4 text-blue-600 font-medium hover:bg-gray-400 transition">
                        Learn More
                    </button>
                </div>

                {/*single card5 */}

                <div className='p-4 bg-gray-200 rounded-2xl  text-center hover:scale-102 transition duration-300'>
                    <img
                        src="AI(CV)Screening.png"
                        alt="Ai cv image"
                        className="rounded-xl mx-auto mb-2"


                    />
                    <h2 className="text-xl font-semibold">
                        AI CV Screening
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Automatically scan and filter CVs to identify top candidates.
                    </p>

                    <button className="rounded-4xl py-2 px-6 bg-black mt-4 text-blue-600 font-medium hover:bg-gray-400 transition">
                        Learn More
                    </button>
                </div>

            </div>










        </div>


    )
}

export default features;