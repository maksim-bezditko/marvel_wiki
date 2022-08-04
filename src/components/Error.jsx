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
	}
`;

export default class Error extends Component {
	render() {
		return (
			<ErrorItem>
				<img src={errorGif} alt="error" />
			</ErrorItem>
		)
	}
}