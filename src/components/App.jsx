import styled from "styled-components";
import Header from "./Header";
import RandomCard from "./Random-card";
import Cards from "./Cards";
import Banner from "./Banner";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import Ads from "./Ads";
import ComicsList from "./ComicsList";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	.container {
		max-width: 1120px;
		margin: 0 auto;
		padding-left: 10px;
		padding-right: 10px;
		.characters {
			margin-top: 53px;
			display: flex;
			justify-content: space-between;
		}
		.comics {
			display: grid;
			place-items: center;
		}
		/* img {
			width: 100%;
		} */
	}
	.vision {
		position: fixed;
		bottom: 0;
		right: 0;
	}
`;


export default function App() {
	const [id, setId] = useState(null);

	const changeId = value => {
		setId(value)
	}

	return (
		<Wrapper>
			<div className="container">
				<Header />
				<ErrorBoundary>
					<RandomCard />
				</ErrorBoundary>
				<div className="characters">
					<ErrorBoundary>
						<Cards changeId={changeId}/>
					</ErrorBoundary>
					<Banner charId={id}/>
				</div>
				{/* <div className="comics">
					<Ads/>
					<ComicsList/>
				</div> */}
			</div>
			<br /><br /><br /><br /><br />
		</Wrapper>
	)
}


// Banner and Cards