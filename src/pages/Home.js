import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Products category="AllProducts" />
      <Footer />
    </>
  );
};

export default Home;
