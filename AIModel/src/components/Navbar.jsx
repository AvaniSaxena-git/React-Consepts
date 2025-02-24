import { Link } from "react-router-dom"; // If you're using react-router-dom for routing

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-teal-900 p-5">
        <div className="max-w-8xl text-2xl ml-8 mx-auto flex justify-between  items-center">
          {/* Logo Image */}
          <div className="flex items-center">
            <img
              className="h-12 rounded-full w-auto" // You can adjust the height and width as needed
            />
           <p className="text-slate-100 ml-1 font-bold text-3xl">WellnessAI</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8  text-white">
            <li>
              <Link to="/" className="hover:text-gray-300 ">
                Home
              </Link>
            </li>
           
           
            <li>
              <Link to="/register">
                <button className="rounded">Register</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="rounded">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
