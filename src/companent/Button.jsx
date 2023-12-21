import { Link } from "react-router-dom";
import "./Button.css";
const Button = () => {
  return <Link to='/dashboard'>
    <button className="dashbord tracking-[2px]">Let’s Explore</button>
  </Link>;
};

export default Button;
