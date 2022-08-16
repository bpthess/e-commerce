import { useReducer } from "react";
import { createContext } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newItem = action.payload;
      const onStorageCartItems = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = onStorageCartItems
        ? state.cart.cartItems.map((item) =>
            item._id === onStorageCartItems._id ? newItem : item
          )
        : [...state.cart.CartItems, newItem];

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };

    // return {
    //   ...state,
    //   cart: {
    //     ...state.cart,
    //     cartItems: [...state.cart.cartItems, action.payload],
    //   },
    // };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
