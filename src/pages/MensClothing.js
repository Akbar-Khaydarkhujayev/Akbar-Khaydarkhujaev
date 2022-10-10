import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { useSelector } from "react-redux";

const MensClothing = () => {
  const category = useSelector((state) => state.category.value);
  return (
    <>
      <Header />
      <Products category="men's clothing" />
      <Footer />
    </>
  );
};

export default MensClothing;
