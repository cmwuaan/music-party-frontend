import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

function Header() {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full mx-auto px-1 py-3 bg-[#202020] z-[999] backdrop-filter backdrop-blur-xl bg-opacity-30 border-b-[0.1px] border-gray-600">
      <Link to="/">
        <h1 className="text-green-500 font-bold text-xl hover:text-green-400 cursor-pointer ml-6 duration-200">
          <FaMusic className="inline-block mr-2" />
          Music Party
        </h1>
      </Link>
      <ul className="flex gap-8 mr-10 text-base font-semibold items-center text-gray-300">
        <Link to="/">
          <li className="hover:text-white duration-200">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-white duration-200">About</li>
        </Link>
        <Link to="/signin">
          <li className="px-6 py-2 bg-white rounded-full text-black hover:bg-gray-200 hover:scale-105 duration-200">
            Log in
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
