import { Helmet } from "react-helmet-async";
import Sign from "../components/Auth/Sign";
import { Main } from "../components/Auth/Sign/Styled";

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
