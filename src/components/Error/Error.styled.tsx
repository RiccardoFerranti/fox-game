import styled from "styled-components";

export const StyleErrorContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
`
