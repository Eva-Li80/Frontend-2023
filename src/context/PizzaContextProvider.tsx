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
  | { type: "AddCartItem"; payload: CartItem }
  | { type: "RemoveCartItem"; payload: string }
  | {
      type: "UpdateCartItem";
      payload: CartItem;
    };

export const PizzaContext = createContext<InitalContextState>({
  state: { pizza: [], cart: [] },
  dispatch: () => null,
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "AddCartItem":
      return { cart: [...state.cart, action.payload], pizza: state.pizza };
    case "UpdateCartItem":
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
    case "RemoveCartItem":
      return {
        cart: state.cart.filter((i) => i.id !== action.payload),
        pizza: state.pizza,
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
