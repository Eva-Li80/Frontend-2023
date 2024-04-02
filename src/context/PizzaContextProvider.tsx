import { ReactNode, createContext, useReducer } from "react";
import { CartItem, Pizza } from "../Type";
import { pizzas } from "../Type";

type PizzaContextProviderType = {
  children: ReactNode;
};

type State = {
  pizza: Pizza[];
  cart: CartItem[];
};
type InitalContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Action =
  | { type: "ADD_CART_ITEM"; payload: CartItem }
  | { type: "REMOVE_CART_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_CART_ITEM";
      payload: CartItem;
    };

export const PizzaContext = createContext<InitalContextState>({
  state: { pizza: [], cart: [] },
  dispatch: () => null,
});

const reducer = (state: State, action: Action) => {
  let pizzaNameIndex;
  switch (action.type) {
    case "ADD_CART_ITEM":
      pizzaNameIndex = state.cart.findIndex(
        (item) =>
          item.product.name === action.payload.product.name &&
          item.product.size === action.payload.product.size &&
          JSON.stringify(item.product.ingredients.sort()) ===
            JSON.stringify(action.payload.product.ingredients.sort())
      );

      if (pizzaNameIndex !== -1) {
        const updateCartQuantity = [...state.cart];
        updateCartQuantity[pizzaNameIndex].quantity +=
          action.payload.quantity / 2;
        return {
          cart: updateCartQuantity,
          pizza: state.pizza,
        };
      } else {
        return { cart: [...state.cart, action.payload], pizza: state.pizza };
      }
    case "UPDATE_CART_ITEM":
      return {
        cart: state.cart.map((i) => {
          if (i.id === action.payload.id) {
            return action.payload;
          } else {
            return i;
          }
        }),
        pizza: state.pizza,
      };
    case "REMOVE_CART_ITEM":
      return {
        cart: state.cart.filter((i) => i.id !== action.payload),
        pizza: state.pizza,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

const initalPizzaState: State = {
  pizza: pizzas,
  cart: [],
};

const PizzaContextProvider = ({ children }: PizzaContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initalPizzaState);
  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
