import axios from "axios";
import { userInfo } from "os";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Store } from "../store/Store";
import { Spacing, Color } from "../variable/Spacing";

export const SignForm = styled.form``;

export const SignWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 30px 60px 35px;
  line-height: 2;

  & h1 {
    display: block;
    font-size: 28px;
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
  border: 0.5px solid darkcyan !important;
  border-radius: 3px;
  /* padding: ${Spacing.header.mark.headerFormControllerPadding}; */
  padding: 8px 70px 8px 15px;
  font-size: ${Spacing.select.selectFontSize12}px;

  ::placeholder {
    font-weight: ${Spacing.select.selectFontWeight400};
    font-size: ${Spacing.header.headerFormControllerFontSize}px;
    color: ${Color.header.headerPlaceholderFontColor};
  }

  :focus {
    transition: all 0.12s;
    box-shadow: 0 0 2px darkcyan;
  }
`;

export const GoToSignButton = styled.button`
  width: 100%;
  padding: 8px 70px;
  background-color: darkcyan;
  color: #fff;
  margin: 15px 0;
  border: 1px solid transparent;
  border-radius: 3px;

  /* :hover {
    transition: 0.2s ease;
    color: darkcyan;
    background-color: #fff;
    border: 1px solid darkcyan;
  } */
  :active {
    background-color: #ccc;
  }
`;

export const GoToSignUp = styled.div`
  width: 100%;
  padding: 8px 70px;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  /* color: #fff; */

  /* :hover {
    transition: 0.2s ease;
    color: darkcyan;
    background-color: #fff;
    border: 1px solid darkcyan;
  } */
`;

const Sign = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/users/signin",
        {
          email,
          password,
        }
      );
      contextDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  useEffect(() => {
    // 로그인된 상태에서 로그인페이지 리다이렉트 방지
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <SignWrapper>
        <h1>로그인</h1>
        <SignForm onSubmit={submitHandler}>
          <FormContainer>
            <label>이메일</label>
            <Controller
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>비밀번호</label>
            <Controller
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Controller>
            <GoToSignButton type="submit">로그인</GoToSignButton>
          </FormContainer>
        </SignForm>
        <GoToSignUp>
          <Link to={`/signup?redirect=${redirect}`}>회원가입</Link>
        </GoToSignUp>
      </SignWrapper>
    </>
  );
};

export default Sign;
