import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        <Link to="/">Iemoji</Link>
      </h2>
    </div>
  );
};

export default Navbar;
