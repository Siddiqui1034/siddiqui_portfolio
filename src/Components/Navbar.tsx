import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50  glass border-b-0 border-white/5 transition-all duration-300 py-4 ${scrolled ? "shadow-lg shadow-purple-900/20" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight"
        >
          Nausheen<span className="text-white"> Siddiqui</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {["Home", "Works", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 px-3 py-2 rounded-md hover:border hover:border-purple-400 hover:text-purple-400 hover:text-glow hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all transform scale-105"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all transform hover:scale-105"
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 flex flex-col px-6 py-6 space-y-4 shadow-2xl"
          >
            {["Home", "Works", "Resume", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-purple-400 text-lg font-medium py-1 transition-colors block"
              >
                {item}
              </a>
            ))}

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center w-full py-2.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-semibold shadow-md"
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute w-full left-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 flex flex-col px-6 py-4 space-y-4 shadow-xl"
        >
          {["Home", "Works", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block "
            >
              {item}
            </a>
          ))}
        </motion.div>
      )} */}
    </nav>
  );
};

export default Navbar;
