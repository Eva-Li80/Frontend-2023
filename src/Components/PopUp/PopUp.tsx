import "./_popUp.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const PopUp = () => {
  return (
    <div className="popUpContainer">
      <h2>pizza:</h2>
      <h5>ingridienser:</h5>
      <div className="pizzaSizeDiv">
        {" "}
        <FormLabel id="demo-row-radio-buttons-group-label">
          Pizza strolek
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Barn" control={<Radio />} label="Barn" />
          <FormControlLabel
            value="Standard"
            control={<Radio />}
            label="Standard"
          />
          <FormControlLabel
            value="Family-size"
            control={<Radio />}
            label="Family-size"
          />
        </RadioGroup>
      </div>
      <div className="extraIngdDiv">
        <h5>Extra ingridienser</h5>
        <form action="">
          <input id="tomat" type="checkbox" value={"tomat"} />
          <label htmlFor="tomat">Tomat</label>

          <input id="gurka" type="checkbox" value={"gurka"} />
          <label htmlFor="gurka">Gurka</label>

          <input id="lök" type="checkbox" value={"lök"} />
          <label htmlFor="lök">Lök</label>

          <input id="ost" type="checkbox" value={"ost"} />
          <label htmlFor="ost">Ost</label>

          <input id="oliver" type="checkbox" value={"oliver"} />
          <label htmlFor="oliver">Oliver</label>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
