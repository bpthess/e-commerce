import { Helmet } from "react-helmet-async";
import { Main } from "../components/Sign/Styled";
import Sign from "../components/Sign/SignIn";

const SignPage = () => {
  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <Main>
        <Sign />
      </Main>
    </>
  );
};

export default SignPage;
