import styled from 'styled-components';

import { StyledButton } from "./CommonStyle";

export const StyledFoxLogo = styled.img`
	width: 130px;
  height: 130px;
  border-radius: 65px;
  border: 2px solid #037faf;
  box-shadow: #037faf 0px 4px 1px;
  margin: 0 auto;
`;

export const StyledDescription = styled.p`
  width: 340px;
  font-size: 14px;
  align-self: center;
  color: white;
  text-align: center;
  margin: 20px auto 0;
  line-height: 40px;
  background: #3d3d3d;
  text-transform: uppercase;
`

export const StyledStartButton = styled(StyledButton)`
  margin-bottom: 30px;
  background: ${({ theme }) => theme.buttons.play.active};
  color: ${({ theme }) => theme.buttons.play.textActive};
  cursor: pointer;
`