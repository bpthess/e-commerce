import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../../store/Store";
import {
  Controller,
  FormContainer,
  GoToSignButton,
  GoToSignUp,
  SignForm,
  SignWrapper,
} from "./Styled";
import { toast } from "react-toastify";

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
      toast.error("아이디 또는 비밀번호가 틀렸습니다.");
      // alert("아이디 또는 비밀번호가 틀렸습니다.");
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
