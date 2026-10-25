import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- Custom Hook for Typing Effect ---
const useTypewriter = (
  words: string[],
  typingSpeed: number = 150,
  deletingSpeed: number = 100,
  pauseTime: number = 2000,
) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  let timeout: any;
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};
const Hero = () => {
  const typingText = useTypewriter([
    "MERN Developer",
    "Software Engineer",
    "Creative Coder",
  ]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 relative px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {/* Left Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div className="space-y-4">
            <p className="text-purple-400 font-medium tracking-wide uppercase text-sm">
              Welcome to my universe
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Hi, I'm a <br />
              <span className="whitespace-nowrap bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-cyan-500">
                {typingText}
                <span className="animate-pulse text-cyan-500">|</span>
              </span>
            </h1>

            <p className="text-gray-400 text-md md:text-medium max-w-lg leading-relaxed">
              I build premium, scalable, and responsive web applications
              blending cutting-edge design with robust engineering.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-800">
            <h3 className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-4">
              Core Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {/* Frontend Badges */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
                Javascript
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all">
                React
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.6)] transition-all">
                Tailwind
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-400/30 bg-gray-500/10 text-gray-200 hover:shadow-[0_0_15px_rgba(209,213,219,0.6)] transition-all">
                Next JS
              </span>

              {/* Backend Badges */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-green-500/30 bg-green-500/10 text-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all">
                Node
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-500/30 bg-gray-500/10 text-gray-300 hover:shadow-[0_0_15px_rgba(156,163,175,0.6)] transition-all">
                Express
              </span>

              {/* DevOps/Cloud Badges */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-orange-500/30 bg-orange-500/10 text-orange-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all">
                AWS Cloud
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-blue-600/30 bg-blue-600/10 text-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all">
                Docker
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-red-500/30 bg-red-500/10 text-red-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] transition-all">
                CI/CD
              </span>

              {/* Database/ORM Badges */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all">
                MongoDB
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30 bg-blue-400/10 text-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all">
                Postgresql
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-teal-500/30 bg-teal-500/10 text-teal-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] transition-all">
                ORM Prisma
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-red-600/30 bg-red-600/10 text-red-400 hover:shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-all">
                Redis
              </span>

              {/* Messaging Queues */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-slate-500/30 bg-slate-500/10 text-slate-300 hover:shadow-[0_0_15px_rgba(100,116,139,0.6)] transition-all">
                Kafka
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30 bg-orange-400/10 text-orange-300 hover:shadow-[0_0_15px_rgba(251,146,60,0.6)] transition-all">
                RabitMQ
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all">
                BullMQ
              </span>

              {/* Generative Badge */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-default transition-all">
                Gen AI
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Image (Floating Animation) */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse w-[320px] h-80 sm:w-105 sm:h-105 m-auto z-0"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 p-2 rounded-full bg-linear-to-b from-white/10 to-transparent border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-md"
          >
            <img
              src="/images/nausheen.jpg"
              alt="Profile"
              className="rounded-full object-contain w-70 h-70 sm:w-100 sm:h-100 bg-white border-4 border-slate-900 shadow-inner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
