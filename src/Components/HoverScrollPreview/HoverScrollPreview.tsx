import React, { useRef, useState } from "react";
import { ExternalLink, Lock } from "lucide-react";

export interface HoverScrollPreviewProps {
  url: string;
  imageSrc?: string;
  height?: number | string;
  scrollDuration?: number;
  badgeLabel?: string;
  children?: React.ReactNode;
}

export const HoverScrollPreview: React.FC<HoverScrollPreviewProps> = ({
  url,
  imageSrc,
  height = 240,
  scrollDuration = 4.5,
  badgeLabel = "Hover to scroll preview",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (containerRef.current && contentRef.current) {
      const containerH = containerRef.current.clientHeight;
      const contentH = contentRef.current.scrollHeight;
      const maxScroll = contentH - containerH;
      if (maxScroll > 0) {
        setOffsetY(-maxScroll);
      }
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOffsetY(0);
    setIsHovered(false);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-purple-900/40 bg-[#0d071b] shadow-lg shadow-purple-950/20 group">
      {/* Browser Bar */}
      <div className="flex items-center gap-3 px-3.5 py-2.5 bg-[#120a24] border-b border-purple-900/40 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* URL Pill */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[280px] bg-[#1a0f35] border border-purple-800/40 rounded-full px-3 py-1 flex items-center justify-center gap-1.5 text-xs text-purple-200/80 truncate">
            <Lock className="w-3 h-3 text-purple-400 shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>
      </div>

      {/* Viewport Container */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ height: typeof height === "number" ? `${height}px` : height }}
        className="relative w-full overflow-hidden cursor-pointer bg-[#0a0515]"
      >
        {/* Scrollable Content */}
        <div
          ref={contentRef}
          style={{
            transform: `translateY(${offsetY}px)`,
            transition: `transform ${scrollDuration}s cubic-bezier(0.25, 1, 0.5, 1)`,
          }}
          className="w-full will-change-transform"
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Project preview"
              className="w-full object-top object-cover block"
            />
          ) : (
            children
          )}
        </div>

        {/* Floating "Hover to scroll preview" badge */}
        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="px-3.5 py-1.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-xs font-medium text-purple-200 shadow-md">
            {badgeLabel}
          </div>
        </div>
      </div>
    </div>
  );
};
