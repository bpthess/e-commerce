import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../../store/Store";
import {
  Controller,
  FormContainer,
  GoToSignUpButton,
  GoToSignIn,
  SignForm,
  SignUpWrapper,
} from "../Styled";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { state, dispatch: contextDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // 회원가입 일치/불일치
    if (password === repeatPassword) {
      try {
        const { data } = await axios.post("/api/users/signup", {
          name,
          email,
          password,
        });
        contextDispatch({ type: "USER_SIGNIN", payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(redirect || "/");
      } catch (err) {}
      return;
    } else {
      toast.error("동일한 비밀번호를 입력해주세요.");
      return;
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
      <SignUpWrapper>
        <h1>회원가입</h1>
        <SignForm onSubmit={submitHandler}>
          <FormContainer>
            <label>이름</label>
            <Controller
              type="name"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <label>비밀번호 재확인</label>
            <Controller
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Controller>
            <GoToSignUpButton type="submit">회원가입</GoToSignUpButton>
          </FormContainer>
        </SignForm>
        <GoToSignIn>
          <span>이미 가입하였습니까?</span>
          <Link to={`/signin?redirect=${redirect}`}>로그인</Link>
        </GoToSignIn>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
