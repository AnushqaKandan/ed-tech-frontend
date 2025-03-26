import { Link } from "react-router-dom";

Link;
function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1 className="text-2xl font-bold text-indigo-600">EduCourse</h1>
      </Link>
    </div>
  );
}

export default Logo;
