import { ReactElement, JSXElementConstructor } from "react";
import styled from "styled-components";

export const ErrorBoundary = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppError(props: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return <ErrorBoundary>{props.children}</ErrorBoundary>;
}

export default AppError;
