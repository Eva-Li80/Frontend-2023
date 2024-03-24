import React from "react";
import { Pizza } from "./PizzaMenu";

type SortMenuProps = {
  allPizzas: Pizza[];
  setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
};

const SortMenu: React.FC<SortMenuProps> = ({ allPizzas, setPizzas }) => {
  const handleSort = (category: string) => {
    let sortedPizzas: Pizza[] = [];
    switch (category) {
      case "all":
        sortedPizzas = allPizzas;
        break;
      case "standard":
        sortedPizzas = allPizzas.filter((pizza) => pizza.type === "pizza");
        break;
      case "vego":
        sortedPizzas = allPizzas.filter((pizza) => pizza.type === "vego");
        break;
      case "sallad":
        sortedPizzas = allPizzas.filter((pizza) => pizza.type === "sallad");
        break;
      default:
        sortedPizzas = allPizzas;
        break;
    }
    setPizzas(sortedPizzas);
  };

  return (
    <div className="sort-menu">
      <button onClick={() => handleSort("all")} className="all">
        Alla
      </button>
      <button onClick={() => handleSort("standard")} className="standard">
        Standard
      </button>
      <button onClick={() => handleSort("vego")} className="vego">
        Vego
      </button>
      <button onClick={() => handleSort("sallad")} className="sallad">
        Sallad
      </button>
    </div>
  );
};

export default SortMenu;
