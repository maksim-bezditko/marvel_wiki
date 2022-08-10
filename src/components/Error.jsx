import { Component } from "react";
import styled from "styled-components";
import errorGif from "../img/error.gif";

const ErrorItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	img {
		margin-left: 30px;
		height: ${(props) => props.height ? props.height + "px" : "auto"};
	}
`;

export default class Error extends Component {
	render() {
		return (
			<ErrorItem height={this.props.height}> 
				<img src={errorGif} alt="error" />
			</ErrorItem>
		)
	}
}