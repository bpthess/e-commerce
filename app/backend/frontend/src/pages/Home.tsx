import { Main } from "../components/Home/Styled";
import { Helmet } from "react-helmet-async";
import MainBoard from "../components/Home/MainBoard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>E-Commerce</title>
      </Helmet>
      <Main>
        <MainBoard />
      </Main>
    </>
  );
};

export default Home;
