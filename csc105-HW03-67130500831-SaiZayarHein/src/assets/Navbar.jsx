import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center px-12 py-4">
        <a className="text-2xl font-bold" href="#">
          Artist John
        </a>
        <nav>
          <ul className="flex items-center list-none gap-9 font-medium text-sm">
            <li
              className="bg-green-100 hover:bg-green-900 hover:text-white px-8 py-2 rounded-2xl  transition"
              href="#"
            >
              Home
            </li>
            <li className="hover:text-green-900 transition" href="#">
              About Me
            </li>
            <li className="hover:text-green-900 transition" href="#">
              Gallery
            </li>
          </ul>
        </nav>
        <button className="text-white bg-green-900 hover:bg-green-800 focus:outline-none cursor-pointer font-medium rounded-full text-sm px-10 py-2 text-center transition">
          Contact
        </button>
      </header>
    </>
  );
};

export default Navbar;
