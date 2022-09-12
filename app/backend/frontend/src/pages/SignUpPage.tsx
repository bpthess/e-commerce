import { Helmet } from "react-helmet-async";
import { Main } from "../components/Auth/Styled";
import SignUp from "../components/Auth/SignUp";

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Main>
        <SignUp />
      </Main>
    </>
  );
};

export default SignUpPage;
