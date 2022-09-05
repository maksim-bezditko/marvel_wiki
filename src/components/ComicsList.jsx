import { useState, useEffect, useMemo} from "react";
import styled from "styled-components";
import useMarvelService from "../services/marvelService";
import Error from "./Error";
import Spinner from "./Spinner";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.spinner {
		position: absolute;
		height: 40px;
		width: 40px;
	}
	ul {
		list-style-type: none;
		display: flex;
		column-gap: 66px;
		row-gap: 55px;
		flex-wrap: wrap;
		a {
			max-width: 225px;
			transition: all 0.2s linear 0.1s;
			img {
				margin-bottom: 10px;
				width: 225px;
				height: 346px;
			}
			h4 {
				font-family: 'Roboto Condensed';
				font-weight: 700;
				font-size: 14px;
				line-height: 16px;
				color: #000000;
				margin-bottom: 5px;
			}
			h5 {
				font-family: 'Roboto Condensed';
				font-weight: 700;
				font-size: 14px;
				line-height: 16px;
				color: rgba(0, 0, 0, 0.6);
			}
			&:hover {
				transform: scale(1.05);
			}
		}
	}
`;

const ComicsList = (props) => {
	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(16);
	const {getComics, loading, error} = useMarvelService();

	useEffect(() => {
		getComics(offset)
			.then(comics => {
				setComicsList(comics)
				setOffset(prev => prev + 8)
			})
		return () => {setComicsList([])}	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => document.addEventListener("scroll", bottom), 100)

		return () => {
			clearTimeout(timer)
			document.removeEventListener("scroll", bottom)
		}
	})

	const bottom = () => {
		const element = document.documentElement;
		if (element.scrollHeight <= element.clientHeight + element.scrollTop) {
			loadMore()
		}
	}

	const loadMore = () => {
		try {
			props.setSpinner(true)
			getComics(offset, false)
				.then((res) => {
					setComicsList(prev => [...prev, ...res])
					setOffset(prev => prev + 8)
				})
				.then(() => props.setSpinner(false))
				.catch(onError)
		}
		catch(error) {
			throw new Error("Couldn't load from the server!")
		}
	}

	const onError = () => {
		setComicsList([]);
		setOffset(null);
	}

	const renderItems = () => {
		return (
			<Wrapper>
				<ul>
					{comicsList.map((item, index) => {
						return (
							<Link to={`/comics/${item.id}`} key={index}>
								<img src={item.thumbnail} alt="char preview"/>
								<h4>{item.title}</h4>
								<h5>{item.price}</h5>
							</Link>
						)
					})}
				</ul>
			</Wrapper>
		)
	}
	const _error = useMemo(() => error ? <Error/> : null, [error]);
	const _loading = useMemo(() => loading ? <Spinner/> : null, [loading]);
	const _contents = useMemo(() => !(error || loading) || !loading ? renderItems() : null, [comicsList]);

	return (
		<>
			{_error}
			{_contents}
			{_loading}
		</>
	)
}

export default ComicsList;
