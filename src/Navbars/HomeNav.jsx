import React, { useState } from "react";
import cap from './images/Vector.png';
import { Link } from 'react-router-dom';
import cap2 from './images/Vector2.png';

function HomeNav() {
    const [open, setOpen] = useState(false);
  return(
    <React.Fragment>
    {/* mobile view */}
        <div className="h-[100px] flex md:hidden justify-between items-center">
            <div className="flex justify-center items-center ml-[20px]">
                    <div className="bg-[#2B5EC0] h-[38px] w-[38px] rounded-full flex justify-center items-center">
                        <img src={cap2} alt="" />
                    </div>
                    {/* head text */}
                    <div className="pt-4 select-none">
                        <h1 className="text-[13.8182px] text-[#2B5EC0] pl-2 font-sans">eDucura</h1>
                        <h1 className="text-[4.14545px] capitalize font-sans">...promoting educational exelence</h1>
                    </div>
                </div>
                {/* hamburger */}
                <div onClick={() => setOpen(!open)} className="text-3xl flex justify-center items-center mr-[36px] cursor-pointer">
                    <ion-icon name={ open ? 'close' : 'menu' }></ion-icon>
                </div>
                {/* links */}
        </div>
            <div className=''>
                <ul className={(open ? 'opacity-96' : 'opacity-0') + ' bg-[#f7f7f7] w-full h-auto  absolute transition-all duration-500 pt-5'}>
                <Link to='/'>
                    <li className="text-[16px] font-[400] p-3">Home</li>
                </Link>
                <Link to='/about-us'>
                    <li className="text-[16px] font-[400] p-3">About Us</li>
                </Link>
                <Link to='/contact-us'>
                    <li className="text-[16px] font-[400] p-3">Contact Us</li>
                </Link>
                </ul>
            </div>
    {/* lg screen */}
        <div className="h-[100px] hidden md:flex justify-between items-center">
            {/* logo */}
            <div className="flex justify-center items-center ml-[70px]">
                <div className="bg-[#2B5EC0] h-[55px] w-[55px] rounded-full flex justify-center items-center">
                    <img src={cap} alt="" />
                </div>
                {/* head text */}
                <div className="pt-4 select-none">
                    <h1 className="text-[20px] text-[#2B5EC0] pl-2 font-sans">eDucura</h1>
                    <h1 className="text-[6px] capitalize font-sans">...promoting educational exelence</h1>
                </div>
            </div>
            {/* navigation */}
            <div className="flex justify-center items-center relative">
                <ul className='flex space-x-7 mr-[68px]'>
                    <Link to='/'>
                        <li className="text-[16px] font-[400]">Home</li>
                    </Link>
                    <Link to='/about-us'>
                        <li className="text-[16px] font-[400]">About Us</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li className="text-[16px] font-[400]">Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    </React.Fragment>
  );
}

export default HomeNav;
