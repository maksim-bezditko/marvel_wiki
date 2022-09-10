import avengers from "../../img/Avengers.png";
import avengersLogo from "../../img/Avengers_logo.png";
import "./Ads.css"

const Ads = () => {
	
	return (
		<div className="banner-wrapper">
			<img src={avengers} alt="avengers" />
			<h2>New comics every week!<br/>Stay tuned!</h2>
			<img src={avengersLogo} alt="avengers logo" />
		</div>
	)
}

export default Ads;