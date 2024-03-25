import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContextProvider";
import { CartItem, Pizza } from "../Type";
import uuid from "react-uuid";

const Menu = () => {
  const { state, dispatch } = useContext(PizzaContext);

  console.log(state);
  function handleDispatch(pizza: Pizza) {
    dispatch({
      type: "AddCartItem",
      payload: {
        id: uuid(),
        product: { ...pizza },
        quantity: 1,
      },
    });
  }

  function handleDelete(id: string) {
    dispatch({
      type: "RemoveCartItem",
      payload: id,
    });
  }
  function handleEdit(cartItem: CartItem) {
    dispatch({
      type: "UpdateCartItem",
      payload: { ...cartItem, quantity: 5 },
    });
  }
  return (
    <div>
      <h2>Menu</h2>

      {/* LITE TESTKOD SÅ NI SER ATT DET FUNKAR */}
      {state.pizza.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <button onClick={() => handleDispatch(p)}>Add pizza to cart</button>
        </div>
      ))}

      {state.cart.map((c) => (
        <div key={c.id}>
          <p>
            {c.product.name}, {c.quantity}
          </p>
          <button onClick={() => handleEdit(c)}>Update quantity</button>
          <button onClick={() => handleDelete(c.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
