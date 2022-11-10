import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: 'Inter', sans-serif;
		box-sizing: border-box;
		color: #69c8ec;
	}

	body{
		background-color: #fff;
	}

	html{
		font-size:62.5%;
	}

	img{
		max-width: 100%;
		display: block;
	}
	
`

export default GlobalStyle