import Button from "@mui/material/Button";
import PizzaOrderList from "./PizzaOrderList";
import PizzaOrdered from "./PizzaOrdered";
import { Link } from "react-router-dom";


const PizzaOrderContainer = () => {
  return (
    <div className="pizza-container">
      <h1 className="order-header">Pizza Beställning</h1>
      <PizzaOrderList/>
      <div className="btn-container">
        <Button className="btn"variant="contained">
         <Link className="link" to="/"> Lägg till mer ?</Link>
        </Button>
      <PizzaOrdered/>
      </div>
    </div>
  );
};

export default PizzaOrderContainer;
