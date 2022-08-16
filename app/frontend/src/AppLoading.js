import { Children } from "react";
import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: #000;
  font-size: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  transition: all 100ms;
  animation: ${rotate} 1s linear infinite;
`;

function AppLoading() {
  return <LoadingSpinner title="loading"></LoadingSpinner>;
}

export default AppLoading;
