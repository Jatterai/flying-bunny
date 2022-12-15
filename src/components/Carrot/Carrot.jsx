import styled from "styled-components";

const Carrot = styled.div`
	position: absolute;
	width: ${props => props.size}px;
	aspect-ratio: 1 / 1;
	translate: (50%, -50%);
	bottom: ${props => props.btm}%;
	left: ${props => props.left}%;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-name: ${props => props.animation};


	img{
		width: 100%;
		object-fit: contain;
	}

	@keyframes disappear {
		100% {
			scale: 0;
		}		
	}
	@keyframes appear {
		100% {
			scale: 1;
		}		
	}
`

export default Carrot