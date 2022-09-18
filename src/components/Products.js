import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductId } from "../features/ChoosenProduct";
import Loading from "./Loading";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <Link to="/AboutProduct" key={product.id}>
              <div
                className="card"
                style={{ width: "250px", marginTop: "30px" }}
                onClick={() => {
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
                  <div className="mt-3">
                    <button className="btn btn-outline-dark">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className="products-wrapper">
      <h1> Products</h1>
      <div className="products">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
