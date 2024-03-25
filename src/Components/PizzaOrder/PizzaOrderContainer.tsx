import Button from "@mui/material/Button";
import PizzaOrderList from "./PizzaOrderList";


const PizzaOrderContainer = () => {
  return (
    <div className="pizza-container">
      <h1 className="order-header">Pizza Beställning</h1>
      <PizzaOrderList/>
      <div className="btn-container">
        <Button className="btn"variant="contained">
          Lägg till mer ?
        </Button>
        <Button className="btn"
          variant="contained"
        >
          Beställ
        </Button>
      </div>
    </div>
  );
};

export default PizzaOrderContainer;
