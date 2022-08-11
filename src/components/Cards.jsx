import { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import Error from "./Error";

import marvelServices from "../services/marvelService"
import Spinner from "./Spinner";

const marvelService = new marvelServices();

export default class Cards extends Component {
	state = {
		data: null,
		active: null,
		loading: true,
		error: false,
		offset: 0
	}

	onLoading = () => {
		this.setState({
			loading: true,
			error: false,
			active: null
		})
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true,
			active: null,
			data: null,
			offset: null
		})
	}

	onLoad = () => {
		this.setState({
			loading: false,
			error: false
		})
	}

	componentDidMount() {
		this.onLoading()
		marvelService.getCharacters(this.state.offset)
			.then((res) => {
				this.setState(({offset}) => ({
					data: res,
					offset: offset + 9
				}))
			})
			.then(this.onLoad)
			.catch(this.onError)
	}

	makeActive = (id) => {
		this.setState({
			active: id
		})
	}

	onClick = (item) => {
		this.makeActive(item.id)
		this.props.changeId(item.id)
	}

	onButtonClick = () => {
		this.onLoading()
		marvelService.getCharacters(this.state.offset)
			.then((res) => {
				this.setState(({data, offset}) => ({
					data: [
						...data,
						...res
					],
					offset: offset + 9
				}))
			})
			.then(this.onLoad)
			.catch(this.onError)
		
	}

	render() {
		const error = this.state.error ? <Error/> : null;
		const loading = this.state.loading ? <Spinner/> : null;
		const contents = !(this.state.error || this.state.loading) || !this.state.loading ? <View data={this.state.data} onButtonClick={this.onButtonClick} onClick={this.onClick} makeActive={this.makeActive} id={this.state.active}/> : null;   
		return (
			<>
				{error}
				{contents}
				{loading}
			</>
		)
	}
}

const View = (props) => {
	const cards = props.data.map((item) => {
		return (
			<Card 
				name={item.name} 
				makeActive={props.makeActive} 
				thumbnail={item.thumbnail} 
				key={item.id} 
				onClick={() => props.onClick(item)}
				active={props.id === item.id}
				/>)
	})

	return (
		<Wrapper>
			<AllCards>
				{cards}
			</AllCards>
			<Button onClick={props.onButtonClick} className="more">Load more</Button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AllCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 30px;
	column-gap: 25px;
	max-width: 650px;
	justify-content: center;
`;

const Button = styled.div`
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
	&:hover {
		transform: translateY(-4px);
		cursor: pointer;
	}
`;