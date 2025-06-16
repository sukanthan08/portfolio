import React, { useState } from "react";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiAccenture, SiFreecodecamp } from "react-icons/si";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "HackerRank Problem Solving (Basic)",
    icon: <FaHackerrank className="text-green-500 text-3xl" />,
    link: "https://www.hackerrank.com/certificates/b5a3969f6563",
  },
  {
    title: "FreeCodeCamp Responsive Web Design",
    icon: <SiFreecodecamp className="text-green-300 text-3xl" />,
    link: "https://www.freecodecamp.org/certification/fcca31b0ac7-3eb7-4ff0-a23f-a4dbbfc2d12a/responsive-web-design",
  },
  {
    title: "PwC Data Analytics Job Simulation",
    icon: <FaBuilding className="text-orange-300 text-3xl" />,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_H5HuKJozJd5Xrc52m_1726317742229_completion_certificate.pdf",
  },
  {
    title: "Accenture North America Job Simulation",
    icon: <SiAccenture className="text-purple-400 text-3xl" />,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_H5HuKJozJd5Xrc52m_1726160032734_completion_certificate.pdf",
  },
  {
    title: "LeetCode 50 Days Badge",
    icon: <SiLeetcode className="text-yellow-400 text-3xl" />,
    link: "https://leetcode.com/medal/?showImg=0&id=3687248&isLevel=false",
  },
  {
    title: "LeetCode SQL Badge",
    icon: <SiLeetcode className="text-yellow-400 text-3xl" />,
    link: "https://leetcode.com/medal/?showImg=0&id=3510694&isLevel=false",
  },
];

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-r from-gray-800 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-center mb-12 drop-shadow-lg">
          🏅 Achievements & Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer bg-white/10 backdrop-blur-lg hover:bg-white/20 p-6 rounded-2xl shadow-2xl flex items-center gap-4 transition duration-300 hover:scale-105 border border-white/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="min-w-[2.5rem]">{item.icon}</div>
              <p className="text-base font-semibold tracking-wide">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selected && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white text-black rounded-lg p-6 w-full max-w-xl relative shadow-2xl">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-3 text-xl font-bold text-red-500 hover:text-red-700"
              >
                ×
              </button>
              <h3 className="text-2xl font-semibold mb-4">{selected.title}</h3>

              <div className="w-full h-[400px] border rounded-md">
                <object
                  data={selected.link}
                  type="application/pdf"
                  className="w-full h-full rounded"
                >
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      📱 PDF preview not supported on this device.
                    </p>
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                    >
                      🔗 Tap to View Certificate
                    </a>
                  </div>
                </object>
              </div>

              <div className="mt-4 text-right">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  🔗 View Full Certificate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
