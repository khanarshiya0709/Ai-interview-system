import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";






const SignupForm = () => {
    return (
        <div className='bg-blue-100'>
            <div className='  max-w-2xl mx-auto lg:max-w-5xl mx-auto   min-h-screen flex items-center justify-center'>
                <div className='bg-blue-200 rounded-2xl  shadow-lg flex w-[90%] max-w-[900px] h-[480px]'>


                    {/*left panel*/}
                    <div className='bg-blue-600  h-full rounded-r-[95px]  rounded-l-2xl text-white flex flex-col items-center justify-center w-2/4 gap-2 '>
                        <h1 className='font-bold  text-2xl lg:text-3xl font-bold '>
                            Hello, Welcom!
                        </h1>
                        <p className='pb-2'>
                            Don't have an account?
                        </p>
                        <a className='border border-white rounded-xl  px-8  py-2 hover:scale-105 transition '>
                            Register
                        </a>
                    </div>


                    {/*right panel */}
                    <div className='w-2/4 flex flex-col gap-4  p-4 justify-center '>
                        <h1 className='font-bold text-2xl sm:text-4xl text-center mb-2'>
                            Login
                        </h1>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="bg-gray-200 rounded-xl px-4 py-3  w-full border-2 border-blue-500  focus:outline-none focus:border-pink-500   "
                            />

                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                                <FaUser />

                            </span>
                        </div>

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-gray-200 rounded-xl px-4 py-3  w-full"
                            />

                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                                <RiLockPasswordFill />

                            </span>
                        </div>


                        <a className=' bg-blue-500  rounded-lg py-2 text-white font-semibold text-lg text-center items-center'>
                            Login
                        </a>
                        <p className='items-center text-center font-semibold'>
                            or Login with social platforms
                        </p>
                        <div className='flex flex-row justify-center gap-6'>
                            <a className='border border-black rounded-lg py-3 px-4 '>
                                <FaGoogle />
                            </a>
                            <a className='border border-black rounded-lg py-3 px-4 '>
                                <FaLinkedinIn />
                            </a>


                        </div>


                    </div>




                </div>

            </div>
        </div>
    )
}
export default SignupForm;
