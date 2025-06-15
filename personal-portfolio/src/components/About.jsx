import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-[#0f172a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="mb-4 text-lg leading-relaxed">
          To work in a challenging environment where I can learn new skills and
          utilize both technical and non-technical abilities for the company's growth as
          well as my own career advancement.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-2 text-cyan-300">Education</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <span className="font-semibold">B.E. Computer Science and Engineering</span>, 
            Velammal Engineering College — CGPA: <strong>8.87</strong>
          </li>
          <li>
            <span className="font-semibold">HSC</span>, Sowdambikaa Matric Boys Higher Secondary School, Trichy — <strong>81%</strong>
          </li>
          <li>
            <span className="font-semibold">SSLC</span>, Krishnasamy Memorial Matriculation Higher Secondary School, Cuddalore — <strong>91%</strong>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
