import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductId } from "../redux/ChoosenProduct";
import { AddToCart } from "../redux/CartProducts";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { AlertDanger, AlertSuccess } from "./Alert";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [alertD, setAlertD] = useState(false);
  const [alertS, setAlertS] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const link =
        props.category === "AllProducts"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${props.category}`;
      const response = await fetch(link);
      setData(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <div key={product.id} className="position-relative m-3">
              <div
                className="card card-shadow"
                style={{ width: "250px", marginTop: "30px" }}
                onClick={() => {
                  navigate("/AboutProduct");
                  dispatch(getProductId({ id: product.id }));
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="card-body">
                  <div className="product-header">
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <div className="mt-3">
                    <span className="badge bg-dark even-larger-badge">
                      {product.price} $
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-dark add-btn"
                onClick={() => {
                  const cartProd = [...cart.products];
                  let check = true;
                  for (let i = 0; i < cartProd.length; i++) {
                    if (cartProd[i].id === product.id) {
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
                Add to Cart
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <AlertDanger show={alertD} />
      <AlertSuccess show={alertS} />
      <div className="products-wrapper">
        <h1> Products</h1>
        <div className="products">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
