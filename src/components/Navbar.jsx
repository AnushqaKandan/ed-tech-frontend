import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <Logo />
      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
