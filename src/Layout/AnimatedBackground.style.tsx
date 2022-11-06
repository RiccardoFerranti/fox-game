import styled from 'styled-components';

export const StyledAnimatedBackgroundWrapper = styled.div`
  bottom: 0;
  left: 0;
  padding-top: 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  /* KEYFRAMES */
  @-webkit-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
  }

  @-moz-keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
  }

  @keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
  }
`

export const StyledCloudWrapper1 = styled.div`
	animation: animateCloud 35s linear infinite;
	transform: scale(0.65);
`

export const StyledCloudWrapper2 = styled.div`
	animation: animateCloud 20s linear infinite;
	transform: scale(0.3);
`

export const StyledCloudWrapper3 = styled.div`
	animation: animateCloud 30s linear infinite;
	transform: scale(0.5);
`

export const StyledCloudWrapper4 = styled.div`
	animation: animateCloud 28s linear infinite;
	transform: scale(0.4);
`

export const StyledCloudWrapper5 = styled.div`
	animation: animateCloud 25s linear infinite;
	transform: scale(0.55);
`

export const StyledCloud = styled.div`
  background: #fff;
	background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
	border-radius: 100px;
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

	height: 120px;
	position: relative;
	width: 350px;

  &:after, &:before {
    background: #fff;
    content: '';
    position: absolute;
    z-indeX: -1;
  }

  &:after {
    border-radius: 100px;
    height: 100px;
    left: 50px;
    top: -50px;
    width: 100px;
  }

  &:before {
    border-radius: 200px;
    width: 180px;
    height: 180px;
    right: 50px;
    top: -90px;
  }
`