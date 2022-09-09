import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-family: "Roboto Condensed";
  .logo {
    a {
      span {
        color: #9f0013;
      }
      color: #000000;
      font-size: 28px;
    }
  }
  .options {
    a {
      color: #000000;
      font-size: 24px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
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
    </HeaderWrapper>
  );
}
