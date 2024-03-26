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
      <div onClick={() => handleSort("all")}>
        <img src={AllaImage} alt="Alla" className="sort-image all" />
        <h3>ALLA</h3>
      </div>
      <div onClick={() => handleSort("pizza")}>
        <img
          src={StandardImage}
          alt="Standard"
          className="sort-image standard"
        />
        <h3>PIZZA</h3>
      </div>
      <div onClick={() => handleSort("vego")}>
        <img src={VegoImage} alt="Vego" className="sort-image vego" />
        <h3>VEGO</h3>
      </div>
      <div onClick={() => handleSort("sallad")}>
        <img src={SalladImage} alt="Sallad" className="sort-image sallad" />
        <h3>SALLAD</h3>
      </div>
    </div>
  );
};

export default SortMenu;
