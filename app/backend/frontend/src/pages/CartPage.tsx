import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Main } from "../components/Cart/Styled";
import Cart from "../components/Cart";

const CartPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("helmet.Cart")}</title>
      </Helmet>
      <Main>
        <Cart />
      </Main>
    </>
  );
};

export default CartPage;
