import React, { useState } from "react";
import pizzaData from "./data.json";
import SortMenu from "./SortMenu";

export type Pizza = {
  id: string;
  type: string;
  name: string;
  ingredients: string[];
  price: number;
  size: string;
};

const PizzaMenu = () => {
  const allPizzas: Pizza[] = [
    ...pizzaData.klassiska_pizzor,
    ...pizzaData.vego_pizzor,
    ...pizzaData.sallader,
  ];

  const [pizzas, setPizzas] = useState(allPizzas);

  return (
    <div className="pizza-menu">
      <SortMenu allPizzas={allPizzas} setPizzas={setPizzas} />
      <input type="text" />
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients.join(", ")}</p>
          <p>{pizza.price} kr</p>
          <button>Välj</button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;
