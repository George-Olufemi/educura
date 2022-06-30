import React from "react";
import cap from './images/Vector.png'
import { Link } from 'react-router-dom'

function HomeNav() {
  return(
    <React.Fragment>
    {/* mobile view */}
        <div></div>
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
            <div className="flex justify-center items-center">
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
