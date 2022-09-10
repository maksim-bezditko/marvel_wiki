import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary"
import RandomCard from "../../RandomCard/RandomCard"
import Cards from "../../Cards/Cards"
import Banner from "../../Banner/Banner"
import { useState, useCallback } from "react"
import styled from "styled-components"
import { idContext } from "../../../context/сontext";

const {Provider} = idContext;

const MainPage = () => {
	const [id, setId] = useState(null);

	const changeId = useCallback(value => {
		setId(value)
	}, [])

	return (
		<>
			<ErrorBoundary>
				<RandomCard />
			</ErrorBoundary>
			<Characters>
				<Provider value={{changeId, charId: id}}>
					<ErrorBoundary>
						<Cards/>
					</ErrorBoundary>
					<Banner/>
				</Provider>
			</Characters>	
		</>
	)	
}	

const Characters = styled.div`
	margin-top: 53px;
	display: flex;
	justify-content: space-between;
`;

export default MainPage;