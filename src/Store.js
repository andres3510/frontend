import {createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItem: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //Cuando se agrega un producto al carrito de compras.
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItem: [...state.cart.cartItems, action.payload],
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.Children}</Store.Provider>;
}
