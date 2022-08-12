import { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import RandomCard from "./Random-card";
import Cards from "./Cards";
import Banner from "./Banner";
import ErrorBoundary from "./ErrorBoundary";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	.container {
		max-width: 1120px;
		margin: 0 auto;
		padding-left: 10px;
		padding-right: 10px;
		.main_part {
			margin-top: 53px;
			display: flex;
			justify-content: space-between;
		}
	}
	.vision {
		position: fixed;
		bottom: 0;
		right: 0;
	}
`;


export default class App extends Component {
	state = {
		id: null
	}

	changeId = (value) => {
		this.setState(() => ({
			id: value
		}))
	}

	render() {
		return (
			<Wrapper>
				<div className="container">
					<Header />
					<ErrorBoundary>
						<RandomCard />
					</ErrorBoundary>
					<div className="main_part">
						<ErrorBoundary>
							<Cards changeId={this.changeId}/>
						</ErrorBoundary>
						<Banner charId={this.state.id}/>
					</div>
				</div>
				<br /><br /><br /><br /><br />
			</Wrapper>
		)
	}
}