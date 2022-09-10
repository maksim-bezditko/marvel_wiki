import styled from "styled-components"
import { useState, useCallback, useContext } from "react";
import useMarvelService from "../../services/marvelService";
import { alphabetizeByProperty } from "@writetome51/alphabetize-by-property";
import { useNavigate } from "react-router-dom";
import { spinnerContext } from "../../context/сontext";

export default function CharSearch() {
	const [term, setTerm] = useState("");
	const [items, setItems] = useState([]);

	const {searchChar, error, loading} = useMarvelService();

	const setSpinner = useContext(spinnerContext);

	const onChange = useCallback((e) => {
		setSpinner(true)
		setTerm(e.target.value)
		if (e.target.value !== "") {
			searchChar(e.target.value)
				.then(res => {
					setSpinner(false)
					alphabetizeByProperty("name", res);
					setItems(res)
				})
		} else {
			setItems([])
			setSpinner(false)
		}
	}, [])

	const navigate = useNavigate();

	return (
		<CharSearchWrapper>
			<div className="searchInput">
				<p>Wanna search for a particular character?🧐</p>
				<input type="text" 
						 value={term} 
						 onChange={onChange}
						 placeholder="Mashaman, for example 😉"/>
				<div className="suggestions">
					{items.map((item, index) => {
						return (
							<div onClick={() => navigate(`/${item.id}`)} key={index} className="suggestion">{item.name}</div>
						)
					})}
				</div>
			</div>
		</CharSearchWrapper>
	)
}

const CharSearchWrapper = styled.div`
	margin-top: 20px;
	p {
		margin-bottom: 10px;
	}
	.searchInput {
		input:focus {
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.267);
			outline: none;
		}
		input {
			width: 100%;
			height: 38px;
			background: #FFFFFF;
			box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.447);
			padding: 10px;
			font-family: 'Roboto Condensed';
			font-weight: 400;
			font-size: 14px;
			line-height: 16px;
			color: rgba(0, 0, 0, 0.782);
			transition: all 0.2s ease-in-out 0.1s;
		}
	}
	.suggestions {
		::-webkit-scrollbar {
			width: 3px;
		}
		::-webkit-scrollbar-track {
			background: transparent;
		}
		::-webkit-scrollbar-thumb {
			background: #7a7a7aa1;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.342);
		margin-top: 7px;
		max-height: 120px;
		overflow-y: scroll;
		.suggestion {
			background-color: #dddddd8f;
			padding: 5px;
			border-bottom: 1px solid #FFFFFF;
			border-radius: 2px;
			cursor: pointer;
			box-sizing: content-box;
		}
	}
`;
