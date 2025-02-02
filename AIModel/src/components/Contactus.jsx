import Navbar from "./Navbar";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cyan-950 h-screen">
        <div className="flex flex- col items-center justify-center">
          <h1 className="text-white text-center text-5xl font-bold pt-10">
        GET IN TOUCH
          </h1>
        </div>
        <div className="mt-20  flex justify-center items-center gap-28">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Address */}
            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
              <MdOutlineLocationOn color="white" size={50} />
            </div>
            <h1 className="text-2xl text-white  font-semibold mt-4">ADDRESS</h1>
            <div className="text-xl text-white font-semibold mt-1">
              <h5>BN-56 Narela 462041</h5>
              <h5>Bhopal (MP)</h5>
            </div>
          </div>
          {/* Phone */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
              <MdOutlineLocalPhone color="white" size={50} />
            </div>
            <h1 className="text-2xl text-white  font-semibold mt-4 ">Phone</h1>
            <div className="text-xl text-white font-semibold mt-1">
              <h5>8435106498</h5>
              <h5>9878543210</h5>
            </div>
          </div>
          {/* E-mail */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center">
              <RiMessage2Line color="white" size={40} />
            </div>
            <h1 className="text-2xl text-white  font-semibold mt-4 ">E-mail</h1>
            <div className="text-xl text-white font-semibold mt-1">
              <h5>avanisaxena2005@gmai.com</h5>
              <h5>bhartibisen09@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
