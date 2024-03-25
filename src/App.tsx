import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
<<<<<<< HEAD
import Header from "./Components/Header/Header";
=======
import "./Scss/main.scss";
import Header from "./Components/Header/Header";
import PizzaContextProvider from "./context/PizzaContextProvider";
>>>>>>> main

function App() {
  return (
    <PizzaContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
<<<<<<< HEAD
    </>
=======
    </PizzaContextProvider>
>>>>>>> main
  );
}

export default App;
