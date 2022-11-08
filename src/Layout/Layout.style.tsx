import styled from 'styled-components';

import { size } from '../consts/breakpoints';

export const StyledLayout = styled.main`
	margin: 0 auto;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;

	@media screen and (min-width: ${size.desktopL}) {
		width: 1280px;
	}

	@media screen and (min-width: ${size.desktopS}) and (max-width: ${size.desktopL}) {
		width: 980px;
	}

	@media screen and (min-width: ${size.tablet}) and (max-width: ${size.desktopS}) {
		width: 768px;
	}
`;

export const StyledGameContainer = styled.section`
 	background: ${({ theme }) => theme.colors.gameBackground};
  min-height: 400px;
  width: auto;
  border: 4px solid #037faf;
	display: flex;
  flex-direction: column;
	position: relative;
	box-shadow: 0px 4px 6px rgb(0 0 0 / 50%);
	border-radius: 10px;
`

export const StyleGameTitle = styled.h1`
	height: 80px;
	width: 300px;
	color: white;
	text-transform: uppercase;
	font-size: 32px;
	text-align: center;
	padding: 15px 0;
	background: rgb(26,127,175);
	background: linear-gradient(180deg, rgba(26,127,175,1) 0%, rgba(39,147,199,1) 13%, rgba(28,165,215,1) 25%, rgba(25,169,219,1) 35%, rgba(0,212,255,1) 75%, rgba(0,212,255,0.7217261904761905) 100%);
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	
	span {
		text-shadow: 0px 1px 1px rgb(0 0 0 / 25%);
	}

	&::before {
		content: "";
		position: absolute;
		height: 78px;
		left: -10%;
		right: -10%;
		border-radius: 50%;
		bottom: -62px;
		background: rgba(0, 0, 0, .5);
		z-index: 1;
	}
	
	&::after {
		content: "";
		position: absolute;
		height: 76px;
		left: -10%;
		right: -10%;
		border-radius: 50%;
		bottom: -62px;
		background: #fff;
		z-index: 2;
	}
`