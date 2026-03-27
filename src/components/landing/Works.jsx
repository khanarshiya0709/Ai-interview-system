"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, Brain, Trophy, FileText, Users, CheckCircle } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Upload,
        title: "Upload Resume / Create Job",
        description: "Post jobs and let candidates apply with resumes.",
    },
    {
        number: "02",
        icon: Brain,
        title: "AI Evaluates Candidates",
        description: "AI analyzes resumes, interviews, and skills.",
    },
    {
        number: "03",
        icon: Trophy,
        title: "Get Smart Results",
        description: "Get ranked candidates with detailed insights.",
    },
];

export default function Works() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="how-it-works" ref={sectionRef} className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* HEADER */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        How It Works
                    </span>
                    <h2 className="text-3xl font-bold mt-4 mb-4">
                        Simple Steps to Smart Hiring
                    </h2>
                    <p className="text-gray-600">
                        Start hiring smarter with AI in just a few steps.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div className="space-y-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = activeStep === index;

                            return (
                                <div
                                    key={step.number}
                                    onClick={() => setActiveStep(index)}
                                    className={`p-6 rounded-2xl cursor-pointer transition ${isActive ? "bg-white shadow-lg border" : "hover:bg-white"
                                        } ${isVisible ? "opacity-100" : "opacity-0"}`}
                                >
                                    <div className="flex gap-4">
                                        <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-blue-600"
                                            }`}>
                                            <Icon />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Step {step.number}</p>
                                            <h3 className="text-lg font-semibold">{step.title}</h3>
                                            <p className="text-sm text-gray-500">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}>

                        <div className="bg-white p-8 rounded-3xl shadow-xl border">

                            {activeStep === 0 && (
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg">Job Creation</h4>
                                    <p className="text-gray-500">Create and manage jobs easily.</p>
                                </div>
                            )}

                            {activeStep === 1 && (
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg">AI Analysis</h4>
                                    <p className="text-gray-500">AI processes and evaluates candidates.</p>
                                </div>
                            )}

                            {activeStep === 2 && (
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg">Top Candidates</h4>
                                    <p className="text-gray-500">Get best ranked candidates instantly.</p>
                                </div>
                            )}

                        </div>

                        {/* Badge */}
                        <div className="absolute mt-4 right-0 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                            AI Powered
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}