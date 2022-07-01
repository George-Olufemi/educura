import React from "react";
import Show from "../components/Show";
import HomeNav from "../Navbars/HomeNav";
import laptop from './assets/Parent Dashboard 1.png'

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
                <div className="relative -top-[60px]">
                    <img src={laptop} alt="" />
                </div>
                <Show />
                {/* lg screen */}
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
