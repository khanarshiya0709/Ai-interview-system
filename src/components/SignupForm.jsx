import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignupForm = () => {
    return (
        <div className='bg-purple-100'>
            <div className='max-w-2xl mx-auto lg:max-w-5xl min-h-screen flex items-center justify-center '>

                {/* Card */}
                <div className='bg-purple-200  rounded-b-[95px] rounded-2xl shadow-lg flex flex-col sm:flex-row  w-[85%] max-w-[850px] sm:w-[90%] max-w-[900px] sm:h-[480px]'>

                    {/* Left panel */}
                    <div className='w-full sm:w-2/4 flex flex-col gap-3 sm:gap-4  sm:ml-4 p-5 sm:p-4  order-2 sm:order-1'>

                        <h1 className='font-bold text-2xl text-center mb-2'>
                            Registration
                        </h1>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-pink-500 focus:outline-none focus:border-purple-500"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-purple-500">
                                <FaUser />
                            </span>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-200 rounded-xl px-4 py-3 w-full"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                                <MdEmail />
                            </span>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-gray-200 rounded-xl px-4 py-3 w-full"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                                <RiLockPasswordFill />
                            </span>
                        </div>

                        <a className='bg-purple-500 rounded-lg py-2 text-white font-semibold text-lg text-center'>
                            Register
                        </a>

                        <p className='text-center font-semibold '>
                            or register with social platforms
                        </p>

                        <div className='flex justify-center gap-6 '>
                            <a className='border border-black rounded-lg py-3 px-4'>
                                <FaGoogle />
                            </a>
                            <a className='border border-black rounded-lg py-3 px-4'>
                                <FaLinkedinIn />
                            </a>
                        </div>

                    </div>

                    {/* Right panel */}
                    <div className='bg-purple-600 text-white flex flex-col items-center justify-center w-full sm:w-2/4 sm:gap-2  py-2  rounded-b-[95px] sm:rounded-l-[95px] sm:rounded-r-2xl  order-1 sm:order-2'>

                        <h1 className='text-2xl lg:text-3xl font-bold mt-2 sm:mt-0'>
                            Welcome Back!
                        </h1>

                        <p className='pb-2'>
                            Already have an account?
                        </p>

                        <a className='border border-white rounded-xl px-8 py-2 hover:scale-105 transition mb-2 sm:mb-0'>
                            Login
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupForm;