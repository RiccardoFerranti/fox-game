import { FC } from 'react';

import {
  StyledAnimatedBackgroundWrapper,
  StyledCloud,
  StyledCloudWrapper1,
  StyledCloudWrapper2,
  StyledCloudWrapper3,
  StyledCloudWrapper4,
  StyledCloudWrapper5
} from './AnimatedBackground.style';

const AnimatedBackground: FC = () => (
  <StyledAnimatedBackgroundWrapper>  
    <StyledCloudWrapper1><StyledCloud data-testid="cloud" /></StyledCloudWrapper1>
    <StyledCloudWrapper2><StyledCloud data-testid="cloud" /></StyledCloudWrapper2>
    <StyledCloudWrapper3><StyledCloud data-testid="cloud" /></StyledCloudWrapper3>
    <StyledCloudWrapper4><StyledCloud data-testid="cloud" /></StyledCloudWrapper4>
    <StyledCloudWrapper5><StyledCloud data-testid="cloud" /></StyledCloudWrapper5>
  </StyledAnimatedBackgroundWrapper>
);

export default AnimatedBackground;
