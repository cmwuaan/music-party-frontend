import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ url, subHeader }) => {
    return (
        <div className='flex flex-row items-baseline justify-between pt-12'>
            <h2 className='text-white font-bold text-2xl mb-4 '>{subHeader}</h2>
            <Link
                to={url}
                className='text-white font-semibold text-[12px] hover:underline cursor-pointer'
            >
                Show All
            </Link>
        </div>
    );
};

export default SectionHeader;
