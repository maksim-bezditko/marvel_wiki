import Ads from "../Ads";
import ComicsList from "../ComicsList";

const Comics = (props) => {
	return (
		<div className="comics">
			<Ads/>
			<ComicsList setSpinner={props.setSpinner}/>
		</div>
	)
}

export default Comics;