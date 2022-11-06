import styled from "styled-components";

export const StyledGameSettings = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const StyledOverlay = styled.div`
  background: rgba(0, 0, 0, .5);
  position: absolute;
  width: 400px;
  height: 400px;
  top: 98px;
  left: 50px;
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledStartTimer = styled.p`
  font-size: 80px;
`