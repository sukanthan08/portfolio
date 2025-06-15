import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    title: "Student Management System",
    description:
      "Visualizes student data with bar graphs and pie charts for better teacher insights.",
    url: "https://github.com/sukanthan08/student-management-system",
  },
  {
    title: "Women Safety App (SOS)",
    description:
      "Sends SOS alerts with live location on double power-button click. Also includes spy cam detection.",
    url: "https://github.com/sukanthan08/sos-project",
  },
  {
    title: "Hostel Management System",
    description:
      "Manages hostel tasks: leave approval, event management, online payments, bill generation, and more.",
    url: "https://github.com/sukanthan08/hostel-management-system",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 mt-3 text-md">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:underline"
              >
                <FaGithub className="w-5 h-5" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
