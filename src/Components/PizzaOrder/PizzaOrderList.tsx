import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { CartItem, Pizza } from "../../Type";
import uuid from "react-uuid";

const PizzaOrderList = () => {
  const { state, dispatch } = useContext(PizzaContext);

  const handleAddPizza = (pizza: Pizza) => {
    const pizzaz = state.cart.find((c) => c.product.id === pizza.id);
    console.log(pizzaz);
    if (pizzaz) {
      dispatch({
        type: "UpdateCartItem",
        payload: {
          ...pizzaz,
          quantity: pizzaz.quantity + 1,
        },
      });
    } else {
      dispatch({
        type: "AddCartItem",
        payload: {
          id: uuid(),
          product: { ...pizza },
          quantity: 1,
        },
      });
    }
  };

  const handelUpdateQuanity = (cart: CartItem, update: string) => {
    if (update === "+") {
      dispatch({
        type: "UpdateCartItem",
        payload: {
          ...cart,
          quantity: cart.quantity + 1,
        },
      });
    } else if (update === "-") {
      if (cart.quantity >= 1) {
        dispatch({
          type: "UpdateCartItem",
          payload: {
            ...cart,
            quantity: cart.quantity - 1,
          },
        });
      } else {
        dispatch({
          type: "RemoveCartItem",
          payload: cart.id,
        });
      }
    }
  };

  const calculateTotalPrice = () => {
    return state.cart
      .reduce((total, pizza) => total + pizza.product.price * pizza.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="pizza-list">
      <h3>Valda pizzor</h3>
      <ul>
        {state.pizza.map((piz) => (
          <li key={piz.name}>
            {piz.name} - {piz.price}
            <button onClick={() => handleAddPizza(piz)}>Lägg till</button>
          </li>
        ))}
      </ul>
      <div>
        {state.cart.map((pizza) => (
          <div className="pizza-content" key={pizza.product.name}>
            <div className="pizza-name">
              <p>{pizza.product.name}</p>
            </div>
            <div className="pizza-remove">
              <button
                className="pizza-remove-btn"
                onClick={() => handelUpdateQuanity(pizza, "-")}
              >
                -
              </button>
              <span className="pizza-count">{pizza.quantity}</span>
              <button
                className="pizza-add-btn"
                onClick={() => handelUpdateQuanity(pizza, "+")}
              >
                +
              </button>
            </div>
            <div className="pizza-totalprice">
              <p>
                Pris: {(pizza.product.price * pizza.quantity).toFixed(2)}: kr
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="total">Totalt pris: {calculateTotalPrice()}: Kr</h3>
    </div>
  );
};

export default PizzaOrderList;
