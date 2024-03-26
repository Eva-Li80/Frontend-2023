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

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Du klickade på", e.target.value);
    setSize(e.target.value as "standard" | "barn" | "familj");
  };

  const handleChangeExtraIng = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setExtraIngr([...extraIngr, e.target.value]);
    } else {
      setExtraIngr(extraIngr.filter((i) => i !== e.target.value));
    }
  };
  console.log("extra ing", extraIngr);
  console.log("hej", state.cart);

  return (
    <div className="popUpContainer">
      <h2>{klickedPizza.name}</h2>
      <ul className="ingredientList">
        <h5>Ingridienser: {klickedPizza.ingredients.join(", ")}</h5>
      </ul>
      <div className="pizzaSizeDiv">
        <h5>Välj storlek</h5>
        <input
          type="radio"
          id="barn"
          name="storlek"
          value={"barn"}
          onChange={handleChangeSize}
        />
        <label htmlFor="barn">Barn-size</label>
        <input
          type="radio"
          id="standard"
          name="storlek"
          value={"standard"}
          onChange={handleChangeSize}
        />
        <label htmlFor="standard">standard</label>
        <input
          type="radio"
          id="family"
          name="storlek"
          value={"family"}
          onChange={handleChangeSize}
        />
        <label htmlFor="family">family-size</label>
      </div>

      <div className="extraIngdDiv">
        <h5>Extra ingridienser</h5>
        <div>
          <input
            id="tomat"
            type="checkbox"
            value={"tomat"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="tomat">Tomat</label>

          <input
            id="gurka"
            type="checkbox"
            value={"gurka"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="gurka">Gurka</label>

          <input
            id="lök"
            type="checkbox"
            value={"lök"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="lök">Lök</label>

          <input
            id="ost"
            type="checkbox"
            value={"ost"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="ost">Ost</label>

          <input
            id="fetaost"
            type="checkbox"
            value={"fetaost"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="fetaost">Fetaost</label>

          <input
            id="ruccola"
            type="checkbox"
            value={"ruccola"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="ruccola">Ruccola</label>

          <input
            id="räkor"
            type="checkbox"
            value={"räkor"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="räkor">Räkor</label>

          <input
            id="pommes"
            type="checkbox"
            value={"pommes"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="pommes">Pommes</label>

          <input
            id="feferoni"
            type="checkbox"
            value={"feferoni"}
            onChange={handleChangeExtraIng}
          />
          <label htmlFor="feferoni">Feferoni</label>
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({
            type: "AddCartItem",
            payload: {
              id: uuid(),
              product: {
                ...klickedPizza,
                ingredients: extraIngr,
                size: size,
              },
              quantity: 1,
            },
          });

          onClose();
        }}
      >
        Contained{" "}
      </Button>
    </div>
  );
};

export default PopUp;
