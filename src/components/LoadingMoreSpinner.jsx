import styled from "styled-components";
import spinner from "../img/Spinner-5.gif";

export function LoadingMoreSpinner() {
	const spinnerStyle = {
		position: "fixed",
		right: 10,
		top: 5
	}

	return (
		<img src={spinner} style={spinnerStyle} alt="loading"/>
	)

}

