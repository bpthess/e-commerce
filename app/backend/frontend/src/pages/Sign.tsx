import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Spacing, Color } from "../variable/Spacing";

export const SignWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 50px 80px;

  & h1 {
    display: block;
    margin-bottom: 30px;
  }
`;

export const FormContainer = styled.div`
  line-height: 2;
  & label {
    display: block;
  }
`;

export const Controller = styled.input`
  /* background-color: ${Color.header.headerControllerBgColor}; */
  border: 0.5px solid darkcyan;
  border-radius: 3px;
  padding: ${Spacing.header.mark.headerFormControllerPadding};
  font-size: ${Spacing.select.selectFontSize12}px;

  ::placeholder {
    font-weight: ${Spacing.select.selectFontWeight400};
    font-size: ${Spacing.header.headerFormControllerFontSize}px;
    color: ${Color.header.headerPlaceholderFontColor};
  }

  :focus {
    border: 1px solid darkcyan;
    transition: all 0.1s;
    box-shadow: 0 0 2px darkcyan;
  }
`;

export const GoToSignButton = styled.button`
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: darkcyan;
  color: #fff;
  margin: 15px 0;
  border-radius: 3px;

  :hover {
    transition: 0.2s ease;
    color: darkcyan;
    background-color: #fff;
    border: 1px solid darkcyan;
  }
`;

export const GoToSignUp = styled.div`
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background-color: darkcyan;
  border-radius: 3px;
  color: #fff;

  :hover {
    transition: 0.2s ease;
    color: darkcyan;
    background-color: #fff;
    border: 1px solid darkcyan;
  }
`;

const Sign = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <SignWrapper>
        <h1>로그인</h1>
        <FormContainer>
          <label>이메일</label>
          <Controller type="email" required />
        </FormContainer>
        <FormContainer>
          <label>비밀번호</label>
          <Controller type="password" required></Controller>
        </FormContainer>
        <GoToSignButton type="submit">로그인</GoToSignButton>
        <GoToSignUp>
          <Link to={`/signup?redirect=${redirect}`}>회원가입</Link>
        </GoToSignUp>
      </SignWrapper>
    </>
  );
};

export default Sign;
