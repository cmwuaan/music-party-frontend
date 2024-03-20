import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

function Header() {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full mx-auto p-3 bg-[#202020]">
      <Link to="/">
        <h1 className="text-green-500 font-bold text-xl hover:text-green-400 cursor-pointer ml-6">
          <FaMusic className="inline-block mr-2" />
          Music Party
        </h1>
      </Link>
      <ul className="flex gap-6 mr-10">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
