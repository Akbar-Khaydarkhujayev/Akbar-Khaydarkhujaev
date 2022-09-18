import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AboutProduct from "./pages/AboutProduct";

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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
