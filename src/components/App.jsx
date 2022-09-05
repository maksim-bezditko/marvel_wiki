import styled from "styled-components";
import { useState } from "react";
import Header from "./Header";
import MainPage from "./pages/MainPage";
import Comics from "./pages/Comics";
import Comic from "./Comic";
import { LoadingMoreSpinner } from "./LoadingMoreSpinner";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {

	const [loading, setLoading] = useState(false)

	const _loading = loading ? <LoadingMoreSpinner/> : null;

	return (
		<Router>
			<Wrapper> 
				{_loading}
				<div className="container">
					<Header />
					<Routes>
						<Route path="/comics" element={<Comics setSpinner={setLoading}/>}/>
						<Route path="/comics/:comicId" element={<Comic/>}/>
						<Route path="/" element={<MainPage setSpinner={setLoading}/>}/>
					</Routes>
				</div>
				<br /><br /><br /><br /><br />
			</Wrapper>
		</Router>
	)
}


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
	}
	.vision {
		position: fixed;
		bottom: 0;
		right: 0;
	}
`;