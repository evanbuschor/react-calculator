import {
	faDivide,
	faEquals,
	faMinus,
	faPlus,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled("div")`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 2rem;
	background-color: #eeeeee55;
	grid-area: ${(props) => props.gridArea || null};
`;
const LeftOperand = styled("div")`
	border: green;
	width: 100%;
	height: 100%;
`;

function CalculatorDisplay({
	children,
	leftOperand,
	rightOperand,
	operator,
	solution,
	...rest
}) {
	const renderOperator = (op) => {
		switch (op) {
			case "add":
				return <FontAwesomeIcon size="1x" icon={faPlus} />;

			case "subtract":
				return <FontAwesomeIcon icon={faMinus} />;

			case "multiply":
				return <FontAwesomeIcon icon={faTimes} />;

			case "divide":
				return <FontAwesomeIcon icon={faDivide} />;

			default:
				break;
		}
	};
	return (
		<StyledDiv {...rest}>
			<div className="leftOperand">{leftOperand}</div>
			<div className="operator">{renderOperator(operator)}</div>
			<div className="rightOperand">{rightOperand}</div>
			<div hidden={!solution.toString()} className="equals">
				<FontAwesomeIcon icon={faEquals} />
			</div>
			<div className="solution">{solution}</div>
		</StyledDiv>
	);
}

export default CalculatorDisplay;
