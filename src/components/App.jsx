import styled from "styled-components";
import { useState, lazy, Suspense } from "react";
import Header from "./Header";
import LoadingMoreSpinner from "./LoadingMoreSpinner";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"))
const Comics = lazy(() => import("./pages/Comics"))
const Comic = lazy(() => import("./Comic"))

export default function App() {

	const [loading, setLoading] = useState(false)

	const _loading = loading ? <LoadingMoreSpinner/> : null;

	return (
		<Suspense fallback="">
			<Router>
				<Wrapper> 
					{_loading}
					<div className="container">
						<Header />
						<Routes>
							<Route path="/comics" element={<Comics setSpinner={setLoading}/>}/>
							<Route path="/comics/:comicId" element={<Comic/>}/>
							<Route path="/" element={<MainPage setSpinner={setLoading}/>}/>
							<Route path="*" element={<Navigate replace to="/"/>}/>
						</Routes>
					</div>
					<br /><br /><br /><br /><br />
				</Wrapper>
			</Router>
		</Suspense>	
		
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