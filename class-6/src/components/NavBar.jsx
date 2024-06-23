/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import * as fa from 'react-icons/fa';
import { Link } from "react-router-dom";

function NavBar({logo}) {
  return (
    <>
      <div className="flex flex-col flex-auto justify-between items-center bg-slate-900 py-5 pr-2 pl-2">
        <div className="flex w-[100%] text-center mx-auto">
          <img className="text-center mx-auto" src={logo} alt="logo" />
        </div>
        <div className="flex flex-row flex-auto w-[100%] justify-between items-center">
          <div>
            <nav>
              <ul className="flex justify-start gap-3 text-white">
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="#">Concerns</Link>
                </li>
                <li>
                  <Link to="#">Portfolio</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="flex justify-start gap-3">
                <li>
                  <a href="#">
                    <fa.FaFacebook className="text-blue-800" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa.FaTwitter className="text-blue-300" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa.FaInstagram className="text-orange-500" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <fa.FaYoutube className="text-red-700" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
