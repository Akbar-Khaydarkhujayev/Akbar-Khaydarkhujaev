import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/CartProducts";
import { AlertDanger, AlertSuccess } from "../components/Alert";

const AboutProduct = () => {
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alertD, setAlertD] = useState(false);
  const [alertS, setAlertS] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const Product = () => {
    const filter = data.filter((item) => item.id === product.id);
    return (
      <>
        <div className="product-image">
          <img src={filter[0].image} alt={filter[0].title} />
        </div>
        <div className="v-center">
          <h1>{filter[0].title}</h1>
          <p>{filter[0].description}</p>
          <div className="m-auto display-6 mt-4">
            <span className="badge bg-primary">$ {filter[0].price}</span>
          </div>
          <div className="m-auto display-6 mt-4">
            <span className="badge bg-primary">
              <i className="fa fa-star" aria-hidden="true"></i>Rating
              {"  "}
              {filter[0].rating.rate}
            </span>
          </div>
          <button
            className="btn btn-success"
            style={{ width: "50%", margin: "30px auto" }}
            // onClick={() => {
            //   const cartProd = [...cart.products];
            //   cartProd.push(filter[0]);
            //   dispatch(AddToCart({ products: cartProd }));
            // }}
            onClick={() => {
              const cartProd = [...cart.products];
              let check = false;
              for (let i = 0; i < cartProd.length; i++) {
                if (cartProd[i].id !== product.id) {
                  check = true;
                } else {
                  check = false;
                }
              }
              if (check === true || cartProd.length === 0) {
                setAlertS(true);
                cartProd.push(product);
                dispatch(AddToCart({ products: cartProd }));
                check = false;
                setTimeout(() => {
                  setAlertS(false);
                }, 3000);
              } else {
                setAlertD(true);
                setTimeout(() => {
                  setAlertD(false);
                }, 3000);
              }
            }}
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
      <AlertDanger show={alertD} />
      <AlertSuccess show={alertS} />
      <div className="product-wrapper pt-5">
        <div className="product">{loading ? <Loading /> : <Product />}</div>
      </div>
      <Footer />
    </>
  );
};

export default AboutProduct;
