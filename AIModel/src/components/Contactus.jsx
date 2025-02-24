import Navbar from "./Navbar";

import { MdOutlineLocationOn } from "react-icons/md";

import { MdOutlineLocalPhone } from "react-icons/md";

import { RiMessage2Line } from "react-icons/ri";

const ContactUs = () => {

  return (

    <div>

      <div className="bg-teal-600 mt-0.5 ">

        <div className="flex flex- col items-center justify-center">

          <h1 className="text-white text-center text-4xl font-semibold pt-28">

        GET IN TOUCH

          </h1>

        </div>

        <div className="mt-40  flex justify-center items-center gap-60">

          
          {/* Phone */}

          <div className="text-center flex flex-col items-center justify-center">

            <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center">

              <MdOutlineLocalPhone color="white" size={50} />

            </div>

            <h1 className="text-2xl text-white  font-semibold mt-4 "></h1>

            <div className="text-xl text-white font-semibold mt-1">

              <h5>9878543210</h5>

            </div>

          </div>

          {/* E-mail */}

          <div className="text-center flex flex-col items-center justify-center">

            <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center">

              <RiMessage2Line color="white" size={40} />

            </div>

            <h1 className="text-2xl text-white  font-semibold mt-4 "></h1>

            <div className="text-xl text-white font-semibold mt-1">

              <h5>healthpreictai@gmail.com</h5>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};



export default ContactUs;
