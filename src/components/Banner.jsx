import { Component } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
	width: 425px;
	height: 763px;
	background-color: gray;
`; 

export default class Banner extends Component {
	render() {
		return (
			<BannerWrapper/>
		)
	}
}