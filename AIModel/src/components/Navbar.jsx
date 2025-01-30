import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router-dom for routing

const Navbar = () => {
  return (<div className="">
    <nav className="bg-gray-800 p-3 mb-0.5   ">
      <div className="max-w-7xl text-lg mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Logo</div>
        <ul className="flex space-x-8 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;