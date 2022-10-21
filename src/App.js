import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AboutProduct from "./pages/AboutProduct";
import AllProducts from "./pages/AllProducts";
import MensClothing from "./pages/MensClothing";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import WomensClothing from "./pages/WomensClothing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/AboutProduct" element={<AboutProduct />}></Route>
        <Route path="/AllProducts" element={<AllProducts />}></Route>
        <Route path="/MensClothing" element={<MensClothing />}></Route>
        <Route path="/Jewelery" element={<Jewelery />}></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/WomensClothing" element={<WomensClothing />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
