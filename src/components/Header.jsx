import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

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
				color: #9F0013;
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

const styles = {
	color: "#9F0013"
}

export default function Header() {
	return (
		<HeaderWrapper>
			<div className="logo">
				<Link exact to="/"><span>Marvel</span> information portal</Link>
			</div>
			<div className="options">
				<NavLink exact to='/' activeStyle={styles}>Characters</NavLink> / <NavLink exact to='/comics' activeStyle={styles}>Comics</NavLink>
			</div>
		</HeaderWrapper>		
	)
}