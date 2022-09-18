import styled from "styled-components";
import { Spacing, Color } from "../../variable/Spacing";

export const Main = styled.div`
  width: ${Spacing.select.selectNumber100}%;
  height: ${Spacing.select.selectNumber100}vh;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    height: ${Spacing.select.selectNumber100}%;
  }
`;
export const SignForm = styled.form``;

export const SignWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 40px;
  line-height: 2;

  & h1 {
    display: block;
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 100px;
    border: 1px solid transparent;
    position: unset;
    transform: none;
  }
`;

export const SignUpWrapper = styled(SignWrapper)`
  padding: 30px 55px;
`;

export const FormContainer = styled.div`
  line-height: 2;
  & label {
    display: block;
  }
`;

export const Controller = styled.input`
  /* background-color: ${Color.header.headerControllerBgColor}; */
  border: 0.5px solid darkcyan !important;
  border-radius: 3px;
  /* padding: ${Spacing.header.mark.headerFormControllerPadding}; */
  padding: 8px 70px 10px 10px;
  letter-spacing: 0.5px;
  font-size: ${Spacing.select.selectFontSize12}px;

  ::placeholder {
    font-weight: ${Spacing.select.selectFontWeight400};
    font-size: ${Spacing.header.headerFormControllerFontSize}px;
    color: ${Color.header.headerPlaceholderFontColor};
  }

  :focus {
    transition: all 0.12s;
    box-shadow: 0 0 7px rgba(0, 139, 139, 0.25);
  }
`;

export const GoToSignButton = styled.button`
  width: 100%;
  padding: 10px 130px;
  background-color: darkcyan;
  color: #fff;
  margin: 15px 0;
  border: 1px solid transparent;
  border-radius: 3px;
  display: block;
  white-space: nowrap;

  :active {
    background-color: #ccc;
  }
`;

export const GoToSignUpButton = styled(GoToSignButton)`
  padding: 10px 70px;
`;

export const GoToSignUp = styled.div`
  width: 100%;
  padding: 10px 70px;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  display: block;
  & a {
    margin-left: 7px;
  }
`;

export const GoToSignIn = styled(GoToSignUp)`
  & a {
    margin-left: 7px;
    color: darkcyan;
  }
`;
