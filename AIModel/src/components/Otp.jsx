import React from 'react'

function Otp() {
  return (
    <div className='flex justify-center items-center bg-gray-300 min-h-screen'>
      <div className='bg-gray-100 h-[500px] w-[400px]  rounded-3xl'>
         <div className='font-bold text-3xl mt-[60px] ml-[130px] '>
        Enter OTP 
      </div>
      <div className='text-base mt-8 text-center text-gray-600'>
        We have sent a verification code to your registered mobile number
      </div>
           <div className='flex justify-center  items-center mt-8 gap-2'> 
         <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border bg-gray-300 border-gray-300 rounded-md focus:outline-none focus:border-gray-800"
        />
        </div>
        <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div> <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div> <div> <input
          type="text"
          maxLength="1"
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-gray-800 bg-gray-300"
        />
        </div>
           </div>
        
        <div>
          <button className='bg-emerald-600 rounded-md px-20 py-2 mt-10 ml-[100px]'>Verify</button>
        </div>
        <div className='text-base mt-8 text-center text-gray-600'>
          Didn`t recieve the code ?
        </div>
        <div className='font-semibold text-lg ml-[140px] mt-5 text-emerald-600'>
          Resend Code
        </div>



        </div>
    </div>
  )
}

export default Otp
/*
import { useState, useRef } from "react";

const OtpInput = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  // Handle input change
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Ensure single digit
    setOtp(newOtp);

    // Move to next input if not the last one
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Trigger OTP completion
    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length).split("");
    if (pasteData.every((char) => !isNaN(char))) {
      setOtp(pasteData);
      pasteData.forEach((char, i) => {
        if (inputRefs.current[i]) inputRefs.current[i].value = char;
      });
      if (pasteData.length === length) onComplete(pasteData.join(""));
    }
  };

  return (
    <div className="flex gap-2">
      {otp.map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default OtpInput;
*/
