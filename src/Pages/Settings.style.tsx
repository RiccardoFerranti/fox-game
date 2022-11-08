import styled from 'styled-components';

export const SyledSettingsRow = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto 30px;
`

export const StyledSettingButton = styled.button`
	width: 50px;
	height: 50px;
  border-radius: 25px;
  background: ${({ theme }) => theme.buttons.play.active};
  border: 1px solid #efd23e;
  box-shadow: 0 4px #edc500;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: white;
  }
`;

export const StyledSettingsTitle = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  margin: 0 0 25px;
`

export const StyledDefaultSettings = styled.div`
  display: flex;
  width: 270px;
  align-items: center;
`