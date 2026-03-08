import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";



const About = () => {
    return (
        <div className='max-w-5xl mx-auto   py-4'>

            <div>
                <h1 className='font-bold text-4xl pb-3 text-center tracking-tight'>
                    About Our Platform
                </h1>

                <p className='pb-4 text-center max-w-2xl mx-auto px-6 leading-relaxed '>
                    Empowering companies to hire smarter and faster through AI-driven recruitment automation. We streamline the hiring process, eliminate bias, and improve hiring accuracy for better talent acquisition.

                </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-6 px-6'>

                <div className=' w-full sm:w-1/2 h-[200px] bg-pink-300 rounded-xl shadow-lg p-6'>
                    <h1 className='text-2xl py-2 gap-2 items-center flex'>

                        <TbTargetArrow className='text-4xl' />
                        Our Mission
                    </h1>
                    <h3 className='font-bold pb-2'>Make Hiring Faster and Unbiased</h3>
                    <p>Automate screening and interviews to save time and ensure fair hiring. and blaaaaaaaaaaaaaaaaaaaaaaaa and blaa </p>
                </div>

                <div className='w-full sm:w-1/2 h-[200px] bg-blue-500 rounded-xl p-6'>
                    <h1 className='text-2xl py-2 flex gap-2 items-center'>
                        <IoIosRocket className='text-4xl' />

                        Our Mission
                    </h1>
                    <h3 className='font-bold pb-2'>Make Hiring Faster and Unbiased</h3>
                    <p>Automate screening and interviews to save time and ensure fair hiring. and blaaaaaaaaaaaaa and blaa ballala</p>
                </div>

            </div>
        </div>
    )
}

export default About;