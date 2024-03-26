import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { CartItem } from "../../Type";

const PizzaOrderList = () => {
  const { state, dispatch } = useContext(PizzaContext);

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

  const handleDelete = (id: string) => {
    dispatch({
      type: "RemoveCartItem",
      payload: id,
    });
  };

  const calculateTotalPrice = () => {
    return state.cart
      .reduce((total, pizza) => total + pizza.product.price * pizza.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="pizza-list">
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
            <button
              className="delete-btn"
              onClick={() => handleDelete(pizza.id)}
            >
              Ta bort
            </button>
          </div>
        ))}
      </div>
      {state.cart && state.cart.length > 0 ? (
        <h3 className="total">Totalt pris: {calculateTotalPrice()}: Kr</h3>
      ) : (
        <div className="no-order">
          <h3 className="total text">
            Ingen order lagd: {calculateTotalPrice()}: Kr
          </h3>
        </div>
      )}
    </div>
  );
};

export default PizzaOrderList;
