"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const LinkPreviewFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">    
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQF8BUmMUcuYjA/company-logo_100_100/company-logo_100_100/0/1731928266300?e=1742428800&v=beta&t=rBnQkBbI3QMBY1hq17Ic7aDDsPgycgDDJpZxqkNe8kw" alt="Your Logo" className="w-32 mx-auto md:mx-0 border-r-8" />
            <p className="mt-2 text-sm">Hello Viewers, explore the work of delusion.</p>
          </div>
          <nav className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400">About Me</a>
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>

        {/* Footer Middle Section */}
        <div className="text-center">
          <p className="text-sm mt-4">
            “Designing the future, one project at a time.” <br />
            Reach out to collaborate or learn more about my work.
          </p>
          <div className="flex justify-center gap-6 mt-4">


          <LinkPreview
          url="https://www.linkedin.com/in/nitinCMgupta/"
          className="hover:text-white"
        >
         <FaLinkedin className="text-xl hover:text-blue-500 transition-colors" />
         </LinkPreview>

          <LinkPreview
          url="https://www.instagram.com/only__nitin/"
        className="hover:text-white"
        >
             <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
              </LinkPreview>

         <LinkPreview
          url="https://github.com/nitin14gupta"
          className="hover:text-white"
        >
        <FaGithub className="text-xl hover:text-gray-400 transition-colors" />
       </LinkPreview>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-xs">&copy; 2024 Nitin Gupta. All rights reserved.</p>
          <p className="text-xs">Developed with ❤️ by Nitin.</p>
        </div>
      </div>
    </footer>
  );
};

export default LinkPreviewFooter;

