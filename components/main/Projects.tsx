import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Selected Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Cross-Platform Mobile App Development"
          description="Built polished Flutter applications with a focus on responsive UI, scalable architecture, and reliable delivery for Android and iOS. The work centered on clean implementation, maintainable code, and strong user experience."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Node.js & REST API Integration"
          description="Delivered backend-connected product experiences through structured API integration, thoughtful data flow, and maintainable front-end logic that supports scalable product features."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Full Stack Product Delivery"
          description="Created a performance-focused digital presence that clearly communicates technical depth, product thinking, and engineering capability for recruiters, clients, and collaborators."
        />
      </div>
    </div>
  );
};

export default Projects;
