import { CartItem } from "../../Type"

type PizzaOrderItemProps = {
  pizza: CartItem
  handleUpdateQuantity: (cart: CartItem, update: string) => void
  handleDelete: (is: string) => void
}

const PizzaOrderListItem = ({
  pizza,
  handleUpdateQuantity,
  handleDelete,
}: PizzaOrderItemProps) => {
  return (
    <div>
      <div className="pizza-content" key={pizza.product.name}>
        <div className="pizza-name">
          <p>{pizza.product.name}</p>
          <p>{pizza.product.ingredients}</p>
        </div>
        <div className="pizza-remove">
          <button
            className="pizza-remove-btn"
            onClick={() => handleUpdateQuantity(pizza, "-")}
          >
            -
          </button>
          <span className="pizza-quantity">{pizza.quantity}</span>
          <button
            className="pizza-add-btn"
            onClick={() => handleUpdateQuantity(pizza, "+")}
          >
            +
          </button>
        </div>

        <div className="pizza-totalprice">
          <p>{(pizza.product.price * pizza.quantity).toFixed(2)}: kr</p>
        </div>
        <button className="delete-btn" onClick={() => handleDelete(pizza.id)}>
          X
        </button>
      </div>
    </div>
  )
}

export default PizzaOrderListItem
