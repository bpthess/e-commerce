import styled from "styled-components";

export const ErrorBoundary = styled.div`
  & .wrapper {
    & .label {
    }
  }
`;

function AppError(props) {
  return <ErrorBoundary>{props.children}</ErrorBoundary>;
}

export default AppError;
