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
`

export const StyleGameTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	font-size: 26px;
	text-align: center;
	padding: 15px 0;
`