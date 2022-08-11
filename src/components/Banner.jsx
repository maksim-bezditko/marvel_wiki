import { Component } from "react";
import styled from "styled-components";
import marvelServices from "../services/marvelService";
import Spinner from "./Spinner";
import Skeleton from "./Skeleton";
import Error from "./Error";

const instance = new marvelServices()

export default class Banner extends Component {
	state = {
		error: false,
		loading: false,
		char: null
	}

	onLoading = () => {
		this.setState({
			char: null,
			error: false,
			loading: true
		})
	}

	onError = () => {
		this.setState({
			char: null,
			error: true,
			loading: false,
		})
	}

	onLoad = () => {
		this.setState({
			loading: false,
			error: false
		})
	} 

	updateCharInfo = () => {
		if (!this.props.charId) {
			return;
		}
		this.onLoading()
		instance
			.getCharacterById(this.props.charId)
			.then((res) => this.setState({
				char: {
					name: res.name,
					id: res.id,
					homepage: res.homepage,
					wiki: res.wiki,
					description: res.description,
					comics: res.comics,
					thumbnail: res.thumbnail
				}
			}))
			.then(this.onLoad)
			.catch(this.onError)
	}

	componentDidMount() {
		this.updateCharInfo()
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.updateCharInfo()
		}
	}

	render() {
		const {error: err, loading: load, char} = this.state;

		const skeleton = char || load || err ? null : <Skeleton/>;
		const error = err ? <Error height={400}/> : null;
		const loading = load ? <Spinner/> : null;
		const view = (load || err || !char) ? null : <View char={char}/>;


		return (
			<BannerWrapper>
				{error}
				{loading}
				{skeleton}
				{view}
			</BannerWrapper>
		)
	}
}

const View = (props) => {
	const {thumbnail, name, comics, homepage, wiki, description} = props.char;


	return (
		<>
			<div className="main">
				<img src={thumbnail} className="avatar" alt="" />
				<div className="name_and_links">
					<h2>{name}</h2>
					<div className="buttons">
						<a href={homepage} className="homepage">Homepage</a>
						<a href={wiki} className="wiki">Wiki</a>
					</div>
				</div>
			</div>
			<div className="description">
				{description}
			</div>
			<div className="comics">
				<div className="heading">
					Comics:
				</div>
				<div className="items">
					{comics.length ? null : "No comics about the character"}
					{comics.map((name, index) => {
						return (
							<div key={index} className="item">{name}</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

const BannerWrapper = styled.div`
	-ms-overflow-style: none;  /* Internet Explorer 10+ */
   scrollbar-width: none;
	::-webkit-scrollbar { 
		display: none;  /* Safari and Chrome */
	}
	width: 425px;
	align-self: flex-start;
	background-color: white;
	overflow-y: scroll;
	padding: 25px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
	/* position: relative; */
	position: -webkit-sticky;
  	position: sticky;
  	top: 10px;
	img {
		display: block;
	}
	.main {
		display: flex;
		.avatar {
			width: 150px;
			height: auto;
			margin-right: 25px;
		}
		.name_and_links {
			h2 {
				font-family: 'Roboto Condensed';
				font-weight: 700;
				font-size: 22px;
				line-height: 26px;
				color: #000000;
				text-transform: uppercase;
				margin-bottom: 35px;
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
					/* @media (max-width: 1089px) {
						width: 100%;

					} */
				}
			}
		}
	}
	.description {
		margin-top: 15px;
		margin-bottom: 10px;
		font-family: 'Roboto Condensed';
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #000000;
	}
	.comics {
		.heading {
			font-family: 'Roboto Condensed';
			font-weight: 700;
			font-size: 18px;
			line-height: 21px;
			color: #000000;
			margin-bottom: 10px;
		}
		.items {
			.item {
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				width: 375px;
				/* height: 25px; */
				font-family: 'Roboto Condensed';
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				color: #000000;
				padding: 4px 10px;
				&:not(:last-child) {
					margin-bottom: 10px;
				}
			}
		}
	}
`;
 