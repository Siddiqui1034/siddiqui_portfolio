import React from "react";
import { ArrowUpRight } from "lucide-react";
import { HoverScrollPreview } from "../HoverScrollPreview/HoverScrollPreview";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  url: string;
  previewImage?: string;
  previewContent?: React.ReactNode;
  tags: string[];
  liveUrl: string;
  isLive?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative rounded-3xl bg-[#0c071a] border border-purple-800/40 p-5 flex flex-col justify-between hover:border-purple-500/60 transition-all duration-300 shadow-xl shadow-purple-950/30 group">
      {/* Top: Browser Mockup with Hover-Scroll */}
      <div>
        <HoverScrollPreview
          url={project.url}
          imageSrc={project.previewImage}
          height={240}
          scrollDuration={4}
        >
          {project.previewContent}
        </HoverScrollPreview>

        {/* Meta Status Row */}
        <div className="flex items-center justify-between mt-5 mb-3">
          {project.isLive ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/80 text-purple-300 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-400 border border-zinc-700">
              In Development
            </span>
          )}

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400/80 hover:text-purple-200 p-1 rounded-full hover:bg-purple-900/30 transition-colors"
            aria-label="Open link"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-purple-200/70 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-purple-950/40 text-purple-300 border border-purple-800/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Button */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all duration-200 active:scale-95"
      >
        <span>Live demo</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};
