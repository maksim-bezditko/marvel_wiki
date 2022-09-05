import styled from "styled-components";
import avengers from "../img/Avengers.png";
import avengersLogo from "../img/Avengers_logo.png";

const Banner = styled.div`
	height: 100px;
	background-color: #232222;
	/* width: 20px; */
	padding-left: 45px;
	padding-right: 25px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	margin-bottom: 50px;
	h2 {
		color: white;
		flex-grow: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 80px;
		font-family: 'Roboto Condensed';
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
	}
	img {
		flex-grow: 0;
	}
`;

const Ads = () => {
	
	return (
		<Banner>
			<img src={avengers} alt="avengers" />
			<h2>New comics every week!<br/>Stay tuned!</h2>
			<img src={avengersLogo} alt="avengers logo" />
		</Banner>
	)
}

export default Ads;