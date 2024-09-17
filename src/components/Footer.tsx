import React from "react";

const Footer = () => {
  return (
    <footer className="py-[4em] bg-white">
      <h3 className="text-3xl font-bold text-center mb-[2em]">Contact Me</h3>
      <div className="text-center">
        <p className="mb-[1em]">
          Feel free to reach out via email:{" "}
          <a
            href="mailto:nsikakdanny11@gmail.com"
            className="text-blue-500 hover:underline"
          >
            nsikakdanny11@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
