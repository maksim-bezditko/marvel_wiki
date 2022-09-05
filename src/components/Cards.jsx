import { useState, useEffect, useRef, useMemo } from "react";

import Card from "./Card";
import Error from "./Error";
import Spinner from "./Spinner";

import useMarvelService from "../services/marvelService"
import styled from "styled-components";

import "./test.css";

export default function Cards(props) {
	
	const {error, loading, getCharacters} = useMarvelService();

	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(210);

	const onError = () => {
		setData([]);
		setOffset(null);
	}

	useEffect(() => {
		console.log("u")
		getCharacters(offset)
			.then((res) => {
				setData([...res])
				setOffset(offset + 9)
			})
			// .then(onLoad)
			.catch(onError)
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => document.addEventListener("scroll", bottom), 100)
		// document.addEventListener("scroll", bottom)

		return () => {
			clearTimeout(timer)
			document.removeEventListener("scroll", bottom)
		}
	})

	const loadMore = () => {
		console.log("s")
		
		try {
			props.setSpinner(true)
			getCharacters(offset, false)
				.then((res) => {
					setData(prev => [...prev, ...res])
					setOffset(prev => (prev + 9))
				})
				.then(() => props.setSpinner(false))
				.catch(onError)

		}
		catch(error) {
			throw new Error("Couldn't load from the server!")
		}
	}

	const bottom = () => {
		const element = document.documentElement;
		if (element.scrollHeight <= element.clientHeight + element.scrollTop) {
			loadMore()
		}
	}

	const onClick = (item) => {
		props.changeId(item.id)
	}

	const itemRefs = useRef([]); 

	const updateActiveItem = (index) => {
		itemRefs.current.forEach(item => {
			item.classList.remove("active1")
		})
		itemRefs.current[index].classList.add('active1')
	}

	const renderItems = () => {
		const cards = data.map((item, index) => {
			return (
				<Card 
					name={item.name}
					thumbnail={item.thumbnail} 
					key={item.id} 
					onClick={
						() => {
							onClick(item)
							updateActiveItem(index)
						}
					}
					updateRefs={(ref) => {
						itemRefs.current[index] = ref
					}}
					/>)
		})
	
		return (
			<Wrapper>
				<AllCards>
					{cards}
				</AllCards>
			</Wrapper>
		)
	}

	const _error = useMemo(() => error ? <Error/> : null, [error]);
	const _loading = useMemo(() => loading ? <Spinner/> : null, [loading]);
	const _contents = useMemo(() => !(error || loading) || !loading ? renderItems() : null, [data]);
	return (
		<>
			{_error}
			{_contents}
			{_loading}
		</>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		text-decoration: none;
		position: relative;
		width: 170px;
		height: 38px;
		background-color: #9F0013;
		color: white;
		font-size: 14px;
		transition: transform 0.2s ease-in-out 0.1s;
		cursor: pointer;
		clip-path: polygon(6% 0, 100% 0, 100% 74%, 95% 100%, 0 100%, 0 26%);
		margin-top: 45px;
		&:hover:enabled {
			transform: translateY(-4px);
			cursor: pointer;
		}
		&:disabled {
			filter: grayscale(.5)
		}
	} 
`;

const AllCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 30px;
	column-gap: 25px;
	max-width: 650px;
	justify-content: center;
`;