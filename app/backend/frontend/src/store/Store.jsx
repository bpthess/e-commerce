import { createContext, useReducer } from "react";
export const Store = createContext();

const dataInitState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    // 전역상태 상품 추가
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const storageItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      const cartItems = storageItem
        ? state.cart.cartItems.map((item) =>
            item._id === storageItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    // 전역상태 상품 제거
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, dataInitState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}