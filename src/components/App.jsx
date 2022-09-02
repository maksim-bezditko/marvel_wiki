import styled from "styled-components";

import Header from "./Header";
import MainPage from "./pages/MainPage";
import Comics from "./pages/Comics";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

	return (
		<Router>
			<Wrapper>
				<div className="container">
					<Header />
					<Switch>
						<Route exact path="/comics">
							<Comics/>
						</Route>
						<Route exact path="/">
							<MainPage/>
						</Route>
					</Switch>
				</div>
				<br /><br /><br /><br /><br />
			</Wrapper>
		</Router>
	)
}


// Banner and Cards