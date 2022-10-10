import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const AllProducts = () => {
  return (
    <>
      <Header />
      <Products category="AllProducts" />
      <Footer />
    </>
  );
};

export default AllProducts;
