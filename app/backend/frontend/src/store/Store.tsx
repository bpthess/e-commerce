import {
  createContext,
  JSXElementConstructor,
  ReactElement,
  useReducer,
} from "react";

// export const Store = createContext();

export interface StoreTypes {
  state: any;
  dispatch: any;
}

export const Store = createContext<StoreTypes>({ state: null, dispatch: null });

const dataInitState = {
  cart: {
    cartItems: [],
  },
};

function reducer(
  state: { cart: { cartItems: any[] } },
  action: { type: any; payload: { _id: string | number } }
) {
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

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    // 전역상태 상품 제거
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}

export function StoreProvider(props: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  const [state, dispatch] = useReducer(reducer, dataInitState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
