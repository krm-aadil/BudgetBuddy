import React, { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li className="hidden md:block">
            <a
              href="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="/About"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="hover:text-gray-300 transition duration-300"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="hover:text-gray-300 transition duration-300"
            >
              Signup
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-3xl text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 mt-2 bg-black w-48 p-2 space-y-2`}
      >
        <a
          href="/"
          className="block text-gray-300 hover:text-gray-200 transition duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="block text-gray-300 hover:text-gray-200 transition duration-300"
        >
          About
        </a>
        <a
          href="/login"
          className="block text-gray-300 hover:text-gray-200 transition duration-300"
        >
          Login
        </a>
        <a
          href="/signup"
          className="block text-gray-300 hover:text-gray-200 transition duration-300"
        >
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
