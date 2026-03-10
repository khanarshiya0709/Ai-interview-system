import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";






const SignupForm = () => {
    return (
        <div className=' max-w-2xl mx-auto lg:max-w-5xl mx-auto  min-h-screen flex items-center justify-center'>
            <div className='bg-purple-200 rounded-2xl  shadow-lg flex w-[90%] max-w-[900px] h-[480px]'>

                {/*left panel */}
                <div className='w-3/5 flex flex-col gap-4 p-6'>
                    <h1 className='font-bold text-2xl items-center text-center mb-2'>
                        Registration
                    </h1>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            className="bg-gray-200 rounded-xl px-4 py-3  w-full"
                        />

                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <FaUser />

                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-gray-200 rounded-xl px-4 py-3  w-full"
                        />

                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <MdEmail />

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


                    <a className=' bg-purple-500  rounded-lg py-2 text-white font-semibold text-lg text-center items-center'>
                        Register
                    </a>
                    <p className='items-center text-center font-semibold'>
                        or register with social platforms
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

                {/*right panel*/}
                <div className='bg-purple-600  h-full rounded-l-[95px]  rounded-r-2xl text-white flex flex-col items-center justify-center w-2/5 gap-2 '>
                    <h1 className='font-bold  text-2xl lg:text-3xl font-bold '>
                        Welcome Back!
                    </h1>
                    <p className='pb-2'>
                        Already have an account?
                    </p>
                    <a className='border border-white rounded-xl  px-8  py-2 hover:scale-105 transition '>
                        Login
                    </a>
                </div>



            </div>

        </div>
    )
}
export default SignupForm;
