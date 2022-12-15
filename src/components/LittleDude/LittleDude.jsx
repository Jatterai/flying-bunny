import styled from "styled-components";

const LittleDude = styled.div`
	width:${props => props.size}px;
	//border-radius: 50%;
	//background-color: crimson;
	position: absolute;
	left: ${props => props.left}%;
	transform-origin: bottom;
	translate: -50%, 0;
	rotate: ${props => props.rotate};
	bottom: ${props => props.btm}%;
	transition: all 200ms, rotate 0ms;

	img:first-child {
		width: 100%;
		object-fit: contain;
		position: relative;
		z-index: 3;
	}

	img:last-child {
		position: absolute;
		width: 160%;
		z-index: 1;
		top: 25%;
		left: -10%;
		display: ${props => props.wings ? "block" : 'none'};
	}
`
export default LittleDude;