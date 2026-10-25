import { useEffect, useState } from "react";

const TypingEffect = () => {
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

  const typingText = useTypewriter([
    "MERN Developer",
    "Software Engineer",
    "Creative Coder",
  ]);
  return (
    <div>
      <span className="whitespace-nowrap bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-cyan-500">
        {typingText}
        <span className="animate-pulse text-cyan-500">|</span>
      </span>
    </div>
  );
};

export default TypingEffect;
