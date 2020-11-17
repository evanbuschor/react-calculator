import React from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";

const StyledApp = styled("div")`
	font-family: "Poppins", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: rgb(97, 144, 232, 1);
	background: linear-gradient(
		80deg,
		rgba(54, 90, 154, 1) 0%,
		rgba(61, 106, 189, 1) 5%,
		rgba(97, 144, 232, 1) 41%,
		rgba(167, 191, 232, 1) 100%
	);
`;

function App() {
	return (
		<StyledApp className="App">
			<Calculator />
		</StyledApp>
	);
}

export default App;
