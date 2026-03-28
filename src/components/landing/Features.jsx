"use client";

import { useEffect, useRef, useState } from "react";
import {
    FileSearch,
    Video,
    BarChart3,
    LayoutDashboard,
    HardDrive,
    Mail,
} from "lucide-react";

const features = [
    {
        icon: FileSearch,
        title: "AI CV Screening",
        description: "Automatically analyze and rank resumes based on job requirements using advanced Ai algorithms.",
    },
    {
        icon: Video,
        title: "AI Video Interview",
        description: "Conduct smart AI-based video interviews.",
    },
    {
        icon: BarChart3,
        title: "Smart Evaluation",
        description: "Get automatic candidate scoring.",
    },
    {
        icon: LayoutDashboard,
        title: "HR Dashboard",
        description: "Manage all candidates in one place.",
    },
    {
        icon: HardDrive,
        title: "Recording Storage",
        description: "Save interviews securely.",
    },
    {
        icon: Mail,
        title: "Email Automation",
        description: "Send automatic notifications.",
    },
];

export default function Features() {
    const [isVisible, setIsVisible] = useState(false);
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
        <section id="features" ref={sectionRef} className="py-6 bg-white">
            <div className="max-w-5xl mx-auto px-4">

                {/* HEADER */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}>
                    <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm">
                        Features
                    </span>

                    <h2 className="text-3xl font-bold mt-4 mb-4">
                        Everything You Need to Hire Smarter
                    </h2>

                    <p className="text-gray-600">
                        AI-powered tools to simplify your hiring process.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className={`p-6 bg-gray-90 rounded-2xl shadow hover:shadow-xl transition  group ${isVisible ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:bg-blue-500">
                                    <Icon
                                        className="text-blue-600 transition-all duration-300 group-hover:text-white"
                                        size={28}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-sm text-gray-500 mb-4">
                                    {feature.description}
                                </p>


                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}