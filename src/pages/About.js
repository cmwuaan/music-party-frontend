import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
const About = () => {
    return (
        <div className=' py-20 max-w-screen-xl md:flex flex-wrap justify-between mx-auto p-4 text-white'>
            <div>
                <div className=' pt-16 md:px-56 h-full px-4'>
                    <div>
                        <FaQuestionCircle className='text-[48px] text-green-500 mb-10'/>
                    </div>
                    <h2 className='font-bold text-4xl mt-2'>About us.</h2>
                    <p className='mt-8 text-gray-400'>
                        Established in{' '}
                        <span className='text-green-400'>2024</span>, Music
                        Party stands as a vibrant online community that unites
                        music enthusiasts, offering a unique platform where
                        users can come together to listen, discover, and share
                        their favorite tunes. With a strong emphasis on
                        fostering a sense of connection and collaboration, Music
                        Party goes beyond being a mere music streaming service.{' '}
                        <br /> <br />
                        This web platform is artist-centric, providing musicians
                        with cutting-edge tools and resources to not only
                        showcase their talent but also to cultivate and expand
                        their musical careers.
                        <br />
                        <br />
                        Boasting an extensive library featuring a diverse range
                        of tracks, Rhythm Party brings together over 50 million
                        songs from a community of 10 million artists. With its
                        commitment to empowering both artists and fans alike,
                        Music Party envisions a future where the joy of music is
                        celebrated and shared collaboratively.
                    </p>
                    <p className='mt-16 text-[16px]'>
                        Don't have a free account yet?
                    </p>
                    <button className='px-4 py-2 text-[14px] font-semibold rounded mt-4 bg-green-500 hover:scale-105 duration-300'>
                        {' '}
                        Create your Account
                    </button>

                    <p className='font-bold text-2xl mt-12 mb-6'>Follow us</p>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row gap-4 items-center cursor-pointer'>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'
                                alt='instagram'
                                className='h-4 w-4'
                            />
                            <p>Instagram</p>
                        </div>
                        <div className='flex flex-row gap-4 items-center cursor-pointer'>
                            <img
                                src='https://www.facebook.com/images/fb_icon_325x325.png'
                                alt='instagram'
                                className='h-4 w-4'
                            />
                            <p>Facebook</p>
                        </div>
                        <div className='flex flex-row gap-4 items-center cursor-pointer'>
                            <img
                                src='https://cdn.iconscout.com/icon/free/png-256/free-youtube-268-721990.png?f=webp'
                                alt='instagram'
                                className='h-4 w-4'
                            />
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
