import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/about" className="hover:text-yellow-300">About</Link>
      <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
    </nav>
  );
}

export default Navbar;