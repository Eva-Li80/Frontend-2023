import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import "./Scss/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
