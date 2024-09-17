import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-gray-500">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
