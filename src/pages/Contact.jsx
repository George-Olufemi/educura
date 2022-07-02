import React from "react";
import HomeNav from "../Navbars/HomeNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import smcontactext from "./assets/CONTACT Us.png";
import lgcontactext from "./assets/CONTACT Us (1).png"; 

import "../Assets/Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div className="bg-white h-screen">
        <HomeNav />
        <div className="pt-6 flex md:hidden">
          <img src={smcontactext} alt="" />
        </div>
        <div className="pt-6 hidden md:block">
          <img src={lgcontactext} alt="" />
        </div>
        <br />
        <div class=" bg-white sm:grid sm:grid-cols-1 px-8 m-4 md:max-w-full md:mx-auto sm:max-w-sm sm:mx-auto md:grid md:grid-cols-2  md:grid-rows-1 md:justify-items-end md:gap-x-4 ">
          {/* ------------CONTACT FORM SECTION-------------- */}
          <div class="md:col-start-2 md:col-end-3 bg-white sm:grid sm:grid-cols-1   mt-0 m-4 md:max-w-4/5 md:mx-auto sm:max-w-sm sm:mx-auto ">
            <span className="text-[18px] font-[600]  text-xl font-sans text-[#2B5EC0]">
              Drop a Message
            </span>
            <p>
              Reach out to us on our form and we will get back to you shortly.
            </p>

            <form class="mt-4 mb-4 md:flex md:flex-wrap md:justify-between sm:flex sm:flex-wrap sm:justify-between">
              <div class="flex flex-col mb-3 md:w-full sm:w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="*Full Name"
                  class="border  border-gray-900 py-2 px-3 text-grey-darkest"
                />
              </div>
              <div class="flex flex-col mb-3 md:w-1/2 sm:w-1/2">
                <input
                  type="email"
                  id="email"
                  class="border border-gray-900 py-2 px-3 text-grey-darkest md:mr-2 sm:mr-1"
                  placeholder="*email"
                  required
                />
              </div>
              <div class="flex flex-col mb-3 md:w-1/2 sm:w-1/2">
                <input
                  type="number"
                  placeholder="*Phone"
                  class="border border-gray-900 py-2 px-3 text-grey-darkest md:ml-2 sm:ml-1 "
                />
              </div>
              <div class="flex flex-col mb-3 md:w-full sm:w-full">
                <input
                  type="text"
                  placeholder="*Message"
                  class="border border-gray-900 py-2 px-3 text-grey-darkest"
                />
              </div>

              <button
                class="block w-full  bg-blue-700 hover:bg-teal-dark text-white text-lg mx-auto p-1 squared"
                type="submit"
              >
                Send Message
              </button>
              <h6 className='text-sm'>*These fields are required</h6>
            </form>
          </div>

          {/* ------PHONE AND EMAIL CONTACT SECTION--------- */}
          <div class="md:col-start-1 md:col-end-2  md:row-start-2 md:row-end-1 sm:row-start-3 sm:row-end-4 sm:col-span-1">
            <div>
              <span className="text-[18px] font-[600]  text-xl font-sans text-[#2B5EC0]">
                Phone Number:
              </span>
              <br />
              <a type="tel" href="+2347040795865">
                +234704795865
              </a>
            </div>

            <div class="block">
              <span className="text-[18px] font-[600]  text-xl font-sans text-[#2B5EC0]">
                Email:
              </span>
              <br />
              <a href="helloeducura@gmail.com">
                helloeducura@gmail
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </a>
            </div>
            <br />
            <div class="">
              <a href="/" class="inline-block ">
                <FaFacebookF />
              </a>

              <a href="/" class="inline-block ml-2 ">
                <FaTwitter />
              </a>
              <a href="/" class="inline-block ml-2">
                <FaLinkedinIn />
              </a>
              <a href="/" class="inline-block ml-2">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
