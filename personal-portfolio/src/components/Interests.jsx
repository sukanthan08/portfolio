// Interests.jsx
import React from "react";
import { motion } from "framer-motion";

const interests = [
  "Smartphone Analysis",
  "Music",
  "Podcasting",
  "Tech Reviews",
  "Designing UI/UX",
  "Exploring Databases"
];

export default function Interests() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          💡 Personal Interests
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-medium">{interest}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
