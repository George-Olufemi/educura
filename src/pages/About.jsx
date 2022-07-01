import React from "react";

function About() {
  return(
    <React.Fragment>
        <section>
        <div>
            <h1 className="font-extrabold text-5xl leading-[68px] lg:text-[9.3rem] lg:leading-[12rem] uppercase header">About us</h1>
        </div>
        <div className="pt-7 pb-8 px-10 flex flex-col gap-y-8 md:flex-row md:px-24 md:gap-x-[6.5rem]  xl:justify-center">
            <div className="px-5 pt-5 pb-4 md:px-8 about border-2 border-black xl:max-w-lg xl:py-8">
                <h3 className="text-[#2B5EC0] text-xl font-bold md:text-3xl">What is eDucura?</h3>
                <p className="text-justify font-normal text-xs leading-5 md:text-base md:leading-8 md:mt-5">We are a cloud based e-management platform that help schools across Africa to optimize daily operations to drive data analytics with insight into the school activities ranging from registration, attendance, results, tests, exams, school fees payment and we also function as a way to bridge the school-parent gap.</p>
            </div>
            <div className="px-5 pt-5 pb-4 md:px-8 about border-2 border-black xl:max-w-lg xl:py-8">
                <h3 className="text-[#2B5EC0] text-xl font-bold md:text-3xl" >Why eDucura?</h3>
                <p className="text-justify font-normal text-xs leading-5 md:text-base md:leading-8 md:mt-5">Via our platform parents can get real time update on their kids performance in school via our website, email and SMS. With our platform schools no longer have to struggle to deliver updates to parents and fees payment has been completely streamlined. Also parents can access the student files, results, fees reciept an lots more.</p>
            </div>
        </div>
        <div className="md:flex md:justify-end md:mt-12">
            <div className="px-[3.3rem] pt-5 pb-3 md:w-[50vw] md:pl-28 md:pr-52 bg-[#2B5EC0]">
                <h3 className="text-white font-bold text-xl md:text-3xl">Benefits of using eDuruca?</h3>
                <p className="text-justify text-xs mt-1 leading-6 md:text-base md:leading-8 text-white">We have a world className simple and easy-to-use spftware that is customized uniquely for your school. <strong> It takes less than 5 minutes to set up and account with us.</strong></p>
                <div className="flex justify-end mt-6">
                    <a href="" className="text-xs leading-6 md:text-base md:leading-8 text-white">Click here to begin <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  );
}

export default About;
