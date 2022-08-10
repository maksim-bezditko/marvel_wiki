import styled from "styled-components";


const Skeleton = () => {
	return (
		<SkeletonWrapper>
			<p className="char__select">Please select a character to see information</p>
			<div className="skeleton">
				<div className="pulse skeleton__header">
					<div className="pulse skeleton__circle"></div>
					<div className="pulse skeleton__mini"></div>
				</div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
			</div>
		</SkeletonWrapper>
	)
}

const SkeletonWrapper = styled.div`
	.char__select {
		display: grid;
		place-items: center;
		margin-bottom: 30px;
	}
	.skeleton {
		&__header {
			display: grid;
			grid-template-columns: 40px auto;
			column-gap: 10px;
			align-items: center;
		}
		&__circle {
			width: 40px;
			height: 40px;
			background-color: #C4C4C4;
			border-radius: 100%;
			animation: test 2s linear;
			animation-iteration-count: infinite;
		}
		@keyframes test {
			0% {
				background-color: #dedede;
			}
			50% {
				background-color: #b4b4b4;
			}
			100% {
				background-color: #dedede;
			}
		}
		&__mini {
			width: 100%;
			height: 16px;
			background-color: #C4C4C4;
			animation: test 2s linear;
			animation-iteration-count: infinite;
		}
		&__block {
        	height: 35px;
        	width: 100%;
        	background-color: #C4C4C4;
        	margin-top: 15px;
			animation: test 2s linear;
			animation-iteration-count: infinite;
    	}
	}
`;

export default Skeleton;