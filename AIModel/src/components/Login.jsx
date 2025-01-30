import React from "react";
import  { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

  };

  return (
    <div className="flex justify-center items-center h-screen ml-[900px] bg-center bg-no-repeat" style={{ backgroundImage: "url(https://i.pinimg.com/736x/0f/a0/02/0fa002a2aa800e88a798017cf974a83a.jpg)" }}>
    <form onSubmit={handleSubmit} className=" ml-[400px] bg-white-900 p-6 rounded-lg shadow-lg w-[480px] h-[500px] :">
      <h2 className="mb-5 text-center text-3xl font-semibold text-white">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-base mt-8 font-medium text-white ">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 p-2 border-b-2  rounded-lg outline-none bg-blue-200"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block  mt-8 font-medium text-base text-white">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-2 p-2  rounded-lg outline-none border-b-2 bg-blue-200 "
          required
        />
      </div>
      <button type="submit" className=" px-36 ml-14 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-11">
        Login
      </button>
    </form>
  </div>
  );
};


export default Login;