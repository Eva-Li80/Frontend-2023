import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContextProvider"

const ShoppingCartButton = () => {
  const pizzas = useContext(PizzaContext)
  return (
    <div className="shopping-cart-button">
      <p>{pizzas.state.cart.length}</p>
      <p>🛒</p>
    </div>
  )
}

export default ShoppingCartButton
