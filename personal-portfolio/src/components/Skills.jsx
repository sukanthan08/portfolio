import React from "react";
import { motion } from "framer-motion";

const skills = ["Java", "Spring Boot", "Hibernate", "HTML", "CSS", "JavaScript", "React", "MySQL", "PHP"];

export default function Skills() {
  return (
    <motion.section
      className="py-16 px-8 max-w-5xl mx-auto"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-800 rounded-xl p-4 text-center hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
}