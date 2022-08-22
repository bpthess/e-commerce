import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Store } from "../../Store";
import { useTranslation } from "react-i18next";
import {
  CartWrapper,
  CartContainer,
  LabelTitle,
  LabelMessage,
  CartContent,
  CartInner,
  ListGroup,
  Total,
  TotalGroup,
  CountOuter,
  AmountCountMinusButton,
  AmountCountPlusButton,
  DeleteButton,
  CheckoutButton,
} from "./CartStyle";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

function CartScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <>
      <Helmet>
        <title>{t("helmet.Cart")}</title>
      </Helmet>
      <CartWrapper>
        <LabelTitle>{t("cart.IShoppingBasket")}</LabelTitle>
        <CartContainer isPosition={cartItems.length === 0 ? false : true}>
          {cartItems.length === 0 ? (
            <LabelMessage>
              {t("cart.IDoneBasketMessage")}
              <Link to="/" onClick={() => navigate(-1)}>
                <RiArrowGoBackFill />
              </Link>
            </LabelMessage>
          ) : (
            <>
              <CartContent>
                {cartItems.map((item, index) => {
                  return (
                    <CartInner key={index}>
                      <ListGroup>
                        <img src={item.image} alt={item.name} />
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        <CountOuter>
                          <AmountCountMinusButton
                            disabled={item.quantity === 1}
                          >
                            <BiMinus />
                          </AmountCountMinusButton>
                          <span className="quantity">{item.quantity}</span>
                          <AmountCountPlusButton
                            disabled={item.quantity === item.countInStock}
                          >
                            <BiPlus />
                          </AmountCountPlusButton>
                        </CountOuter>
                        <span className="price">{item.price}</span>
                        <DeleteButton>
                          <MdDelete />
                        </DeleteButton>
                      </ListGroup>
                    </CartInner>
                  );
                })}
              </CartContent>
              <Total>
                <TotalGroup>
                  <span>{t("cart.IProductAmount")}</span>
                  <div className="cost">
                    {/* TODO: 자동 총금액 계산 기능 구현 실패, 추후 도전 */}
                    {cartItems.reduce(
                      (a, c) =>
                        c.quantity
                          ? c.quantity * parseFloat(c.price) + a
                          : c + a,
                      0
                    )}
                  </div>
                </TotalGroup>
                <TotalGroup>
                  <span>{t("cart.IDeliveryAmount")}</span>
                  <span className="cost">{t("cart.IDeliveryCost")}</span>
                </TotalGroup>
                <TotalGroup>
                  <span>{t("cart.ITotalAmount")}</span>
                  {cartItems.reduce(
                    (a, c) =>
                      c.quantity ? c.quantity * parseFloat(c.price) + a : c + a,
                    0
                  ) + Number(3000)}
                </TotalGroup>
                <ListGroup>
                  <CheckoutButton disabled={cartItems === 0}>
                    {t("cart.ICartCheckout")}
                  </CheckoutButton>
                </ListGroup>
              </Total>
            </>
          )}
        </CartContainer>
      </CartWrapper>
    </>
  );
}

export default CartScreen;
