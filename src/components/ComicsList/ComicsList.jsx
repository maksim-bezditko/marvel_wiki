import { useState, useEffect, useMemo, useCallback, useContext} from "react";
import styled from "styled-components";
import useMarvelService from "../../services/marvelService";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";
import { Link } from 'react-router-dom';
import { spinnerContext } from "../../context/сontext";

import "./ComicsList.css"

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(16);
	const {getComics, loading, error} = useMarvelService();

	const setSpinner = useContext(spinnerContext);

	useEffect(() => {
		getComics(offset)
			.then(comics => {
				setComicsList(comics)
				setOffset(prev => prev + 8)
			})
		return () => {
			setComicsList([])
			setSpinner(false)
		}	
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
			setSpinner(true)
			getComics(offset, false)
				.then((res) => {
					setComicsList(prev => [...prev, ...res])
					setOffset(prev => prev + 8)
				})
				.then(() => setSpinner(false))
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

	const renderItems = useCallback(() => {
		return (
			<div className="comics-list-wrapper">
				<ul>
					{comicsList.map((item, index) => {
						return (
							<Link className="list-item" to={`/comics/${item.id}`} key={index}>
								<img className="item-avatar" src={item.thumbnail} alt="char preview"/>
								<h4 className="item-title">{item.title}</h4>
								<h5 className="item-price">{item.price}</h5>
							</Link>
						)
					})}
				</ul>
			</div>
		)
	}, [comicsList])

	const _error = useMemo(() => error ? <Error/> : null, [error]);
	const _loading = useMemo(() => loading ? <Spinner/> : null, [loading]);
	const _contents = useMemo(() => !(error || loading) || !loading ? renderItems() : null, [error, loading, renderItems]);

	return (
		<div className="wrapper">
			{_error}
			{_contents}
			{_loading}
		</div>
	)
}

export default ComicsList;
