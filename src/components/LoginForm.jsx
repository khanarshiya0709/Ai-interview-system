import React from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='bg-blue-100'>
            <div className='max-w-2xl mx-auto lg:max-w-5xl min-h-screen flex items-center justify-center'>

                {/* Card */}
                <div className='bg-blue-200 rounded-t-[95px] rounded-b-[95px] shadow-lg flex flex-col sm:flex-row w-[85%] sm:w-[90%] max-w-[900px] sm:h-[480px]'>

                    {/* Blue panel */}
                    <div className='bg-blue-600 text-white flex flex-col items-center justify-center w-full sm:w-2/4 gap-2 py-6 rounded-t-[95px] rounded-b-[95px] sm:rounded-r-[95px] sm:rounded-l-2xl'>

                        <h1 className='font-bold text-2xl lg:text-3xl'>
                            Hello, Welcome!
                        </h1>

                        <p className='pb-2'>
                            Don't have an account?
                        </p>

                        <a className='border border-white rounded-xl px-8 py-2 hover:scale-105 transition'>
                            Register
                        </a>

                    </div>


                    {/* Login form */}
                    <div className='w-full sm:w-2/4 flex flex-col gap-4 p-6 justify-center'>

                        <h1 className='font-bold text-2xl sm:text-4xl text-center mb-2'>
                            Login
                        </h1>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-blue-500 focus:outline-none focus:border-pink-500"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                                <FaUser />
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

                        <a className='bg-blue-500 rounded-lg py-2 text-white font-semibold text-lg text-center'>
                            Login
                        </a>

                        <p className='text-center font-semibold'>
                            or Login with social platforms
                        </p>

                        <div className='flex justify-center gap-6'>
                            <a className='border border-black rounded-lg py-3 px-4'>
                                <FaGoogle />
                            </a>
                            <a className='bg-blue-300 rounded-lg py-3 px-4 hover:scale-105 shadow-lg'>
                                <FaLinkedinIn />
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginForm;