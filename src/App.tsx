import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, MapPin, MessageCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

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
// --- Components ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 glass border-b-0 border-white/5 transition-all duration-300 py-4 ${scrolled ? "shadow-lg shadow-purple-900/20" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight"
        >
          Dev<span className="text-white">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {["Home", "Works", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white hover:text-glow transition"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all transform hover:scale-105"
          >
            Hire me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10 mt-4 absolute w-full left-0 flex flex-col px-6 py-4 space-y-4 shadow-xl"
        >
          {["Home", "Works", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const typingText = useTypewriter([
    "Web Developer",
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
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm a <br />
              <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {typingText}
                <span className="animate-pulse text-pink-500">|</span>
              </span>
            </h1>
            {/* <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm a <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {typingText}
                <span className="animate-pulse text-pink-500">|</span>
              </span>
            </h1> */}
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
              {/* Generative Badge */}
              <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] cursor-default transition-all">
                Gen AI
              </span>

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
            </div>
          </div>
        </motion.div>

        {/* Right Image (Floating Animation) */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] m-auto z-0"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 p-2 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)] backdrop-blur-md"
          >
            <img
              src="/images/nausheen.jpg"
              alt="Profile"
              className="rounded-full object-contain w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-white border-4 border-slate-900 shadow-inner"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const projects = [
    {
      title: "AI Analytics Dashboard",
      color: "purple",
      img: "AI+Dashboard",
      tags: ["Next JS", "Gen AI", "Tailwind"],
    },
    {
      title: "Microservices E-Commerce API",
      color: "blue",
      img: "E-Commerce+API",
      tags: ["Node", "Kafka", "PostgreSQL"],
    },
    {
      title: "Real-time Task Manager",
      color: "pink",
      img: "Task+Manager",
      tags: ["React", "MongoDB", "AWS"],
    },
  ];

  return (
    <section id="works" className="py-12 px-10 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 inline-block mb-4">
            Featured Works
          </h2>
          <p className="text-gray-400 mx-auto text-lg">
            A selection of recent projects built with modern technologies
            focusing on performance and UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-90">
                <div
                  className={`absolute inset-0 bg-${proj.color}-500/20 group-hover:bg-transparent transition duration-300 z-10`}
                ></div>
                <img
                  src={`/images/tab-image-${idx}.png`}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 text-white group-hover:text-${proj.color}-400 transition`}
                >
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  An enterprise-grade application ensuring seamless data flow,
                  scalable architecture, and premium user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="resume" className="py-12 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-cyan-500 inline-block mb-4">
            Resume & Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and educational background.
          </p>
        </div>

        <div className="space-y-12 border-l-2 border-purple-500/50 pl-6 md:pl-10 relative">
          {[
            {
              year: "2022 - Present",
              title: "Senior Full Stack Developer",
              company: "TechNova Solutions",
              color: "purple",
            },
            {
              year: "2019 - 2022",
              title: "Frontend Web Developer",
              company: "Creative Web Agency",
              color: "blue",
            },
            {
              year: "2015 - 2019",
              title: "Bachelor of Computer Science",
              company: "University of Technology",
              color: "pink",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-${item.color}-500 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${item.color}-500`}
              ></div>
              <div className="glass-card p-6 rounded-xl">
                <span
                  className={`text-${item.color}-400 font-semibold text-sm tracking-wider uppercase mb-1 block`}
                >
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3 font-medium">
                  {item.company}
                </p>
                <p className="text-gray-400 text-sm">
                  Contributed to high-level architectural decisions, managed
                  complex deployments, and consistently delivered pixel-perfect
                  interfaces.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ contactUs, loading, setLoading }: any) => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 inline-block mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs a technical mastermind or just want
            to say hi, my inbox is open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">
                  siddiqui.techsunset@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">New Delhi, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <form className="space-y-5" onSubmit={contactUs}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
            ></textarea>
            <button className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-1">
              {loading ? "Sending msg..." : "Connect Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(false);

  const contactUs = () => {
    console.log("contact from app");
    // setLoading(true);
    // setTimeout(() => {
    //   toast("Your message sent ");
    //   setLoading(false);
    // }, 500);
  };

  const notify = () => toast("Wow so easy!");

  const phoneNumber = "917376147918"; // Replace with your WhatsApp number
  const message =
    "Hello Nausheen, I visited your portfolio and would like to connect.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="antialiased pb-20 md:pb-0 font-sans">
      {/* Ambient Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <Hero />
      <Works />
      <Experience />
      <Contact
        contactUs={contactUs}
        loading={loading}
        setLoading={setLoading}
      />

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>
          &copy; {new Date().getFullYear()} Nausheen Siddiqui. All rights
          reserved.
        </p>
      </footer>

      {/* Floating CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-green-500 text-white rounded-full items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all z-50"
      >
        {/* <MessageCircle size={24} /> */}
        <i className="ri-whatsapp-line text-5xl"></i>
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="md:hidden flex justify-center items-center fixed bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl z-50 shadow-[0_-5px_25px_rgba(168,85,247,0.7)] pb-6 pt-4 animate-pulse uppercase tracking-wider"
      >
        <MessageCircle className="mr-2" /> Hire Me
      </a>
      <ToastContainer />
    </div>
  );
}
