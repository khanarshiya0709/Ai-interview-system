import { useEffect, useState } from "react";

export default function Hero() {

    const fullText = "Automate screening, conduct AI interviews, hire smarter. arshiya you are the best i am very proud of you";

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(fullText.substring(0, index + 1));
                setIndex(index + 1);

                if (index + 1 === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setText(fullText.substring(0, index - 1));
                setIndex(index - 1);

                if (index - 1 === 0) {
                    setIsDeleting(false);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [index, isDeleting]);

    return (
        <section
            className="min-h-[90vh] bg-cover bg-center flex items-center
      bg-[url('background(phone1).jpg')]
      sm:bg-[url('background(hero).jpg')]"
        >
            <div className="max-w-5xl mx-auto w-full px-12">
                <div className="w-full sm:w-1/2 text-center sm:text-left">

                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                        AI Powered Smart Hiring Platform
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 ">
                        {text}
                    </p>

                    {/* FIXED BUTTON ALIGNMENT */}
                    <div className="flex justify-center sm:justify-start gap-6 mt-6">
                        <button className="px-8 py-2 rounded-full bg-gray-100 text-black border-2 border-transparent hover:border-purple-600 transition">
                            Get Started
                        </button>

                        <a
                            href="#"
                            className="px-8 py-3 rounded-full bg-black text-white  hover:scale-105 transition"
                        >
                            Watch Demo
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}