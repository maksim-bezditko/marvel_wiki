import styled from "styled-components";
import { useState, lazy, Suspense } from "react";
import Header from "../Header/Header";
import LoadingMoreSpinner from "../LoadingMoreSpinner/LoadingMoreSpinner";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { spinnerContext } from "../../context/сontext";
import { CharPage } from "../pages/CharPage/CharPage";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"))
const Comics = lazy(() => import("../pages/Comics/Comics"))
const Comic = lazy(() => import("../pages/Comic/Comic"))

const {Provider} = spinnerContext;

export default function App() {

	const [loading, setLoading] = useState(false)

	const _loading = loading ? <LoadingMoreSpinner/> : null;

	return (
		<Provider value={setLoading}>
			<Suspense fallback="">
				<Router>
					<Wrapper> 
						{_loading}
						<Container>
							<Header />
							<Routes>
								<Route path="/comics" element={<Comics/>}/>
								<Route path="/comics/:comicId" element={<Comic/>}/>
								{/* <Route path="/:charId" element={<CharPage/>}/>
								<Route path="/" element={<MainPage/>}/>
								<Route path="*" element={<Navigate replace to="/"/>}/> */}
							</Routes>
						</Container>
						<br /><br /><br /><br /><br />
					</Wrapper>
				</Router>
			</Suspense>	
		</Provider>
		
	)
}


const Wrapper = styled.div`
	overflow: hidden;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1120px;
	margin: 0 auto;
	padding-left: 20px;
	padding-right: 20px;
	flex: 1 1 auto;
	@media (max-width: 500px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`;