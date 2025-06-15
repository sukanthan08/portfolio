import React from "react";
import { motion } from "framer-motion";

const Internships = () => {
  return (
    <section id="internships" className="py-16 px-6 md:px-20 bg-[#020617] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Internships & Activities</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300">Internships</h3>
            <ul className="list-disc list-inside ml-4 mt-2 text-lg">
              <li>Python Web Development at <strong>Shiash Info Solutions, Chennai</strong></li>
              <li>IOT With ML at <strong>PANTECH, Chennai</strong></li>
            </ul>
          </div>
         </div> 
      </motion.div>
    </section>
  );
};

export default Internships;
