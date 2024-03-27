import "./_popUp.scss";
import { useContext, useState } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { Pizza } from "../../Type";
import Button from "@mui/material/Button";
import uuid from "react-uuid";

type PupUpProps = {
  klickedPizza: Pizza;
  onClose: () => void;
};

const PopUp = ({ klickedPizza, onClose }: PupUpProps) => {
  const { state, dispatch } = useContext(PizzaContext);
  const [size, setSize] = useState(klickedPizza.size);
  const [extraIngr, setExtraIngr] = useState(klickedPizza.ingredients);
  const [quantity, setQuantity] = useState(1);

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value as "standard" | "barn" | "familj");
  };

  const handleUpdateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const calculatePrice = () => {
    const extra = extraIngr.filter((e) => {
      if (!klickedPizza.ingredients.includes(e)) {
        return e;
      }
    });
    let extraPrice = 0;

    extraPrice = extra.length * 10;

    if (size === "barn") {
      return klickedPizza.price + extraPrice - 10;
    } else if (size === "familj") {
      return klickedPizza.price + extraPrice + 10;
    } else {
      return klickedPizza.price + extraPrice;
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
      <h2 id="pizzaName">{klickedPizza.name}</h2>
      <ul className="ingredient-list">
        <h5>Ingridienser: {klickedPizza.ingredients.join(", ")}</h5>
      </ul>
      <div className="pizza-size-box">
        <h5>Välj storlek</h5>
        <input
          type="radio"
          id="barn"
          name="storlek"
          value={"barn"}
          onChange={handleChangeSize}
        />
        <label htmlFor="barn">Barn-size {klickedPizza.price - 10}kr</label>
        <input
          type="radio"
          id="standard"
          name="storlek"
          value={"standard"}
          onChange={handleChangeSize}
        />
        <label htmlFor="standard">standard {klickedPizza.price}kr</label>
        <input
          type="radio"
          id="family"
          name="storlek"
          value={"familj"}
          onChange={handleChangeSize}
        />
        <label htmlFor="family">family-size {klickedPizza.price + 10}kr</label>
      </div>
      <div className="extra-ingredients-box">
        <h5>Extra ingridienser</h5>
        <div>
          <label htmlFor="tomat">
            Tomat 10kr
            <input
              id="tomat"
              type="checkbox"
              value={"tomat"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="gurka">
            Gurka 10kr
            <input
              id="gurka"
              type="checkbox"
              value={"gurka"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="lök">
            Lök 10kr
            <input
              id="lök"
              type="checkbox"
              value={"lök"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="ost">
            Ost 10kr
            <input
              id="ost"
              type="checkbox"
              value={"ost"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="fetaost">
            Fetaost 10kr
            <input
              id="fetaost"
              type="checkbox"
              value={"fetaost"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="ruccola">
            Ruccola 10kr
            <input
              id="ruccola"
              type="checkbox"
              value={"ruccola"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="räkor">
            Räkor 10kr
            <input
              id="räkor"
              type="checkbox"
              value={"räkor"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="pommes">
            Pommes 10kr
            <input
              id="pommes"
              type="checkbox"
              value={"pommes"}
              onChange={handleChangeExtraIng}
            />
          </label>

          <label htmlFor="feferoni">
            Feferoni 10kr
            <input
              id="feferoni"
              type="checkbox"
              value={"feferoni"}
              onChange={handleChangeExtraIng}
            />
          </label>
        </div>
      </div>
      <div className="order-info-box">
        <label htmlFor="quantity">Antal: </label>
        <input
          type="number"
          value={quantity}
          onChange={handleUpdateQuantity}
          id="quantity"
        />
        Pris: {calculatePrice() * quantity}
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
                  ...klickedPizza,
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
      </div>
    </div>
  );
};

export default PopUp;
