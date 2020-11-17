import React from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
	width: calc(100% - 20px);
	height: calc(100% - 20px);
	border: none;
	background-color: #bbbbbb;
	cursor: pointer;
	border-radius: 9999px;
	box-shadow: 0px 3px 10px #33333333;
	outline: none;
	margin: 10px;
	font-size: 2rem;
	grid-area: ${(props) => props.gridArea || null};
	transition: 50ms ease-in-out;

	&:hover {
		background-color: #cccccc;
		color: #333333;
		transform: scale(1.08);
	}

	&:active {
		background-color: #aaaaaa;
		color: #dddddd;
		transform: scale(0.95);
	}
`;

function CalculatorButton({ children, pressValue, ...rest }) {
	return (
		<StyledButton gridArea={pressValue} value={pressValue} {...rest}>
			{children}
		</StyledButton>
	);
}

export default CalculatorButton;
