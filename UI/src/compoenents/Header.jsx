import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold text-blue-600">🚀 MyGoals</span>
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <Link to={"/"} className="hover:text-blue-600" >Goals</Link>
            <Link to={"/to-do"} className="hover:text-blue-600">To-Do</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none background-transparent"
                >
                <img
                    src="/my-selfi.jpeg"
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover cursor-pointer bg-transparent"
                />
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Profile
                    </a>
                    <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Settings
                    </a>
                    <hr className="my-1" />
                    <button
                    onClick={() => alert("Logging out...")}
                    className="w-full text-center px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                    Logout
                    </button>
                </div>
                )}
            </div>
        </div>
      </header>
    )
}