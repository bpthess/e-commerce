import { Helmet } from "react-helmet-async";
import { Main } from "../components/Home/Styled";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>E-Commerce</title>
      </Helmet>
      <Main>
        <Home />
      </Main>
    </>
  );
};

export default HomePage;
