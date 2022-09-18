import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const AboutProduct = () => {
  const product = useSelector((state) => state.product.value);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Product = () => {
    const filter = data.filter((item) => item.id === product.id);
    return (
      <>
        <div className="product-image">
          <img src={filter[0].image} />
        </div>
        <div className="v-center">
          <h1>{filter[0].title}</h1>
          <p>{filter[0].description}</p>
          <div className="m-auto display-6 mt-4">
            <span className="badge bg-primary">$ {filter[0].price}</span>
          </div>
          <div className="m-auto display-6 mt-4">
            <span className="badge bg-primary">
              <i class="fa fa-star" aria-hidden="true"></i>
              {"  "}
              {filter[0].rating.rate}
            </span>
          </div>
          <button
            className="btn btn-success"
            style={{ width: "50%", margin: "30px auto" }}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to
            Cart
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <Header></Header>
      <div className="product-wrapper pt-5">
        <div className="product">{loading ? <Loading /> : <Product />}</div>
      </div>
      <Footer />
    </>
  );
};

export default AboutProduct;
