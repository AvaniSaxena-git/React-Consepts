import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    mobileNo: "",
    age: "",
    gender: "",
    dob: "", // Adding Date of Birth to form data
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
    
      <div>
        
      
      <div className="flex bg-slate-300 justify-center items-center flex-col">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[800px] h-auto m-[20px]"
        >
          <h2 className="mb-20 text-center text-3xl font-semibold text-gray-700">
            Register
          </h2>

          {/* First row: Full Name and Email */}
          <div className="mb-4 flex justify-between space-x-4">
            <div className="flex-1">
              <label
                htmlFor="fullname"
                className="block text-base font-medium text-slate-800"
              >
                Full Name:
              </label>
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
              <label
                htmlFor="email"
                className="block text-base font-medium text-slate-800"
              >
                Email:
              </label>
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
              <label
                htmlFor="password"
                className="block text-base font-medium text-slate-800"
              >
                Password:
              </label>
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
              <label
                htmlFor="mobileNo"
                className="block text-base font-medium text-slate-800"
              >
                Mobile:
              </label>
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
              <label
                htmlFor="age"
                className="block text-base font-medium text-slate-800"
              >
                Age:
              </label>
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
              <label
                htmlFor="gender"
                className="block text-base font-medium text-slate-800"
              >
                Gender:
              </label>
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
            <label
              htmlFor="dob"
              className="block text-base font-medium text-slate-800"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full mt-3 p-3 border-b-2 rounded-lg outline-none bg-gray-100"
              required
            />
            <button
              type="submit"
              className="w-[40%] mt-5 ml-52 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </div>

          {/* Account */}
          <div className="w-full mt-3 p-3 text-xl font-medium text-slate-800 text-center flex items-center justify-center gap-1">
            <h1>Have an account?</h1>
            <Link to="/login" className="text-teal-700 font-bold">
              Log in
            </Link>
          </div>
        </form>

        <div className="flex space-x-4">
  {/* Google */}
  <Link to="/google-login">
    <div className="flex items-center p-5 border rounded-lg hover:bg-gray-100 transition duration-300">
      <img 
        src="/src/assets/google-icon.jpg" 
        alt="Google Icon" 
        className="w-10 h-10"
      />
      <div className="ml-3">
        <h1 className="text-xl font-semibold">Google</h1>
      </div>
    </div>
  </Link>

  {/* Facebook */}
  <Link to="/facebook-login">
    <div className="flex items-center p-5 border rounded-lg hover:bg-gray-100 transition duration-300">
      <img 
        src="/src/assets/Facebook_icon.jpg" 
        alt="Facebook Icon" 
        className="w-10 h-10 object-cover"
      />
      <div className="ml-3">
        <h1 className="text-xl font-semibold">Facebook</h1>
      </div>
    </div>
  </Link>
</div>

</div>
      </div>
   
  );
};

export default RegistrationForm;
