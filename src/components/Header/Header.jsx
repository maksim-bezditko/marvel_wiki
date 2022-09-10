import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <NavLink to="/">
          <span>Marvel</span> information portal
        </NavLink>
      </div>
      <div className="options">
        <NavLink to="/" style={({isActive}) => ({color: isActive ? "#9F0013" : "black"})}>
          Characters
        </NavLink>
		  {" "}/{" "}
        <NavLink to="/comics" style={({isActive}) => ({color: isActive ? "#9F0013" : "black"})}>
          Comics
        </NavLink>
      </div>
    </div>
  );
}
