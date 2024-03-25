import React, { useContext, useState } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { Pizza } from "../../Type";
import SortMenu from "../SortMenu/SortMenu";
import { Button } from "@mui/material";

const PizzaMenu: React.FC = () => {
  const { state } = useContext(PizzaContext);
  const [pizzas, setPizzas] = useState<Pizza[]>(state.pizza);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredPizzas = state.pizza.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm)
    );
    setPizzas(filteredPizzas);
  };

  return (
    <div className="pizza-menu">
      <SortMenu pizzas={state.pizza} setPizzas={setPizzas} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Sök Pizza..."
        className="search"
      />
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="menu-item">
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients.join(", ")}</p>
          </div>
          <div>
            <p>{pizza.price} kr</p>
            <Button color="success" variant="contained">
              Välj
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;
