import { useState } from "react";

//main hook used to store all the logic for our calculator
//only exposes what is required to drive the display and the input to drive the interaction
function useCalculator() {
	const [leftOperand, setLeftOperand] = useState("");
	const [rightOperand, setRightOperand] = useState("");
	const [operator, setOperator] = useState("");
	const [solution, setSolution] = useState("");

	// clear the calculator and return it to default state
	const handleClearInput = (callback) => {
		setLeftOperand("");
		setRightOperand("");
		setOperator("");
		setSolution("");
		//optional callback you want to run after clearing calculator
		if (callback && typeof callback === "function") {
			callback();
		}
	};

	const handleNumberInput = (input) => {
		// validate input

		//if solution exists; set the left operand
		if (solution) {
			handleClearInput(() => {
				setLeftOperand(input);
			});
		} else if (operator) {
			setRightOperand((prev) => `${prev}${input}`);
		} else {
			setLeftOperand((prev) => `${prev}${input}`);
		}
	};

	const handleBackInput = () => {
		if (solution) {
			setSolution("");
		} else if (rightOperand) {
			setRightOperand((prev) => prev.toString().slice(0, -1));
		} else if (operator) {
			setOperator("");
		} else if (leftOperand) {
			setLeftOperand((prev) => prev.toString().slice(0, -1));
		}
	};

	const handleOperatorInput = (input) => {
		if (solution) {
			setLeftOperand(solution);
			setOperator(input);
			setRightOperand("");
			setSolution("");
		} else if (rightOperand) {
			const tempSolution = calculate(leftOperand, rightOperand, operator);
			setLeftOperand(tempSolution);
			setOperator(input);
			setRightOperand("");
			setSolution("");
		} else if (operator && input === "subtract") {
			setRightOperand("-");
		} else if (leftOperand) {
			setOperator(input);
		} else if (input === "subtract") {
			setLeftOperand("-");
		}
	};

	const calculate = (leftOperand, rightOperand, operator) => {
		let newSolution;
		switch (operator) {
			case "add":
				newSolution =
					Number.parseInt(leftOperand) +
					Number.parseInt(rightOperand);
				break;
			case "subtract":
				newSolution =
					Number.parseInt(leftOperand) -
					Number.parseInt(rightOperand);
				break;
			case "multiply":
				newSolution =
					Number.parseInt(leftOperand) *
					Number.parseInt(rightOperand);
				break;
			case "divide":
				newSolution =
					Number.parseInt(leftOperand) /
					Number.parseInt(rightOperand);
				break;

			default:
				break;
		}
		return newSolution;
	};

	const handleEqualsInput = () => {
		if (leftOperand.toString() && rightOperand.toString() && operator) {
			let newSolution = calculate(leftOperand, rightOperand, operator);
			setSolution(newSolution);
		}
	};

	const handleDecimalInput = () => {};

	const press = (key) => {
		switch (key) {
			case "one":
				handleNumberInput("1");
				break;
			case "two":
				handleNumberInput("2");
				break;
			case "three":
				handleNumberInput("3");
				break;
			case "four":
				handleNumberInput("4");
				break;
			case "five":
				handleNumberInput("5");
				break;
			case "six":
				handleNumberInput("6");
				break;
			case "seven":
				handleNumberInput("7");
				break;
			case "eight":
				handleNumberInput("8");
				break;
			case "nine":
				handleNumberInput("9");
				break;
			case "zero":
				handleNumberInput("0");
				break;
			case "back":
				handleBackInput();
				break;
			case "clear":
				handleClearInput();
				break;
			case "add":
			case "subtract":
			case "multiply":
			case "divide":
				handleOperatorInput(key);
				break;
			case "equal":
				handleEqualsInput();
				break;
			case "decimal":
				handleDecimalInput();
				break;
			default:
				console.error(`no key was found for key: "${key}"`);
				break;
		}
	};

	return { leftOperand, rightOperand, operator, solution, press };
}

export default useCalculator;
