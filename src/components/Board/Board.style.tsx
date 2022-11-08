import styled from 'styled-components';

export const StyledBoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
  width: 401px;
`;

export const StyledBoardRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledBoardTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  overflow: hidden;
  width: 133px;
  height: 133px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;