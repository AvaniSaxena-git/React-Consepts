
import  { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/66/c1/29/66c12990e044a5a6cf899e2b193bdebf.jpg)" }}>
    <form onSubmit={handleSubmit} className="   bg-white-900 p-6 rounded-lg shadow-lg w-[500px] h-[600px] mr-[500px] "> 
      <h2 className="mb-5 text-center  text-3xl font-semibold text-gray-700">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-base mt-11 font-medium text-slate-800 ">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-3 p-2 border-b-2  rounded-lg outline-none bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block  mt-8 font-medium text-base text-slate-800">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-3 p-2  rounded-lg outline-none border-b-2 bg-gray-100"
          required
        />
      </div>
      <button type="submit" className=" px-36 ml-12 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-14">
        Login
      </button>
    </form>
  </div>
  );
};


export default Login;