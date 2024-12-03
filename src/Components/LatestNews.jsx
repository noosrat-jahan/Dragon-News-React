import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-[#F3F3F3] p-2'>
            <p className='bg-[#D72050] px-3 py-2 text-base-100 rounded-md font-semibold'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to="/news" className='ml-5'><span className='font-bold'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit.</Link>
                <Link to="/news" className='ml-5'><span className='font-bold'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit.</Link>
                <Link to="/news" className='ml-5'><span className='font-bold'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit.</Link>
                <Link to="/news" className='ml-5'><span className='font-bold'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;