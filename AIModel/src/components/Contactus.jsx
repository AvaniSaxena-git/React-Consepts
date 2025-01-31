import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-950 text-white px-4">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-7xl font-bold mb-72">Contact Us</h1>

        <div className="flex flex-col  md:flex-row justify-center items-center gap-48 ">
          {/* Address */}
          <div className="  h-72 w-52 bg-opacity-10 rounded-lg min-w-[250px] text-center">
            <h2 className="text-4xl font-semibold ">Address</h2>
            <p className="text-xl mt-6 font-light ">BN-56<br />Narela 462041,<br />Bhopal MP</p>
          </div>

          {/* Phone */}
          <div className="  h-72 w-52 bg-opacity-10  rounded-lg min-w-[250px] text-center">
            <h2 className="text-4xl font-semibold">Phone</h2>
            <p className="text-xl mt-6 font-light">8435106498 , 8535948625 , 9895672895 </p>
          </div>

          {/* Email */}
          <div className="  h-72 w-52  bg-opacity-10 rounded-lg min-w-[250px] text-center">
            <h2 className="text-4xl font-semibold">Email</h2>
            <p className="text-xl mt-6 font-light">avanisaxena@gmail.com , bhartibisen09@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs
