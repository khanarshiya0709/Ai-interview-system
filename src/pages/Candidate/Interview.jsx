import { useState, useEffect } from "react";
import { Video, Clock, AlertCircle, Play } from "lucide-react"; // Icons for better UI
import { Button } from "../../components/ui/button"; // Using your UI component
import { useNavigate } from "react-router-dom";


const Interview = () => {
    const [canStart, setCanStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5); // Countdown state
    const navigate = useNavigate();


    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setCanStart(true);
        }
    }, [timeLeft]);

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-2xl mx-auto">

            <div className="flex items-center gap-3">
                <Video className="w-6 h-6 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-900">AI Interview Session</h1>
            </div>

            {/* Interview Card */}
            <div className={`bg-white p-8 rounded-2xl shadow-sm border-2 transition-all duration-500 ${canStart ? "border-blue-500 shadow-blue-50" : "border-slate-100"}`}>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${canStart ? "bg-green-400" : "bg-blue-400"}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${canStart ? "bg-green-500" : "bg-blue-500"}`}></span>
                            </span>
                            Interview Scheduled
                        </h2>
                        {canStart && (
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">LIVE NOW</span>
                        )}
                    </div>

                    <p className="text-slate-500 leading-relaxed">
                        Your CV has been approved for the <span className="font-semibold text-slate-700">Senior React Developer</span> position. Please ensure your camera and microphone are working.
                    </p>

                    <div className="flex flex-wrap gap-4 py-2">
                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                            <Clock className="w-4 h-4" />
                            <span>10 Minutes</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                            <AlertCircle className="w-4 h-4" />
                            <span>5 Questions</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        disabled={!canStart}
                        className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg 
                        ${canStart
                                ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200 active:scale-[0.98]"
                                : "bg-slate-300 cursor-not-allowed shadow-none"}`}
                    >
                        {canStart ? (
                            <>

                                <Button
                                    className="w-full py-4 rounded-xl font-bold text-white"
                                    onClick={() => navigate("/candidate/interview/start")}
                                >
                                    Start Interview
                                </Button>
                            </>
                        ) : (
                            `Starting in ${timeLeft}s...`
                        )}
                    </button>

                    {!canStart && (
                        <p className="text-center text-xs text-slate-400 italic">
                            The "Start" button will enable automatically when the timer reaches zero.
                        </p>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Interview;