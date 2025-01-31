import  { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobileNo: '',
    age: '',
    gender: '',
    dob: '',  // Adding Date of Birth to form data
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

  return (<div className=''>
    <div className=" flex   bg-center   bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/0f/a0/02/0fa002a2aa800e88a798017cf974a83a.jpg)" }}>

    <div className="flex justify-center items-center  h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className=" px-6 py-16  bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      
    </div></div>
    </div>
  );
};

export default RegistrationForm;
