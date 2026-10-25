import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(true);

  const checkScroll = () => {
    if (window.scrollY > 50) setVisible(true);
    else setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [visible]);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;
  return (
    <>
      {visible && (
        <button
          className="fixed bottom-24 right-5 md:bottom-28 md:right-8
          z-40 w-12 h-12 md:w-14 md:h-14 
          rounded-full bg-[#0c081e]/80 
          border border-purple-500/50 text-purple-300 hover:text-white 
          hover:border-purple-400 hover:bg-purple-950/60 
          backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] 
          flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          onClick={handleScroll}
          aria-label="Scroll to top"
        >
          <i className="ri-arrow-up-line text-2xl font-bold"></i>
        </button>
      )}
    </>
  );
};

export default ScrollTop;
