import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import CartBasket from "../components/Cart/CartBasket";
import { Main } from "../components/Cart/Styled";

function Cart() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("helmet.Cart")}</title>
      </Helmet>
      <Main>
        <CartBasket />
      </Main>
    </>
  );
}

export default Cart;
