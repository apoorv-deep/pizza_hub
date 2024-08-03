import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-purple-500 text-white p-4 mt-8 flex flex-col items-center sm:flex-row sm:justify-between">
      <div>
        &copy; 2024 - ALL RIGHTS RESERVED | 
        <strong> <Link href="/" >PIZZA HUB</Link> </strong>
      </div>
      <div className="mt-2 sm:mt-0"> 
      <strong> Developed by </strong>
        <a href="https://www.linkedin.com/in/apoorv-deep/" target="_blank" className="hover:underline"> Apoorv Deep</a> | 
        <a href="mailto:apoorvdeeps@gmail.com" className="hover:underline"> Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
