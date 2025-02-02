import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobileNo: '',
    age: '',
    gender: '',
    dob: '', // Adding Date of Birth to form data
    
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
    <div className="flex  h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/66/c1/29/66c12990e044a5a6cf899e2b193bdebf.jpg)" }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[800px] h-[600px] mx-[30px] mt-3"> 
        <h2 className="mb-5 text-center text-3xl font-semibold text-gray-700">Registration</h2>
        
        {/* First row: Full Name and Email */}
        <div className="mb-4 flex justify-between  space-x-4">
          <div className="flex-1">
            <label htmlFor="fullname" className="block text-base font-medium text-slate-800">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block text-base font-medium text-slate-800">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
          </div>
        </div>

        {/* Second row: Password and Mobile */}
        <div className="mb-4 flex justify-between space-x-4">
          <div className="flex-1">
            <label htmlFor="password" className="block text-base font-medium text-slate-800">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="mobileNo" className="block text-base font-medium text-slate-800">Mobile:</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
          </div>
        </div>

        {/* Third row: Age and Gender */}
        <div className="mb-4 flex justify-between space-x-4">
          <div className="flex-1">
            <label htmlFor="age" className="block text-base font-medium text-slate-800">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="gender" className="block text-base font-medium text-slate-800">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Fourth row: Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-base font-medium text-slate-800">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
            required
          />
        <button type="submit" className="w-full mt-5 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700">Register</button>
        </div>

      </form>
    </div>
  );
};

export default RegistrationForm;
