import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import "./Scss/main.scss";
import PizzaContextProvider from "./context/PizzaContextProvider";

function App() {
  return (
    <PizzaContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </PizzaContextProvider>
  );
}

export default App;
