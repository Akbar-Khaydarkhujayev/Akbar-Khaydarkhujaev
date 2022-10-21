import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddToCart } from "../redux/CartProducts";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value.products);
  const [filter, setFilter] = useState(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Products = () => {
    // const removeProd = (id) => {
    //   setFilter(filter.filter((product) => product.id !== id));
    //   dispatch(AddToCart({ products: filter }));
    // };
    const getPrice = () => {
      let overAllPrice = 0;
      cart.map((prod) => {
        return (overAllPrice += prod.price);
      });
      return overAllPrice;
    };
    if (filter.length === 0) {
      return <h1 style={{ margin: "130px 0 150px 0" }}>Cart is Empty</h1>;
    } else {
      return (
        <div className="row">
          <div className="col-9">
            {filter.map((product) => {
              return (
                <div key={product.id} className="card text-center mt-2">
                  <div className="card-body cart-item">
                    <div
                      style={{
                        height: "auto",
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.image}
                        alt="..."
                        className="img-thumbnail cart-image"
                      />
                    </div>
                    <div style={{ width: "70%" }}>
                      <h5 className="card-title h1 mb-4">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <div className="m-auto h3 mt-4 mb-4">
                        <span className="badge bg-primary">
                          {product.price} $
                        </span>
                      </div>
                      <button className="btn btn-outline-success btn-md me-2">
                        Buy Only This
                      </button>
                      <button
                        className="btn btn-outline-danger btn-md me-2"
                        onClick={() => {
                          const filtered = filter.filter(
                            (prod) => prod.id !== product.id
                          );
                          dispatch(AddToCart({ products: filtered }));
                          setFilter(filtered);
                        }}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-3">
            <div className="card-body cart-column">
              <div>
                <h5 className="card-title h3">Buy All Products Right Now</h5>
              </div>
              <div className="h2">
                <span className="badge bg-primary">{getPrice()} $</span>
              </div>
              <div>
                <button className="btn btn-outline-success btn-lg mb-4">
                  Buy All
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "80px", width: "90%", margin: "0 auto" }}>
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
