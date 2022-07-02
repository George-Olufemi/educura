import React from "react";
import HomeNav from '../Navbars/HomeNav';
import smtext from './assets/About Us (1).png';
import lgtext from './assets/About Us.png';
import what from './assets/Frame 12.png';
import whatlg from './assets/Frame 12 (1).png';
import why from './assets/Frame 13.png';
import whylg from './assets/Frame 13 (1).png';
import arrow from './assets/Vector (1).png';
import bar from './assets/Frame 14.png';

function About() {
  return(
    <React.Fragment>
        <div className="bg-white h-auto md:pb-16">
          <HomeNav />
          <div className="block md:hidden">
              <img src={smtext} alt="About Us" />
          </div>
          <div className="pt-9 hidden md:flex">
            <img src={lgtext} alt="About Us" />
          </div>
          {/* card */}
          <div className='flex flex-col justify-center items-center pt-5 md:hidden'>
            {/* 1 */}
            <div className='pb-8'>
              <img src={what} alt="" />
            </div>
            {/* 2 */}
            <div>
              <img src={why} alt="" />
            </div>
          </div>
          <div className='bg-[#2B5EC0] w-[414px] h-auto mt-4 mb-[21px] text-white md:hidden'>
            <h1 className='font-[Open Sans] font-[700] text-[20px] tracking-wide pt-[20.38px] pl-[40px]'>Benefits of using eDucura?</h1>
            <p className="tracking-wider pl-[40px] pb-3">We have a world class simple and <br />easy-to-use software that is customized uniquely for your school. <span className="font-[700] tracking-wider">It takes less<br /> than 5 mintes to set up an account<br /> with us.</span></p>
              <div className="flex justify-end pr-5 pb-5">
                <div className="flex items-center">
                  <div className="mr-2">
                    <h1 className="font-[11px] font-[400]">Click here to begin</h1>
                  </div>
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
          </div>
          {/* lg */}
          <div className="md:flex gap-16 justify-center pt-9 hidden">
            {/* 1 */}
            <div>
              <img src={whatlg} alt="" />
            </div>
            {/* 2 */}
            <div>
              <img src={whylg} alt="" />
            </div>
          </div>
          {/*  */}
          <div className="md:flex justify-end pt-12 hidden">
            <img src={bar} alt="" />
          </div>
        </div>
    </React.Fragment>
  );
}

export default About;
