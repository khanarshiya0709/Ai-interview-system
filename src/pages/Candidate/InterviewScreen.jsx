import { useState } from "react";

const InterviewScreen = () => {
    const [questionIndex, setQuestionIndex] = useState(1);

    const handleNext = () => {
        setQuestionIndex((prev) => prev + 1);
    };

    return (
        <div className="p-6">

            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-6">
                AI Interview in Progress
            </h1>

            {/* Main Card */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl shadow-lg p-6">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* LEFT - AI Question */}
                    <div className="bg-white/10 rounded-lg p-4 flex gap-4 items-start">
                        <img
                            src="https://i.pravatar.cc/100?img=5"
                            alt="AI"
                            className="w-16 h-16 rounded-full"
                        />

                        <p className="text-sm leading-relaxed">
                            <span className="font-semibold">AI Interviewer:</span>{" "}
                            Can you tell me about your experience with Python?
                        </p>
                    </div>

                    {/* RIGHT - Video */}
                    <div className="bg-black rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                            alt="video"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

                {/* Bottom Info */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">

                    <p className="text-sm">
                        Time Left: <span className="font-bold">00:58</span>
                    </p>

                    <p className="text-sm font-semibold">
                        Question {questionIndex} of 5
                    </p>

                    <p className="text-sm text-red-400 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Recording...
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleNext}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
                    >
                        NEXT QUESTION
                    </button>
                </div>

            </div>

        </div>
    );
};

export default InterviewScreen;