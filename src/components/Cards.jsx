import { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

import marvelServices from "../services/marvelService"

const AllCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 30px;
	column-gap: 25px;
	max-width: 650px;
`;

const marvelService = new marvelServices();

export default class Cards extends Component {
	state = {
		data: [],
		active: null
	}

	componentDidMount() {
		marvelService.getCharacters()
			.then((res) => {
				this.setState(() => ({
					data: res
				}))
			})
	}

	makeActive = (id) => {
		this.setState({
			active: id
		})
	}

	render() {		
		const cards = this.state.data.map((item) => {

			const onClick = () => {
				this.makeActive(item.id)
				this.props.changeId(item.id)
			}

			return (
				<Card 
					name={item.name} 
					makeActive={this.makeActive} 
					thumbnail={item.thumbnail} 
					key={item.id} 
					onClick={onClick}
					active={this.state.active === item.id}
					/>)
		})

		return (
			<AllCards>
				{cards}
			</AllCards>
		)
	}
}