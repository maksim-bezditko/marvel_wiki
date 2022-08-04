import { Component } from "react";
import styled from "styled-components";
import img from "../img/abyss.jpg"

const CardWrapper = styled.div`
	height: 318px;
	width: 200px;
	flex-basis: 30.3%;
	.card {
		display: flex;
		flex-direction: column;
		transition: all 0.2s;
		&:hover {
			box-shadow: 0px 5px 20px #9F0013;
			cursor: pointer;
		}
	}
	.card img {
		width: 200px;
		height: 200px;
	}
	.card {
		.name {
			width: 200px;
			height: 118px;
			padding: 15px;
			text-transform: uppercase;
			font-weight: 700;
			background-color: #232222;
			color: white;
		}
	}
`;

class Card extends Component {
	render() {
		return (
			<CardWrapper>
				<div className="card">
					<img src={img} alt="" />
					
					<div className="name">
						Abyss
					</div>
				</div>
			</CardWrapper>
		)
	}
} 

const AllCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 30px;
	column-gap: 25px;
	max-width: 650px;
`;

export default class Cards extends Component {
	render() {
		return (
			<AllCards>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</AllCards>
		)
	}
}