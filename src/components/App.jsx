import { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import RandomCard from "./Random-card";
import Cards from "./Cards";
import Banner from "./Banner";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	.container {
		max-width: 1120px;
		margin: 0 auto;
		padding-left: 10px;
		padding-right: 10px;
		.main {
			margin-top: 53px;
			display: flex;
			justify-content: space-between;
		}
	}
`;


export default class App extends Component {
	render() {
		return (
			<Wrapper>
				<div className="container">
					<Header />
					<RandomCard />
					<div className="main">
						<Cards />
						<Banner/>
					</div>
				</div>
			</Wrapper>
		)
	}
}