import React, { useState } from "react";
import { FaUser, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const AuthPage = () => {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100">

            {/* ==== card === */}

            <div className="relative w-[90%] max-w-[900px]  sm:h-[480px] overflow-hidden rounded-[95px] shadow-lg flex flex-col sm:flex-row">

                {/* ================= SIGNUP FORM ================= */}

                <div className={`bg-purple-200 w-full sm:w-2/4 flex flex-col gap-3 p-6 justify-center transition-all duration-700 ${isLogin ? "translate-x-full opacity-0" : ""}`}>

                    <h1 className="font-bold text-2xl text-center sm:pt-6">
                        Registration
                    </h1>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-purple-500 focus:outline-none focus:border-purple-500 hover:border-black"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-purple-500">
                            <FaUser />
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-purple-500 focus:outline-none focus:border-purple-500 hover:border-black"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <MdEmail />
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-purple-500 focus:outline-none focus:border-purple-500 hover:border-black"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <RiLockPasswordFill />
                        </span>
                    </div>

                    <button className="bg-purple-500 rounded-lg py-2 text-white font-semibold">
                        Register
                    </button>

                    <p className="text-center font-semibold">
                        or register with social platforms
                    </p>

                    <div className='flex justify-center gap-6 '>
                        <a className='p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:bg-purple-300 transition-all text-gray-600 '>
                            <FaGoogle />
                        </a>
                        <a className='p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all text-gray-600 '>
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>

                {/* ================= LOGIN FORM ================= */}

                <div className={`bg-blue-200 w-full sm:w-2/4 flex flex-col gap-4 p-6 justify-center transition-all duration-700 z-10 ${isLogin ? "" : "sm:translate-x-full opacity-0 "}`}>
                    <h1 className="font-bold text-2xl sm:text-4xl text-center mb-2">
                        Login
                    </h1>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-blue-500 focus:outline-none focus:border-purple-500 hover:border-black"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <FaUser />
                        </span>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-blue-500 focus:outline-none focus:border-purple-500 hover:border-black"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                            <RiLockPasswordFill />
                        </span>
                    </div>

                    <button className="bg-blue-500 rounded-lg py-2 text-white font-semibold">
                        Login
                    </button>

                    <p className="text-center font-semibold">
                        or Login with social platforms
                    </p>

                    <div className='flex justify-center gap-6  '>
                        <a className="flex items-center justify-center p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:bg-purple-300 transition-all text-gray-600">                            <FaGoogle />
                        </a>
                        <a className='p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-md  transition-all text-gray-600 '>
                            <FaLinkedinIn />
                        </a>
                    </div>


                </div>


                {/* ================= SLIDING PANEL ================= */}

                <div
                    className={`
          absolute  sm:w-2/4 w-full h-[200px] sm:h-full
          bg-purple-600 text-white flex flex-col items-center justify-center
          transition-[left] duration-700
          
          ${isLogin
                            ? "sm:left-0 "
                            : "sm:left-1/2 "}
          `}
                >

                    {!isLogin ? (
                        <>
                            <h1 className="text-2xl lg:text-3xl font-bold">
                                Welcome Back!
                            </h1>

                            <p className="pb-2">
                                Already have an account?
                            </p>

                            <button
                                onClick={() => setIsLogin(true)}
                                className="border border-white rounded-xl px-8 py-2 hover:scale-105 transition"
                            >
                                Login
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className="font-bold text-2xl lg:text-3xl">
                                Hello, Welcome!
                            </h1>

                            <p className="pb-2">
                                Don't have an account?
                            </p>

                            <button
                                onClick={() => setIsLogin(false)}
                                className="border border-white rounded-xl px-8 py-2 hover:scale-105 transition"
                            >
                                Register
                            </button>
                        </>
                    )}

                </div>

            </div>

        </div >
    );
};

export default AuthPage;