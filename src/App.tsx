import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import PizzaMenu from "./Pages/PizzaMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <PizzaMenu />
    </BrowserRouter>
  );
}

export default App;
