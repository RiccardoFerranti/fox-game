import styled from 'styled-components';

import { StyledButton } from "./CommonStyle";

export const StyledFoxLogo = styled.img`
	width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 2px solid #037faf;
  box-shadow: #037faf 0px 4px 1px;
  margin: 0 auto;
  z-index: 2;
`;

export const StyledDescription = styled.p`
  width: 390px;
  font-size: 16px;
  align-self: center;
  color: white;
  text-align: center;
  line-height: 40px;
  background: #3d3d3d;
  text-transform: uppercase;
  margin: -15px auto 0;
  height: 130px;
  padding: 30px 0 0 0;
`

export const StyledStartButton = styled(StyledButton)`
  margin-bottom: 30px;
  background: ${({ theme }) => theme.buttons.play.active};
  color: ${({ theme }) => theme.buttons.play.textActive};
  cursor: pointer;
  font-size: 26px;
`