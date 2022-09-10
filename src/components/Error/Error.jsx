import styled from "styled-components";
import errorGif from "../../img/error.gif";

const ErrorItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	img {
		margin-left: 30px;
		height: ${(props) => props.height ? props.height + "px" : "auto"};
	}
`;

export default function Error(props) {
	return (
		<ErrorItem height={props.height}> 
			<img src={errorGif} alt="error" />
		</ErrorItem>
	)
}