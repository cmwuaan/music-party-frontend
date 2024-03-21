import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/images/user.jpg';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const UserAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const expandProfile = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="ml-10 flex items-center cursor-pointer" onClick={expandProfile}>
        <img className="h-10 w-10 rounded-full object-cover" src={user} alt="avatar" />
        <div>
          <span className="text-2xl text-white">
            <RiArrowDropDownLine />
          </span>
        </div>
      </button>
      {isOpen ? (
        <ul className="absolute mt-2 bg-black rounded-lg shadow-md w-40 text-white">
          <Link to="/profile">
            <li className="py-2 px-4 hover:bg-gray-800">Profile</li>
          </Link>
          <Link to="/accountsettings">
            <li className="py-2 px-4 hover:bg-gray-800">Account settings</li>
          </Link>
          <li className="py-2 px-4 hover:bg-gray-800">
            <Link to="/reportissues">Report issues</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-800">
            <Link to="/" onClick={() => {}}>
              Sign out
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default UserAvatar;
