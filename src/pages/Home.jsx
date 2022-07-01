import React from "react";
import Show from "../components/Show";
import Show2 from "../components/Show2";
import HomeNav from "../Navbars/HomeNav";
import laptop from './assets/Parent Dashboard 1.png'
import laptop2 from './assets/Parent Dashboard 1 (1).png';

function Home() {
  return(
    <React.Fragment>
        <div className="bg-white h-screen">
            <HomeNav />
            {/* mobile */}
            <div className="block md:hidden bg-[#2B5EC0] h-[206px] mt-44">
                <div className="pl-[20px]">
                    <h1 className="text-white text-bold text-[35px] font-[Open Sans] pt-[47.34px]">Welcome to eDucura</h1>
                    <h2 className='text-white text-[11px]'>The place for every school and every Parent</h2>
                    <div className="pt-5">
                        <button className='w-[63.20px] h-[24.29px] bg-white font-[Open Sans] text-[10px] text-[#2B5EC0] capitalize'>get started</button>
                    </div>
                </div>
                {/* laptop image div */}
                <div className="relative -top-[30px]">
                    <img src={laptop} alt="" />
                </div>
                <Show 
                    className="block sm:hidden"
                />
            </div>
                {/* lg screen */}
            <div className="md:flex-col lg:flex">
            {/* 1 */}
                <div className="w-[840px] h-[401px] bg-[#2B5EC0] mt-20 hidden md:block">
                    <h1 className="text-white font-bold text-[70px] font-[Open Sans] pt-[92px] ml-[70px]">Welcome to eDucura</h1>
                    <h2 className='text-white text-[20px] ml-[70px] font-[Open Sans]'>The place for every school and every Parent</h2>
                    <div className="pt-[52px] ml-[70px]">
                            <button className='w-[105px] h-[42px] bg-white font-[Open Sans] text-[16px] text-[#2B5EC0] capitalize'>get started</button>
                        </div>
                </div>
                {/* 2 */}
                <div className="absolute right-0 hidden md:block pt-4">
                    <img src={laptop2} alt="Laptop" />
                </div>
            </div>
                <Show2 
                    className="hidden md:block"
                />
        </div>
    </React.Fragment>
  );
}

export default Home;
