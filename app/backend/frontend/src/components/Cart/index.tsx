import { Key, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../store/Store";
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
  PurchaseWrapper,
} from "./Styled";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GlobalData } from "../../types/global";

const Cart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state, dispatch: contextDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (
    item: { _id: string | number },
    quantity: number
  ) => {
    try {
      /**
       * 404 (Not Found) error
       * TODO: 서버에서 id를 못 받아오고 있음, 에러 해결
       */
      const response = await fetch(`/api/products/${item._id}`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }

    contextDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item: any) => {
    contextDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
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
              {cartItems.map((item: GlobalData, index: Key | null) => {
                return (
                  <CartInner key={index}>
                    <ListGroup>
                      <img src={item.image} alt={item.name} />
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      <CountOuter>
                        <AmountCountMinusButton
                          onClick={() =>
                            updateCartHandler(item, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        >
                          <BiMinus />
                        </AmountCountMinusButton>
                        <span className="quantity">{item.quantity}</span>
                        <AmountCountPlusButton
                          onClick={() =>
                            updateCartHandler(item, item.quantity + 1)
                          }
                          disabled={item.quantity === item.countInStock}
                        >
                          <BiPlus />
                        </AmountCountPlusButton>
                      </CountOuter>
                      <span className="price">{item.price}</span>
                      <DeleteButton onClick={() => removeItemHandler(item)}>
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
                  {
                    cartItems.reduce(
                      (a: number, c: { quantity: number; price: string }) =>
                        c.quantity
                          ? c.quantity * parseFloat(c.price) + a
                          : +c + a,
                      0
                    ) as number | string
                  }
                </div>
              </TotalGroup>
              <TotalGroup>
                <span>{t("cart.IDeliveryAmount")}</span>
                <span className="cost">{t("cart.IDeliveryCost")}</span>
              </TotalGroup>
              <TotalGroup>
                <span>{t("cart.ITotalAmount")}</span>
                {
                  (cartItems.reduce(
                    (a: number, c: { quantity: number; price: string }) =>
                      c.quantity
                        ? c.quantity * parseFloat(c.price) + a
                        : +c + a,
                    0
                  ) + Number(3000)) as number | string
                }
              </TotalGroup>
              <PurchaseWrapper>
                <CheckoutButton
                  onClick={checkoutHandler}
                  disabled={cartItems === 0}
                >
                  {t("cart.ICartPurchase")}
                </CheckoutButton>
              </PurchaseWrapper>
            </Total>
          </>
        )}
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
