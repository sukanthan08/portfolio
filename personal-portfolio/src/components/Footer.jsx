import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank, FaSpotify } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">📞 Contact Me</h2>
          <p>
            <a href="tel:7397026624" className="hover:text-cyan-400 transition duration-300 block">
              📞 7397026624
            </a>
            <a href="mailto:sukanthancse2020@gmail.com" className="hover:text-cyan-400 transition duration-300 block">
              📧 sukanthancse2020@gmail.com
            </a>
          </p>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/Sukanthan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            View Resume
          </a>
          <a
            href="/Sukanthan_Resume.pdf"
            download="Sukanthan_Resume.pdf"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl justify-center">
          <a href="https://linkedin.com/in/sukanthan-elangovan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://github.com/sukanthan08" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://leetcode.com/sukanthan" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-yellow-400 transition duration-300" />
          </a>
          <a href="https://www.hackerrank.com/profile/sukanthancse2020" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="hover:text-green-400 transition duration-300" />
          </a>
          <a href="https://open.spotify.com/show/5od5VCHFREuUOApVcsZsjW?si=_o2YE3C9R2WHhgGthq14qA" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="hover:text-green-500 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Sukanthan E. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
