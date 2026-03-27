"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Target, Shield, TrendingUp, Clock, Users } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "AI Automation",
        description: "Automate repetitive tasks and focus on what matters most - finding the best talent.",
    },
    {
        icon: Clock,
        title: "Faster Hiring",
        description: "Reduce time-to-hire by up to 90% with intelligent screening and evaluation.",
    },
    {
        icon: Target,
        title: "Better Decisions",
        description: "Make data-driven hiring decisions with AI insights.",
    },
];

const stats = [
    { value: "90%", label: "Faster Screening" },
    { value: "85%", label: "Better Matches" },
    { value: "60%", label: "Cost Reduction" },
    { value: "24/7", label: "AI Availability" },
];

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                        <div className="relative">

                            {/* MAIN CARD */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold">AI Interview System</h4>
                                        <p className="text-sm text-gray-500">Revolutionizing Recruitment</p>
                                    </div>
                                </div>

                                {/* STATS */}
                                <div className="grid grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={stat.label}
                                            className={`p-4 bg-gray-100 rounded-xl text-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                        >
                                            <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                                            <div className="text-xs text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FLOATING */}
                            <div className="absolute -top-6 -left-6 p-4 bg-white rounded-2xl shadow-lg border">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                                        <Shield className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Secure & Private</p>
                                        <p className="text-xs text-gray-500">Enterprise-grade</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-lg border">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                                        <Users className="text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">1000+ Hires</p>
                                        <p className="text-xs text-gray-500">Successfully made</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>

                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                            About Us
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Transforming Recruitment with AI
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            AI Hire helps companies automate hiring using AI, making recruitment faster, smarter, and unbiased.
                        </p>

                        {/* BENEFITS */}
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={benefit.title}
                                        className={`flex gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                            }`}
                                        style={{ transitionDelay: `${index * 100 + 400}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-xl">
                                            <Icon className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{benefit.title}</h3>
                                            <p className="text-sm text-gray-500">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}