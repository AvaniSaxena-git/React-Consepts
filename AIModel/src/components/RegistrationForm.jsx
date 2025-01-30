import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobileNo: '',
    age: '',
    gender: '',
    dob: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (

    <div className="">
        <div className="flex justify-center bg-blue-200 items-center h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/68/e8/5e/68e85ef75f5befe557cf389d1092126a.jpg)" }}>
      <form onSubmit={handleSubmit} className=" justify-items-start mt-5 mr-[1200px] max-w-md px-11 py-4 bg-white-700 shadow-lg ">
        <h2 className="text-5xl ml-[600px] font-semibold mt-16 text-center  text-slate-200">Register</h2>
        <div className="mb-4">
          <label htmlFor="fullname" className=" ml-32 block mt-8 text-sm font-medium text-gray-200">Full Name :</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-3 p-0.5 w-full border bg-neutral-800 ml-32 text-white border-gray-900 rounded-md"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block ml-32 mt-8 text-sm font-medium text-gray-200">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-3 p-0.5 w-full border ml-32 bg-neutral-800 text-white border-gray-900 rounded-md"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mt-8 ml-32 text-sm font-medium text-white">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-3 p-0.5 w-full border text-white ml-32 bg-neutral-800 rounded-md border-gray-900"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block mt-8 ml-32 text-sm font-medium text-white">Contact :</label>
          <input
            type="Number"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="mt-3 p-0.5 w-full border text-white ml-32 bg-neutral-800 rounded-md border-gray-900"
            placeholder=""
          />
        </div>

        <div className="">
          <label htmlFor="dob" className="block text-sm ml-[500px] font-medium text-white">Date of Birth :</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-3 p-0.5 border text-white ml-[500px] bg-neutral-800 rounded-md border-gray-900"
            
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm ml-[500px] font-medium text-white">Age :</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-3 p-0.5  border text-white ml-[500px] bg-neutral-800 rounded-md border-gray-900"
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium ml-[500px] text-white">Gender :</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-3 p-0.5  border text-white ml-[500px] bg-neutral-800 rounded-md border-gray-900"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" > 
          Register
        </button>



      </form>
    </div>
    

    



    </div>
  );
};

export default RegistrationForm;
