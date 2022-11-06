import { FC } from "react";

import { StyledSpinnerContainer } from "./Loading.style";

import loadingSpinner from "../../images/loading.svg";

export interface ILoadingProps {
  message: string
}

const Loading: FC<ILoadingProps> = ({ message }) => (
  <StyledSpinnerContainer>
    <img src={loadingSpinner} alt='loading icon' title='loading spinner' data-testid='spinner-icon' />
    <p>{message}...</p>
  </StyledSpinnerContainer> 
)

export default Loading;