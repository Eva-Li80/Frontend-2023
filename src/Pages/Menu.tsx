import { useContext } from "react";
import PopUp from "../Components/PopUp/PopUp";
import { PizzaContext } from "../context/PizzaContextProvider";
import { Pizza } from "../Type";
import PizzaMenu from "../Components/Menu/PizzaMenu";

const Menu = () => {
  const { state, dispatch } = useContext(PizzaContext);
  const pizza: Pizza = state.pizza[0];
  console.log(pizza);
  return (
    <div className="menu-page">
      <PizzaMenu />
      <PopUp klickedPizza={pizza} />
    </div>
  );
};

export default Menu;
