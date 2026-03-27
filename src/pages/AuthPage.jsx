import React, { useState } from "react";
import { FaUser, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // ✅ added

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate(); // ✅ added

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-4">

            {/* ==== Card Container ==== */}
            <div className="relative w-[85%] sm:w-[90%] max-w-[900px] sm:h-[480px] overflow-hidden rounded-[40px] sm:rounded-4xl shadow-xl flex flex-col sm:flex-row bg-white">

                {/* ================= SIGNUP FORM ================= */}
                <div className={`bg-white w-full sm:w-2/4 flex flex-col gap-3 p-6 justify-center transition-all duration-500 sm:duration-700
                    ${isLogin
                        ? "opacity-0 pointer-events-none sm:translate-x-full sm:z-0"
                        : "opacity-100 z-10 delay-100 sm:delay-0"}`}>

                    <h1 className="font-bold text-2xl text-center mt-[190px] sm:mt-0">Registration</h1>

                    <div className="relative">
                        <input type="text" placeholder="Username" className="bg-gray-200 rounded-xl px-4 py-2.5 w-full border-2 border-purple-500 focus:outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500">
                            <FaUser />
                        </span>
                    </div>

                    <div className="relative">
                        <input type="email" placeholder="Email" className="bg-gray-200 rounded-xl px-4 py-2.5 w-full border-2 border-purple-500 focus:outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <MdEmail />
                        </span>
                    </div>

                    <div className="relative">
                        <input type="password" placeholder="Password" className="bg-gray-200 rounded-xl px-4 py-2.5 w-full border-2 border-purple-500 focus:outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <RiLockPasswordFill />
                        </span>
                    </div>

                    {/* ✅ FIXED BUTTON */}
                    <button
                        onClick={() => navigate("/candidate/dashboard")}
                        className="bg-purple-500 rounded-lg py-2 text-white font-semibold hover:bg-purple-600 transition-colors"
                    >
                        Register
                    </button>

                    <div className='flex justify-center gap-4 mt-2'>
                        <button className='p-3 border rounded-xl shadow-sm hover:bg-gray-50'>
                            <FaGoogle />
                        </button>
                        <button className='p-3 border rounded-xl shadow-sm hover:bg-gray-50'>
                            <FaLinkedinIn />
                        </button>
                    </div>

                </div>

                {/* ================= LOGIN FORM ================= */}
                <div className={`absolute sm:relative bg-white w-full sm:w-2/4 h-full flex flex-col gap-4 p-6 justify-center transition-all duration-500 sm:duration-700
                    ${isLogin
                        ? "opacity-100 z-10 delay-100 sm:delay-0"
                        : "opacity-0 pointer-events-none sm:translate-x-full sm:z-0"}`}>

                    <h1 className="font-bold text-2xl sm:text-4xl text-center mb-2 mt-[160px] sm:mt-0">
                        Login
                    </h1>

                    <div className="relative">
                        <input type="text" placeholder="Username" className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-blue-500 focus:outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <FaUser />
                        </span>
                    </div>

                    <div className="relative">
                        <input type="password" placeholder="Password" className="bg-gray-200 rounded-xl px-4 py-3 w-full border-2 border-blue-500 focus:outline-none" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <RiLockPasswordFill />
                        </span>
                    </div>

                    {/* ✅ FIXED BUTTON */}
                    <button
                        onClick={() => navigate("/candidate/dashboard")}
                        className="bg-blue-500 rounded-lg py-2 text-white font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>

                    <div className='flex justify-center gap-6'>
                        <button className='p-4 border rounded-xl shadow-sm hover:bg-gray-50'>
                            <FaGoogle />
                        </button>
                        <button className='p-4 border rounded-xl shadow-sm hover:bg-gray-50'>
                            <FaLinkedinIn />
                        </button>
                    </div>

                </div>

                {/* ================= SLIDING PANEL ================= */}
                <div className={`absolute w-full sm:w-2/4 h-[200px] sm:h-full bg-purple-600 text-white flex flex-col items-center justify-center sm:transition-[left] duration-700 z-20 top-0 rounded-b-[95px] sm:rounded-b-none
                    ${isLogin
                        ? "sm:left-0 sm:rounded-tr-[95px] sm:rounded-br-[95px]"
                        : "sm:left-1/2 sm:rounded-tl-[95px] sm:rounded-bl-[95px]"}`}>

                    <h1 className="text-2xl font-bold">
                        {isLogin ? "Hello, Welcome!" : "Welcome Back!"}
                    </h1>

                    <p className="text-sm mb-2">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </p>

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="border-2 border-white rounded-xl px-8 py-1.5 hover:scale-105 transition font-bold"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default AuthPage;