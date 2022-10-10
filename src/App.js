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
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route
          path="/Registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route
          path="/AboutProduct"
          element={<AboutProduct></AboutProduct>}
        ></Route>
        <Route
          path="/AllProducts"
          element={<AllProducts></AllProducts>}
        ></Route>
        <Route
          path="/MensClothing"
          element={<MensClothing></MensClothing>}
        ></Route>
        <Route path="/Jewelery" element={<Jewelery></Jewelery>}></Route>
        <Route
          path="/Electronics"
          element={<Electronics></Electronics>}
        ></Route>
        <Route
          path="/WomensClothing"
          element={<WomensClothing></WomensClothing>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
