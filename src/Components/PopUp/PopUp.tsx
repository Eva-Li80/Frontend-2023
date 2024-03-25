import "./_popUp.scss";
import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { Pizza } from "../../Type";
import Button from "@mui/material/Button";

const PopUp = ({ klickedPizza }: Pizza) => {
  /* const { state, dispatch } = useContext(PizzaContext); */

  console.log("vad jag får från klickedPizza", klickedPizza);

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Du klickade på", e.target.value);
  };

  const handleChangeExtraIng = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Du klickade på", e.target.value);
  };

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
        <form action="">
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
        </form>
      </div>
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default PopUp;
