"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
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
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                <div
                    className={`relative bg-blue-600 rounded-3xl p-10 sm:p-14 text-center text-white transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    {/* Background glow */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">

                        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                            <Sparkles size={16} />
                            Start Your Journey
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Start Hiring Smarter Today
                        </h2>

                        <p className="text-white/80 mb-8">
                            Transform your hiring process with AI and find the best candidates faster.
                        </p>

                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-200 transition">
                            Get Started
                            <ArrowRight size={16} />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}