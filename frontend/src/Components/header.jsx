import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Settings } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / App Title */}
            <h2 className="text-2xl font-bold tracking-wide">
            <Link to="/" className="hover:text-slate-200 transition duration-300">
              🌟 Blogify
            </Link>
          </h2>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-lg">
          <Link to="/" className="hover:text-slate-200 transition duration-200">Home</Link>
          <Link to="/blogs" className="hover:text-slate-200 transition duration-200">Blogs</Link>
        </nav>

        {/* Auth Buttons + Settings for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-indigo-600 rounded-full hover:bg-violet-100 transition duration-200 shadow-md"
          >
            Sign Up
          </Link>
          <Link
            to="/setting"
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-white hover:text-indigo-600 transition duration-200"
          >
            <Settings size={20} />
            <span className="font-medium">Setting</span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="p-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white text-indigo-600 shadow-xl rounded-b-xl px-6 py-4 space-y-3">
          <Link to="/" className="block font-medium hover:text-violet-700 transition">Home</Link>
          <Link to="/blogs" className="block font-medium hover:text-violet-700 transition">Blogs</Link>
          <hr className="border-gray-300" />
          <Link
            to="/login"
            className="block py-2 px-4 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block py-2 px-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/setting"
            className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-full transition"
          >
            <Settings size={20} />
            <span className="font-medium">Setting</span>
          </Link>
        </div>
      )}
    </header>
  );
}
