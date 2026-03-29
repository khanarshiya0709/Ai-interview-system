import React, { useState } from "react";
import { FaUser, FaGoogle, FaLinkedinIn, FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    // Changed to async to support the DB fetch call
    const handleSignup = async (e) => {
        e.preventDefault();

        const form = e.target;
        const username = form[0].value;
        const email = form[1].value;
        const password = form[2].value;

        const userData = {
            username,
            email,
            password,
            role,
        };

        // Debugging logs
        console.log("Selected Role:", role);
        console.log("Signup Data before saving:", userData);

        try {
            // ✅ API call to save in Database
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // Also saving to localStorage for local session management
                localStorage.setItem("user", JSON.stringify(userData));

                // Redirect logic
                if (role === "hr") {
                    navigate("/hr/dashboard");
                } else {
                    navigate("/candidate/dashboard");
                }
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Server error. Please make sure your backend is running on localhost:5000");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const identifier = form[0].value; // Email or Username
        const password = form[1].value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No user found. Please sign up first.");
            return;
        }

        if ((identifier === storedUser.email || identifier === storedUser.username) && password === storedUser.password) {
            console.log("Login successful for role:", storedUser.role);

            if (storedUser.role === "hr") {
                navigate("/hr/dashboard");
            } else {
                navigate("/candidate/dashboard");
            }
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-slate-900">

            {/* ==== Main Card Container ==== */}
            <div className="relative w-[85%] sm:w-[90%] max-w-[900px] sm:h-[540px] overflow-hidden rounded-[32px] shadow-2xl flex flex-col sm:flex-row bg-white border border-slate-200">

                {/* ================= SIGNUP FORM ================= */}
                <form
                    onSubmit={handleSignup}
                    className={`bg-white w-full sm:w-2/4 flex flex-col gap-3 p-8 justify-center transition-all duration-700
                    ${isLogin
                            ? "opacity-0 pointer-events-none sm:translate-x-full sm:z-0"
                            : "opacity-100 z-10 delay-100 sm:delay-0"}`}>

                    <div className="text-center space-y-1">
                        <h1 className="font-bold text-3xl tracking-tight text-slate-800 mt-[190px] sm:mt-0">Create Account</h1>
                        <p className="text-slate-500 text-sm">Start your journey with us</p>
                    </div>

                    <div className="space-y-2 mt-2">
                        <div className="relative">
                            <input required type="text" placeholder="Username" className="bg-slate-50 rounded-xl px-4 py-2.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <FaUser />
                            </span>
                        </div>

                        <div className="relative">
                            <input required type="email" placeholder="Email" className="bg-slate-50 rounded-xl px-4 py-2.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <MdEmail />
                            </span>
                        </div>

                        <div className="relative">
                            <input required minLength={6} type="password" placeholder="Password" className="bg-slate-50 rounded-xl px-4 py-2.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <RiLockPasswordFill />
                            </span>
                        </div>

                        {/* ✅ ROLE SELECTION DROPDOWN */}
                        <div className="relative">
                            <select
                                required
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="bg-slate-50 rounded-xl px-4 py-2.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none text-slate-500 cursor-pointer"
                            >
                                <option value="" disabled>Select Role</option>
                                <option value="candidate">Candidate</option>
                                <option value="hr">HR / Recruiter</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                <FaBriefcase />
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 shadow-lg shadow-blue-200 rounded-xl py-2.5 text-white font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all mt-2"
                    >
                        Register Now
                    </button>

                    <div className="flex items-center my-1">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="px-3 text-[10px] text-slate-400 uppercase font-bold tracking-widest">Social Signup</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <div className='flex justify-center gap-4'>
                        <button type="button" className='flex-1 py-2 border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex justify-center text-slate-600'>
                            <FaGoogle size={16} />
                        </button>
                        <button type="button" className='flex-1 py-2 border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex justify-center text-slate-600'>
                            <FaLinkedinIn size={16} />
                        </button>
                    </div>
                </form>

                {/* ================= LOGIN FORM ================= */}
                <form
                    onSubmit={handleLogin}
                    className={`absolute sm:relative bg-white w-full sm:w-2/4 h-full flex flex-col gap-5 p-8 justify-center transition-all duration-700
                    ${isLogin
                            ? "opacity-100 z-10 delay-100 sm:delay-0"
                            : "opacity-0 pointer-events-none sm:translate-x-full sm:z-0"}`}>

                    <div className="text-center space-y-1">
                        <h1 className="font-bold text-3xl tracking-tight text-slate-800 mb-1 mt-[160px] sm:mt-0">
                            Welcome Back
                        </h1>
                        <p className="text-slate-500 text-sm">Please enter your credentials</p>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input required type="text" placeholder="Email or Username" className="bg-slate-50 rounded-xl px-4 py-3.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <FaUser />
                            </span>
                        </div>

                        <div className="relative">
                            <input required type="password" placeholder="Password" className="bg-slate-50 rounded-xl px-4 py-3.5 w-full border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <RiLockPasswordFill />
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center -mt-2">
                        <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-all">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 shadow-lg shadow-blue-200 rounded-xl py-3 text-white font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
                    >
                        Sign In
                    </button>

                    <div className="flex items-center my-1">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="px-3 text-[10px] text-slate-400 uppercase font-bold tracking-widest">Or login with</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <div className='flex justify-center gap-4'>
                        <button type="button" className='flex-1 py-3 border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex justify-center text-slate-600'>
                            <FaGoogle size={20} />
                        </button>
                        <button type="button" className='flex-1 py-3 border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex justify-center text-slate-600'>
                            <FaLinkedinIn size={20} />
                        </button>
                    </div>

                </form>

                {/* ================= SLIDING PANEL ================= */}
                <div className={`absolute w-full sm:w-2/4 h-[200px] sm:h-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex flex-col items-center justify-center sm:transition-[left,border-radius] duration-700 z-20 top-0 rounded-b-[60px] sm:rounded-b-none shadow-2xl
                    ${isLogin
                        ? "sm:left-0 sm:rounded-tr-[100px] sm:rounded-br-[100px]"
                        : "sm:left-1/2 sm:rounded-tl-[100px] sm:rounded-bl-[100px]"}`}>

                    <div className="relative z-10 flex flex-col items-center p-8 text-center">
                        <h1 className="text-3xl font-bold mb-3 tracking-tight text-white">
                            {isLogin ? "Hello, Friend!" : "Welcome Back!"}
                        </h1>

                        <p className="text-blue-100 text-sm mb-8 max-w-[250px] leading-relaxed opacity-90">
                            {isLogin
                                ? "Enter your personal details and start your journey with us today."
                                : "To keep connected with us please login with your personal info."}
                        </p>

                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="bg-transparent border-2 border-white/60 rounded-xl px-12 py-2.5 hover:bg-white hover:text-blue-700 transition-all font-bold tracking-widest text-xs active:scale-95"
                        >
                            {isLogin ? "SIGN UP" : "SIGN IN"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;