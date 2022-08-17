import { useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import AppLoading from "../AppLoading";
import AppError from "../error/AppError";
import getError from "../Utils";
import { Store } from "../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    fetch(`http://localhost:8000/api/products/slug/${slug}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        /**
         * TODO: 에러 중복 및 반환이 안됨, 추후 개선과 리팩토링 필요
         */
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      });
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(
    //   `http://localhost:8000/api/products/${product._id}`
    // );
    const data = () => {
      try {
        axios.get(`/api/products/${product._id}`);
      } catch (error) {
        error(getError(error));
      }
    };
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });

    navigate("/cart");
  };

  return loading ? (
    <AppLoading />
  ) : error ? (
    <AppError>{error}</AppError>
  ) : (
    <div>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price : ${product.price}</p>
      <p>{product.description}</p>
      {/* {product.countInStock > 0 && ( */}
      <button onClick={addToCartHandler}>Add to Cart</button>
      {/* )} */}
    </div>
  );
}

export default ProductScreen;
