import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrDocumentCsv } from "react-icons/gr";
import { MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleModal}
        className="text-white bg-gray-800 p-2 rounded-md md:hidden block focus:outline-none"
      >
        {/* Icon for Hamburger */}
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Modal */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-900 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleModal}
      >
        {/* Modal Content */}
        <div
          className={`fixed top-0 right-0 w-[70%] bg-white h-[50%] shadow-lg transform transition-transform duration-900 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full rounded-b-2xl"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-gray-500 font-bold text-[2rem]"
          >
            X
          </button>

          {/* Menu Items */}
          <nav className="mt-16 space-y-4  text-center">
            <a
              href="/home"
              className="flex justify-center text-lg text-gray-900 hover:bg-gray-200 p-4"
            >
              <FaHome className="size-7" />
            </a>

            <Link
              to="/projects"
              className="flex justify-center text-lg text-gray-900 hover:bg-gray-200 p-4"
            >
              <FcAbout className="size-7" />
            </Link>

            <a
              href="/services"
              className="flex justify-center text-lg text-gray-900 hover:bg-gray-200 p-4 uppercase"
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="flex justify-center text-lg text-gray-900 hover:bg-gray-200 p-4"
            >
              <GrDocumentCsv className="size-7" />
            </a>
            <a
              href="/contact"
              className="flex justify-center text-lg text-gray-900 hover:bg-gray-200 p-4"
            >
              <MdOutlineContactMail className="size-7" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Modal;
