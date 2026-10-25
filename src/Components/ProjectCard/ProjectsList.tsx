import React from "react";
import { ProjectCard, type ProjectData } from "../ProjectCard/ProjectCard";

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Inventory management",
    description:
      "TechSunset Inventory is inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment in one place.",
    url: "inventory.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "2",
    title: "Project management",
    description:
      "TechSunset Project is project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress in one place.",
    url: "project.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "3",
    title: "FileMoon Cloud Drive",
    description:
      "A secure full-stack cloud storage and file-sharing platform featuring time-expiring downloads, encrypted storage, and real-time email delivery.",
    url: "filemoon.dev",
    previewImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    isLive: true,
  },
  {
    id: "4",
    title: "DevPulse Analytics",
    description:
      "High-throughput real-time telemetry dashboard designed for microservices monitoring, error logging, and latency tracing across distributed systems.",
    url: "pulse.techsunset.com",
    previewImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    tags: ["TypeScript", "Docker", "Redis", "Next.js"],
    liveUrl: "#",
    isLive: true,
  },
];

export const ProjectsList: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#07040d] text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 via-purple-100 to-indigo-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-purple-300/60 mt-2 text-sm sm:text-base">
            Hover over any card preview to smoothly inspect the full interface.
          </p>
        </div>

        {/* 2-column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
