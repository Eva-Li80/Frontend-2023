import "./_popUp.scss";
import { useContext, useState } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { Pizza } from "../../Type";
import Button from "@mui/material/Button";
import uuid from "react-uuid";

type PupUpProps = {
  selectedPizza: Pizza;
  onClose: () => void;
};

const PopUp = ({ selectedPizza, onClose }: PupUpProps) => {
  const { state, dispatch } = useContext(PizzaContext);
  const [size, setSize] = useState(selectedPizza.size);
  const [extraIngr, setExtraIngr] = useState(selectedPizza.ingredients);
  const [quantity, setQuantity] = useState(1);

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value as "standard" | "barn" | "familj");
  };

  const handleUpdateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const calculatePrice = () => {
    const extra = extraIngr.filter((e) => {
      if (!selectedPizza.ingredients.includes(e)) {
        return e;
      }
    });
    let extraPrice = 0;

    extraPrice = extra.length * 10;

    if (size === "barn") {
      return selectedPizza.price + extraPrice - 10;
    } else if (size === "familj") {
      return selectedPizza.price + extraPrice + 10;
    } else {
      return selectedPizza.price + extraPrice;
    }
  };

  const handleChangeExtraIng = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setExtraIngr([...extraIngr, e.target.value]);
    } else {
      setExtraIngr(extraIngr.filter((i) => i !== e.target.value));
    }
  };

  return (
    <div className="popUp-module">
      <h2 id="pizza-title">{selectedPizza.name}</h2>
      <ul className="ingredient-list">
        <h5 id="ingredient-heading">
          Ingridienser: {selectedPizza.ingredients.join(", ")}
        </h5>
      </ul>
      <div className="pizza-size-box">
        <h5 id="size-heading">Välj storlek</h5>
        <input
          type="radio"
          id="barn"
          name="storlek"
          value={"barn"}
          onChange={handleChangeSize}
        />
        <label htmlFor="barn">Barnpizza {selectedPizza.price - 10}kr</label>
        <input
          type="radio"
          id="standard"
          name="storlek"
          value={"standard"}
          onChange={handleChangeSize}
        />
        <label htmlFor="standard">Standard {selectedPizza.price}kr</label>
        <input
          type="radio"
          id="family"
          name="storlek"
          value={"familj"}
          onChange={handleChangeSize}
        />
        <label htmlFor="family">
          Familjepizza {selectedPizza.price + 10}kr
        </label>
      </div>
      <div className="extra-ingredients-box">
        <h5 id="extraIngr-heading">Extra ingridienser</h5>
        <div className="ingredient-grid">
          <div id="tomato-box">
            <input
              id="tomat"
              type="checkbox"
              value={"tomat"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="tomat">Tomat 10kr</label>
          </div>

          <div id="cucumber-box">
            <input
              id="gurka"
              type="checkbox"
              value={"gurka"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="gurka">Gurka 10kr</label>
          </div>

          <div id="onion-box">
            <input
              id="lök"
              type="checkbox"
              value={"lök"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="lök">Lök 10kr</label>
          </div>

          <div id="cheese-box">
            <input
              id="ost"
              type="checkbox"
              value={"ost"}
              onChange={handleChangeExtraIng}
            />

            <label htmlFor="ost">Ost 10kr</label>
          </div>

          <div id="fetacheese-box">
            <input
              id="fetaost"
              type="checkbox"
              value={"fetaost"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="fetaost">Fetaost 10kr</label>
          </div>

          <div id="ruccola-box">
            <input
              id="ruccola"
              type="checkbox"
              value={"ruccola"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="ruccola">Ruccola 10kr</label>
          </div>

          <div id="shrimp-box">
            <input
              id="räkor"
              type="checkbox"
              value={"räkor"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="räkor">Räkor 10kr</label>
          </div>

          <div id="fries-box">
            <input
              id="pommes"
              type="checkbox"
              value={"pommes"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="pommes">Pommes 10kr</label>
          </div>

          <div id="feferoni-box">
            <input
              id="feferoni"
              type="checkbox"
              value={"feferoni"}
              onChange={handleChangeExtraIng}
            />
            <label htmlFor="feferoni">Feferoni 10kr</label>
          </div>
        </div>
      </div>
      <div className="order-info-box">
        <div className="quantity-price-box">
          <label htmlFor="quantity">
            <p>Antal:</p>{" "}
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleUpdateQuantity}
            id="quantity"
            min={1}
          />
          <p>Pris: {calculatePrice() * quantity}</p>
        </div>

        <div className="submit-abort-box">
          <Button
            className="add-btn"
            variant="contained"
            color="success"
            onClick={() => {
              dispatch({
                type: "AddCartItem",
                payload: {
                  id: uuid(),
                  product: {
                    ...selectedPizza,
                    ingredients: extraIngr,
                    size: size,
                    price: calculatePrice(),
                  },
                  quantity: quantity,
                },
              });
              onClose();
            }}
          >
            Lägg till
          </Button>
          <Button variant="contained" className="abort-btn" onClick={onClose}>
            Avbryt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
