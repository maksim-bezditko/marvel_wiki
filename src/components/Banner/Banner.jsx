import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
import Skeleton from "../Skeleton/Skeleton";
import Error from "../Error/Error";
import useMarvelService from "../../services/marvelService";
import { useNavigate } from 'react-router-dom';
import { idContext } from "../../context/сontext";
import CharSearch from "../CharSearch/CharSearch";
import { Link } from 'react-router-dom';

export default function Banner() {

	const {error, loading, getCharacterById} = useMarvelService();
	const [char, setChar] = useState(null);

	const {charId} = useContext(idContext);

	const updateCharInfo = () => {
		if (!charId) {
			return;
		}
		setChar(null);
		getCharacterById(charId)
			.then((res) => setChar({
					name: res.name,
					id: res.id,
					homepage: res.homepage,
					wiki: res.wiki,
					description: res.description,
					comics: res.comics,
					thumbnail: res.thumbnail
			}))
			.catch(() => setChar(null))
	}

	useEffect(() => updateCharInfo(), [charId])

	const skeleton = char || loading || error ? null : <Skeleton/>;
	const _error = error ? <Error height={400}/> : null;
	const _loading = loading ? <Spinner/> : null;
	const view = (loading || error || !char) ? null : <View char={char}/>;


	return (
		<Container>
			<BannerWrapper maxHeight={document.documentElement.clientHeight - 400}>
				{_error}
				{_loading}
				{skeleton}
				{view}
			</BannerWrapper>
			<CharSearch/>			
		</Container>
	)
}

const View = (props) => {
	const {thumbnail, name, comics, description, id} = props.char;
	const navigate = useNavigate();

	return (
		<>
			<div className="main">
				<img src={thumbnail} className="avatar" alt="" />
				<div className="name_and_links">
					<h2>{name}</h2>
					<div className="buttons">
						<Link to={`/${id}`} className="homepage">Homepage</Link>
						<a target={"_blank"} rel={"noreferrer"} href={`https://www.google.com/search?q=${name.toLowerCase().split(" ").join("+")}`} className="wiki">Search</a>
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
					{comics.map((item, index) => {
						return (
							<div onClick={() => navigate(`/comics/${item.id}`)} key={index} className="item">{item.name}</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

const BannerWrapper = styled.div`
	/* width */
	::-webkit-scrollbar {
		width: 3px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #7a7a7aa1;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	max-height: ${(props) => props.maxHeight + "px"};
	width: 425px;
	align-self: flex-start;
	background-color: white;
	overflow-y: scroll;
	padding: 25px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
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
				cursor: pointer;
			}
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 10px;
	align-self: flex-start;
`;
 