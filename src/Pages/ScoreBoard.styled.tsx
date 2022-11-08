import styled from 'styled-components';

import { StyledButton } from "./CommonStyle";

export const StyledScoreTile = styled.h2`
  text-align: center;
  margin: 15px 0;
  font-size: 20px;
  text-transform: uppercase;
`

export const StyledScoreTable = styled.div`
	width: 400px;
  margin: 0 auto;
`;

export const StyledScoreHeader = styled.div`
  display: flex;
`

export const StyledScoreRow = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;

  &:nth-child(even) {
    background: #d8d8d8;
  }

  &:nth-child(odd) {
    background: #e8e8e8;
  }
`

export const StyledScoreHeaderCell = styled.div`
  background: #a3a3a3;
  border-left: 1px solid #fff;
  border-bottom: 2px solid #fff;
  text-align: center;
  color: white;
  padding: 5px;

  &:nth-child(1) {
    width: 49px;
  }
  &:nth-child(2) {
    width: 149px;
  }
  &:nth-child(3) {
    width: 139px;
  }
  &:nth-child(4) {
    width: 63px;
  }
`

export const StyledScoreRowCell = styled.div`
  border-left: 1px solid #fff;

  text-align: center;
  color: white;
  padding: 5px;

  &:nth-child(1) {
    width: 49px;
    background: #a3a3a3;
  }
  &:nth-child(2) {
    width: 149px;
    color: ${({ theme }) => theme.colors.text};
  }
  &:nth-child(3) {
    width: 139px;
    color: ${({ theme }) => theme.colors.text};
  }
  &:nth-child(4) {
    width: 59px;
    color: ${({ theme }) => theme.colors.text};
  }
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px auto 0;
  width: 400px;
`

export const StyledStartButton = styled(StyledButton)`
  width: 180px;
  background: ${({ theme }) => theme.buttons.play.active};
  color: ${({ theme }) => theme.buttons.play.textActive};
  cursor: pointer;
`

export const StyledPlayButton = styled(StyledButton)`
  width: 180px;
  background: ${({ theme }) => theme.buttons.play.active};
  color: ${({ theme }) => theme.buttons.play.textActive};
  cursor: pointer;
`