/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const handleDisplay = () => {
    var collapseMenu = document.getElementById("collapseMenu");
    if (collapseMenu.style.display === "block") {
      collapseMenu.style.display = "none";
    } else {
      collapseMenu.style.display = "block";
    }
  };

  return (
    <>
      <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
          <div className="relative flex flex-wrap items-center gap-4">
            <Link to="/">
              <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-36 hidden"
              />
              <h1 className="text-3xl">Chat App</h1>
            </Link>

            <div
              id="collapseMenu"
              className="max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 z-50"
            >
              <button
                id="toggleClose"
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                onClick={handleDisplay}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <ul className="lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <Link to="/">
                    <h1 className="text-3xl">Chat App</h1>
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link
                    to="/"
                    className="hover:text-blue-600 text-blue-600 block font-semibold transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link
                    to="/contact"
                    className="hover:text-blue-600 block font-semibold transition-all"
                  >
                    Contact
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <Link
                    to="/about"
                    className="hover:text-blue-600 block font-semibold transition-all"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex ml-auto">
              <Link to="/signin" className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800 mr-2">
                Sign In
              </Link>
              <Link to="/signup" className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
                Sign Up
              </Link>
              <button
                id="toggleOpen"
                className="lg:hidden ml-7"
                onClick={handleDisplay}
              >
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
    </>
  );
};

export default NavBar;