import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store";
import styled from "styled-components";

export const ListGroup = styled.div``;
export const MessageLabel = styled.label``;
export const Total = styled.div``;

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <MessageLabel>
        Cart is empth.
        <Link to="/">Go Shopping</Link>
      </MessageLabel>
      <div className="test">
        {cartItems.map((item) => {
          return (
            <>
              <ListGroup key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                  <Link to={`/product/${item.slug}`}>{item.name}</Link>
                </div>
                <button disabled={item.quantity === 1}></button>
                <button disabled={item.quantity === item.countInStock}></button>
                <div>${item.price}</div>
                <div>
                  <button>?</button>
                </div>
              </ListGroup>
              <Total>
                <ListGroup>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup>
                <ListGroup>
                  <button disabled={cartItems === 0}>
                    Proceed to Checkout
                  </button>
                </ListGroup>
              </Total>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CartScreen;
