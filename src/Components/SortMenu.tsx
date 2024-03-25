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
      <img
        src="./path/to/alla-image.jpg"
        alt="Alla"
        onClick={() => handleSort("all")}
        className="sort-image all"
      />
      <img
        src="/path/to/standard-image.jpg"
        alt="Standard"
        onClick={() => handleSort("standard")}
        className="sort-image standard"
      />
      <img
        src="/path/to/vego-image.jpg"
        alt="Vego"
        onClick={() => handleSort("vego")}
        className="sort-image vego"
      />
      <img
        src="/path/to/sallad-image.jpg"
        alt="Sallad"
        onClick={() => handleSort("sallad")}
        className="sort-image sallad"
      />
    </div>
  );
};

export default SortMenu;
