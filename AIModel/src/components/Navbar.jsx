import { Link } from "react-router-dom"; // If you're using react-router-dom for routing

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-blue-950 p-4">
        <div className="max-w-7xl text-xl mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">Logo</div>
          <ul className="flex space-x-8 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className=" rounded">Registration</button>
              </Link>
            </li>
            <li>
            <Link to="/login">
                <button className=" rounded">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
