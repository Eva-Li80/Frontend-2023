import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContextProvider"

const ShoppingCartButton = () => {
  const { state } = useContext(PizzaContext)

  const getNumberOfItemsOrdered = () => {
    let sum = 0
    state.cart.forEach((item) => {
      sum += item.quantity
    })
    return sum
  }
  return (
    <div className="shopping-cart-button">
      <p>{getNumberOfItemsOrdered()}</p>
      <p>🛒</p>
    </div>
  )
}

export default ShoppingCartButton
