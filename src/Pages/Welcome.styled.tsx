import styled from "styled-components";

import { StyledButton } from "./CommonStyle";

export const StyledWelcomeContainer = styled.div`
  height: 400px;
  width: 380px;
  display: flex;
  flex-direction: column; 
`

interface IStyledNextButton {
  disabled: boolean,
}
export const StyledNextButton = styled(StyledButton)<IStyledNextButton>`
  margin-bottom: 30px;
  background: ${({ disabled, theme }) => disabled ? theme.buttons.play.inactive : theme.buttons.play.active};
  color: ${({ disabled, theme }) => disabled ? theme.buttons.play.textInactive : theme.buttons.play.textActive};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' :  'pointer'};
`

export const StyledPlayButton = styled(StyledButton)`
  margin-bottom: 30px;
  background: ${({ theme }) => theme.buttons.play.active};
  color: ${({ theme }) => theme.buttons.play.textActive};
  cursor: pointer;
`

export const StyledUsername = styled.p`
  font-size: 18px;
  align-self: center;
  margin: 30px 0 0 0;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`

export const StyledPlayInstructions = styled.div`
  width: 340px;
  font-size: 14px;
  align-self: center;
  color: white;
  text-align: center;
  margin: 45px auto 0;
  line-height: 40px;
  background: #3d3d3d;
  text-transform: uppercase;
`

export const StyledUserField = styled.div`
  align-self: center;
  margin-top: 15px;
`

export const StyledTextInput = styled.input`
  background: ${({ theme }) => theme.colors.cardBackground};
  width: 200px; 
  height: 40px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  padding: 0 30px 0 10px;
  margin: 5px;
  border: 1px solid #f2c307;

  &:focus,
  &:active {
    outline: none;
    background: white;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 50px white inset !important;
    -webkit-text-fill-color: #2D2D31;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
