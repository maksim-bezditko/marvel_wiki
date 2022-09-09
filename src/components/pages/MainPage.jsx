import ErrorBoundary from "../ErrorBoundary"
import RandomCard from "../Random-card"
import Cards from "../Cards"
import Banner from "../Banner"
import { useState, useCallback } from "react"

import { idContext } from "../../context/сontext";

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
			<div className="characters">
				<Provider value={{changeId, charId: id}}>
					<ErrorBoundary>
						<Cards/>
					</ErrorBoundary>
					<Banner/>
				</Provider>
			</div>	
		</>
	)	
}	

export default MainPage;