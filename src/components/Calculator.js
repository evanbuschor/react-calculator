import React from "react";
import styled from "styled-components";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBackspace,
	faDivide,
	faTimes,
	faPlus,
	faMinus,
	faEquals,
} from "@fortawesome/free-solid-svg-icons";
import useCalculator from "../hooks/useCalculator";

// Styles
const StyledDiv = styled("div")`
	background-color: lightskyblue;
	border: 1px solid lightsalmon;
	width: 400px;
	height: 600px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

	grid-template-areas:
		"display display display display"
		"clear clear back divide"
		"seven eight nine multiply"
		"four five six subtract"
		"one two three add"
		"zero zero decimal equal";
`;

// Component
function Calculator() {
	const {
		leftOperand,
		rightOperand,
		operator,
		solution,
		press,
	} = useCalculator();

	// Send the pressed button to the Calculator hook
	function handlePress(e) {
		press(e.currentTarget.value);
	}

	return (
		<StyledDiv>
			<CalculatorDisplay
				gridArea="display"
				leftOperand={leftOperand}
				rightOperand={rightOperand}
				operator={operator}
				solution={solution}
			/>
			<CalculatorButton onClick={handlePress} pressValue="zero">
				0
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="one">
				1
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="two">
				2
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="three">
				3
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="four">
				4
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="five">
				5
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="six">
				6
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="seven">
				7
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="eight">
				8
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="nine">
				9
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="back">
				<FontAwesomeIcon icon={faBackspace} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="divide">
				<FontAwesomeIcon icon={faDivide} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="multiply">
				<FontAwesomeIcon icon={faTimes} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="subtract">
				<FontAwesomeIcon icon={faMinus} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="add">
				<FontAwesomeIcon icon={faPlus} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="equal">
				<FontAwesomeIcon icon={faEquals} />
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="decimal">
				{"."}
			</CalculatorButton>
			<CalculatorButton onClick={handlePress} pressValue="clear">
				clear
			</CalculatorButton>
		</StyledDiv>
	);
}

export default Calculator;
