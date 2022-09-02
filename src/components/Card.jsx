import styled from "styled-components";

const CardWrapper = styled.div`
	height: 318px;
	width: 200px;
	flex-basis: 30.3%;
	transition: all 0.3s ease-in-out 0.2s;
	.card {
		display: flex;
		flex-direction: column;
		transition: all 0.2s;
		box-shadow: ${(props) => props.active};
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

export default function Card(props) {
	return (
		<CardWrapper ref={props.updateRefs} onClick={props.onClick} active={props.active ? "0px 5px 20px #9F0013" : "none"}>
			<div className="card">
				<img src={props.thumbnail} alt="" />
				<div className="name">
					{props.name}
				</div>
			</div>
		</CardWrapper>
	)
}