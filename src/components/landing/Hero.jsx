"use client";

import { Play, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen pt-24 pb-10 overflow-hidden"
        >

            {/* 🔥 SPLINE BACKGROUND */}
            <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-DwnBjWtm4SOGH4AnkWsIJll7/"
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>

            {/* 🔥 DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* 🔥 CONTENT */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm mb-6">
                    <Sparkles size={16} />
                    AI-Powered Recruitment
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    AI Powered Smart{" "}
                    <span className="text-blue-400">Hiring Platform</span>
                </h1>

                <p className="text-gray-200 mb-8">
                    Automate screening, conduct AI interviews, and hire smarter.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700">
                        Get Started
                        <ArrowRight size={16} />
                    </button>

                    <button className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200">
                        <Play size={16} />
                        Watch Demo
                    </button>
                </div>

                {/* STATS */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-blue-400" size={16} />
                        90% faster hiring
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-blue-400" size={16} />
                        AI-driven insights
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-blue-400" size={16} />
                        Unbiased evaluation
                    </div>
                </div>

            </div>
        </section>
    );
}