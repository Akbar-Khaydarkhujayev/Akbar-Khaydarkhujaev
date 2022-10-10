import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { useSelector } from "react-redux";

const Electronics = () => {
  const category = useSelector((state) => state.category.value);
  return (
    <>
      <Header />
      <Products category="electronics" />
      <Footer />
    </>
  );
};

export default Electronics;
