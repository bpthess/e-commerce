import styled from "styled-components";

export const ErrorBoundary = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

function AppError(props) {
  return <ErrorBoundary>{props.children}</ErrorBoundary>;
}

export default AppError;
