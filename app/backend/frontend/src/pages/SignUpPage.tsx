import { Helmet } from "react-helmet-async";
import { Main } from "../components/Auth/Styled";
import SignUp from "../components/Auth/SignUp";

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <Main>
        <SignUp />
      </Main>
    </>
  );
};

export default SignUpPage;
