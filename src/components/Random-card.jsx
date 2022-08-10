import { Component } from "react";
import styled from "styled-components";
import shield from "../img/mjolnir.png";
import Error from "./Error";
import Spinner from "./Spinner"

import marvelService from "../services/marvelService";

const RandomCardWrapper = styled.div`
	display: flex;
	box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
	.card {
		align-items: center;
		width: 50%;
		flex-basis: 50%;
		padding: 35px 40px;
		display: flex;
		img {
			width: 180px;
			height: 190px;
			margin-right: 30px;
		}
		.card-info {
			h2 {
				font-weight: 700;
				font-family: "Roboto Condensed";
				font-size: 22px;
				line-height: 29px;
				margin-bottom: 10px;
				margin-top: 0;
				text-transform: uppercase;
			}
			p {
				font-size: 14px;
				line-height: 16.41px;
				margin-bottom: 13px;
				min-height: 90px;
				width: 265px;
			}
			.buttons {
				display: flex;
				row-gap: 10px;
				justify-content: space-between;
				flex-wrap: wrap;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					text-transform: uppercase;
					text-decoration: none;
					position: relative;
					width: 101px;
					height: 38px;
					background-color: #9F0013;
					color: white;
					font-size: 14px;
					transition: transform 0.2s ease-in-out 0.1s;
					cursor: pointer;
					clip-path: polygon(100% 0, 100% 72%, 86% 100%, 0 100%, 0 30%, 13% 0);
					&:nth-child(2) {
						background-color: #5C5C5C;
						margin-right: 33px;
						@media (max-width: 1089px) {
							margin-right: 0;
						}
					}
					&:nth-child(1) {
						margin-right: 10px;
					}
					&:hover {
						transform: translateY(-4px);
						cursor: pointer;
					}
					@media (max-width: 1089px) {
						width: 100%;
					}
				}
			}
		}
	}
	.banner {
		position: relative;
		min-width: 50%;
		flex-basis: 50%;
		background-color: black;
		padding: 35px 40px;
		h2 {
			font-size: 24px;
			font-weight: 700;
			color: white;
			position: relative;
			z-index: 1;
		}
		.margin {
			margin-bottom: 33px;
		}
		button {
			text-transform: uppercase;
			position: relative;
			width: 101px;
			height: 38px;
			background-color: #9F0013;
			color: white;
			font-size: 14px;
			transition: all 0.2s ease-in-out 0.1s;
			cursor: pointer;
			margin-top: 30px;
			&:before {
				content: "";
				width: 10px;
				height: 20px;
				transform: rotate(0.125turn) translate(-9px, -4px) ;
				position: absolute;
				top: 0;
				left: 0;
				background-color: black;
			}
			&:after {
				content: "";
				width: 10px;
				height: 20px;
				transform: rotate(0.125turn) translate(9px, 4px);
				position: absolute;
				bottom: 0;
				right: 0;
				background-color: black;
			}
			&:hover {
				transform: translateY(-4px);
				cursor: pointer;
			}
		}
		.shield {
			position: absolute;
			bottom: 14px;
			right: 0;
			transform: translateX(30px);
			z-index: 0;
		}
	}
`;

export default class RandomCard extends Component {
	componentDidMount() {
		this.updateChar()
	}
	
	instance = new marvelService()

	state = {
		char: null,
		loading: true,
		error: false
	}

	onLoad = () => {
		this.setState(() => ({
			loading: false,
			error: false
		}))
	}

	onError = () => {
		this.setState(() => ({
			char: null,
			loading: false,
			error: true
		}))
	}

	updateChar = () => {
		this.setState({
			loading: true
		})
		this.instance.getCharacter()
			.then(res => {
				this.setState({
					char: {
						name: res.name,
						description: res.description,
						thumbnail: res.thumbnail,
						homepage: res.homepage,
						wiki: res.wiki
					}
				})
			})
			.then(this.onLoad)
			.catch(this.onError)

	}

	render() {
		// const currentFragment = (() => {
		// 	switch (this.state.status) {
		// 		case "error": 
		// 			return <Error/>
		// 		case "done":
		// 			return (
		// 				
		// 			)
		// 		default: 
		// 			return (
		// 				<img style={{
		// 					margin: "0 auto",
		// 					width: "50px",
		// 					height: "50px"
		// 				}}src={spinner} alt="loading" />
		// 			)
					
		// 	}
		// })()

		const { loading, error, char } = this.state;

		const _loading = loading ? <Spinner/> : null;
		const _error = error ? <Error/> : null;
		const _view = !(_loading || _error) ? <View char={char}/> : null;

		return (
			<RandomCardWrapper>
				<div className="card">
					{_loading}
					{_error}
					{_view}
				</div>
				<div className="banner">
					<h2>Random character for today!</h2> 
					<h2 className="margin">Do you want to get to know him better?</h2>
					<h2>Or choose another one</h2>
					<button onClick={this.updateChar}>Try it</button>
					<img className="shield" src={shield} alt="shield"/>
				</div>
			</RandomCardWrapper>
		)
	}
}

const View = (props) => {
	const {thumbnail, name, description, homepage, wiki} = props.char;

	return (
		<>
			<img src={thumbnail ? thumbnail : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"} alt="" />
			<div className="card-info">
				<h2>{name}</h2>
				<p>{description}</p>
				<div className="buttons">
					<a href={homepage}>Homepage</a>
					<a href={wiki}>Wiki</a>
				</div>
			</div>
		</>
	)
}