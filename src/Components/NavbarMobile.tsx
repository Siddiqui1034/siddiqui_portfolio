import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Works", href: "#works" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 ${
          scrolled
            ? "bg-[#0b071a]/85 backdrop-blur-md shadow-lg shadow-purple-950/30 border-b border-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight"
          >
            Nausheen<span className="text-white">Siddiqui</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`px-3 py-2 rounded-md transition-all ${
                  activeTab === item.name
                    ? "text-purple-400 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all transform hover:scale-105"
            >
              Hire me
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-purple-950/30 border border-purple-500/20"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Drawer & Backdrop */}
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-out Sidebar Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 right-0 h-screen h-[100vh] w-[85%] max-w-[340px] bg-[#0c081e] border-l border-purple-500/20 z-50 md:hidden flex flex-col p-6 shadow-[-15px_0_35px_rgba(0,0,0,0.8)] overflow-y-auto"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-180 bg-gradient-to-b from-transparent via-purple-400 to-transparent pointer-events-none shadow-[0_0_15px_rgba(192,132,252,0.9),0_0_30px_rgba(168,85,247,0.5)]" />
              {/* 1. Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/10">
                <div className="text-lg font-bold text-white tracking-wide">
                  Nausheen <span className="text-purple-400">Siddiqui</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full border border-purple-500/20 text-gray-400 hover:text-white hover:border-purple-400/50 bg-purple-950/30 transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* 2. Profile Card Banner */}
              <div className="mt-5 p-3.5 rounded-2xl bg-gradient-to-b from-purple-900/20 to-purple-950/40 border border-purple-500/25 flex items-center gap-5 shadow-inner">
                {/* Profile Image with Glow Ring */}
                <div className="relative w-12 h-12 bg-white rounded-full ring-2 ring-purple-400/50 overflow-hidden flex-shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                  <img
                    src="./images/nausheen.jpg"
                    alt="Profile Avatar"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Info & Availability */}
                <div className="flex flex-col gap-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">
                    Nausheen Siddiqui
                  </h4>
                  <p className="text-xs text-purple-300/80 font-medium truncate">
                    Full Stack Developer
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Navigation Links List */}
              <div className="mt-6 flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-purple-900/30 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "text-gray-300 hover:text-white hover:bg-purple-900/15"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
