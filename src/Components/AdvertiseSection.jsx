import React from 'react';
import classPic from "../assets/class.png"
import swimming from "../assets/swimming.png"
import playground from "../assets/playground.png"
import bg from "../assets/bg.png"

const AdvertiseSection = () => {
    return (
        <div>
            <div className='mt-5 bg-[#F3F3F3] p-3 space-y-5'>
                <h1 className='font-semibold text-lg'>Q-Zone</h1>
                <img src={swimming} alt="" />
                <img src={classPic} alt="" />
                <img src={playground} alt="" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default AdvertiseSection;