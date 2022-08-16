import { useParams } from "react-router-dom";
import { useEffect, useContext, useReducer, axios } from "react";
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
        /* TODO: 에러 중복 및 반환이 안됨, 추후 개선과 리팩토링 필요 */
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      });
  }, [slug]);

  const { state, dispatch: cxtDispatch } = useContext(Store);
  const { cart } = state;
  const cartAdditionalHandler = async () => {
    const isValid = cart.isValid.find((x) => x._id === product._id);
    const amount = isValid ? isValid.amount + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < amount) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, qunitity: 1 },
    });
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
      <button onClick={cartAdditionalHandler}>Add to Cart</button>
    </div>
  );
}

export default ProductScreen;
