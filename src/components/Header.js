import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='bg-[#202020] fixed w-full z-20 top-0 start-0  bg-opacity-30 border-b-[0.1px] border-gray-600 '>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-0 py-4'>
                <Link to='/'>
                    <h1 className='text-green-500 font-bold text-xl hover:text-green-400 cursor-pointer  duration-200'>
                        <FaMusic className='inline-block mr-2' />
                        Music Party
                    </h1>
                </Link>
                <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                    <button
                        type='button'
                        className='text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium text-sm px-6 py-2 text-center rounded-2xl'
                    >
                        Login
                    </button>
                    <button
                        data-collapse-toggle='navbar-sticky'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-sticky'
                        aria-expanded='false'
                        onClick={toggleMobileMenu}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isMobileMenuOpen ? 'block' : 'hidden'
                    }`}
                    id='navbar-sticky'
                >
                    <ul className='md:ml-[850px] ml-0 flex flex-col p-4 md:p-0 mt-4 font-medium border right-0 rounded-lg bg-gray-800 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-gray-700'>
                        <li>
                            <a
                                href='/'
                                className='block py-2 px-3 text-gray-300 rounded md:hover:text-green-500 md:p-0 hover:bg-gray-600 md:hover:bg-transparent'
                                aria-current='page'
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='/about'
                                className='block py-2 px-3 text-gray-300 rounded md:hover:text-green-500 md:p-0 hover:bg-gray-600 md:hover:bg-transparent'
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
