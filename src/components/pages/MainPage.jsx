import ErrorBoundary from "../ErrorBoundary"
import RandomCard from "../Random-card"
import Cards from "../Cards"
import Banner from "../Banner"
import { useState, useCallback } from "react"

const MainPage = (props) => {
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
				<ErrorBoundary>
					<Cards setSpinner={props.setSpinner} changeId={changeId}/>
				</ErrorBoundary>
				<Banner charId={id}/>
			</div>	
		</>
	)	
}	

export default MainPage;