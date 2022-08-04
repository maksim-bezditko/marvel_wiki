import { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	height: 137px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	font-family: "Roboto Condensed";
	.logo {
		span {
			color: #9F0013;
		}
		color: #000000;
		font-size: 28px;

	}
	.options {
		.active {
			color: #9F0013;
		}
		color: #000000;
		font-size: 24px;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<div className="logo">
					<span>Marvel</span> information portal
				</div>
				<div className="options">
					<span className="active">Characters</span> / <span>Comics</span>
				</div>
			</HeaderWrapper>		
		)
	}
}