import { useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ProductArea } from "./HomeStyle";
import { useTranslation } from "react-i18next";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import AppLoading from "../AppLoading";
import AppError from "../error/AppError";
import { Store } from "../Store";

// 리듀서 적용
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// 캡슐화, 은닉화
class Person {
  constructor(data) {
    this.data = data;
  }

  get value() {
    return `${this._data}`;
  }

  set value(value) {
    this._data = value;
  }
}
const title = new Person("Featured Products");
const submitButton = new Person("Add to cart");

// 뷰
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // setProducts(data);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        console.log(`error: ${error}`);
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      });
  }, []);

  const { state, dispatch: cxtDispatch } = useContext(Store);
  const cartAdditionalHandler = () => {
    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...products, qunitity: 1 },
    });
  };

  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>E-Commerce</title>
      </Helmet>
      <h1>{title.data}</h1>
      <ProductArea>
        {loading ? (
          <AppLoading />
        ) : error ? (
          <AppError>{error}</AppError>
        ) : (
          products.map((product) => {
            return (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <span>{product.name}</span>
                  </Link>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button onClick={cartAdditionalHandler}>
                    {submitButton.data}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </ProductArea>
    </div>
  );
}

export default HomeScreen;
