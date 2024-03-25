import React from "react";
import { Pizza } from "../../Type";

import AllaImage from "../../Assets/img/unleashed-agency-EZpGDYWBAYA-unsplash.jpg";
import StandardImage from "../../Assets/img/vit-ch-Oxb84ENcFfU-unsplash.jpg";
import VegoImage from "../../Assets/img/likemeat-CbNAuxSZTFo-unsplash.jpg";
import SalladImage from "../../Assets/img/jenny-theolin-Abodxj2grwY-unsplash.jpg";

type SortMenuProps = {
  pizzas: Pizza[];
  setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
};

const SortMenu: React.FC<SortMenuProps> = ({ pizzas, setPizzas }) => {
  const handleSort = (category: string) => {
    let sortedPizzas: Pizza[] = [];
    switch (category) {
      case "all":
        sortedPizzas = pizzas;
        break;
      case "pizza":
        sortedPizzas = pizzas.filter((pizza) => pizza.type === "pizza");
        break;
      case "vego":
        sortedPizzas = pizzas.filter((pizza) => pizza.type === "vego");
        break;
      case "sallad":
        sortedPizzas = pizzas.filter((pizza) => pizza.type === "sallad");
        break;
      default:
        sortedPizzas = pizzas;
        break;
    }
    setPizzas(sortedPizzas);
  };

  return (
    <div className="sort-menu">
      <img
        src={AllaImage}
        alt="Alla"
        onClick={() => handleSort("all")}
        className="sort-image all"
      />
      <img
        src={StandardImage}
        alt="Standard"
        onClick={() => handleSort("pizza")}
        className="sort-image standard"
      />
      <img
        src={VegoImage}
        alt="Vego"
        onClick={() => handleSort("vego")}
        className="sort-image vego"
      />
      <img
        src={SalladImage}
        alt="Sallad"
        onClick={() => handleSort("sallad")}
        className="sort-image sallad"
      />
    </div>
  );
};

export default SortMenu;
