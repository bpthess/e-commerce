import { useEffect, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import {
  Main,
  SectionTitle,
  ProductsWrapper,
  ProductsContainer,
  ImgContents,
  ImgItem,
  ProductsDesc,
  OnStorageCartButton,
} from "./HomeStyle";
import { useTranslation } from "react-i18next";
// import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import AppLoading from "../../AppLoading";
import AppError from "../../error/AppError";
import { Store } from "../../store/Store";
import { BiShoppingBag } from "react-icons/bi";
import getError from "../../utils/Utils";
import axios from "axios";

// 상태관리 케이스
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

function Home() {
  const { t } = useTranslation();
  // 상태관리 (상품, 로딩, 에러) 관찰
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    // 패치 요청
    dispatch({ type: "FETCH_REQUEST" });
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        /**
         * TODO:
         * 통신 요청 과정 중 에러 반환 코드가 중복되어 있음. 리팩토링 필요.
         */
        throw new Error("네트워크 오류가 발생했습니다.");
      })
      // 패치 성공
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      // 패치 실패
      .catch((error) => {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      });
  }, []);

  // 상품 장바구니 추가
  const { state, dispatch: contextDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  // 상품 추가 핸들러
  const storageCartHandler = async (item) => {
    const storageItem = cartItems.find((x) => x._id === item._id);
    const quantity = storageItem ? storageItem.quantity + 1 : 1;

    try {
      axios.get(`/api/products/${item._id}`);
    } catch (error) {
      error(getError(error));
    }
    if (item.countInStock < quantity) {
      window.alert("상품이 품절되었습니다.");
      return;
    }
    contextDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Main>
      <Helmet>
        <title>{t("helmet.Home")}</title>
      </Helmet>
      {loading ? (
        <AppLoading />
      ) : error ? (
        <AppError>{error}</AppError>
      ) : (
        <>
          <SectionTitle>{t("home.IHomeSectionMent")}</SectionTitle>
          <ProductsWrapper>
            {products.map((product) => {
              return (
                <ProductsContainer key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <ImgContents>
                      {/* TODO: 이미지 안나올 시 텍스트나 임의 이미지 대체, map이여서 배열 전체가 변하게 됨, 해당 갯수만큼 state를 만들거나, src값을 변경하는 코드를 짜야함. */}
                      {/* <img
                      src={isItemHover ? product.imageHover : product.image}
                      onMouseOver={() => setIsItemHover(true)}
                      onMouseOut={() => setIsItemHover(false)}
                    /> */}
                      <ImgItem src={product.image} alt={product.name} />
                    </ImgContents>
                  </Link>
                  <ProductsDesc>
                    <strong className="tag">{product.tag}</strong>
                    <Link to={`/product/${product.slug}`}>
                      <span>{product.name}</span>
                    </Link>
                    <p className="price">{product.price}</p>
                    <p className="desc">{product.desc}</p>
                    <OnStorageCartButton
                      onClick={() => storageCartHandler(product)}
                    >
                      <BiShoppingBag />
                    </OnStorageCartButton>
                  </ProductsDesc>
                </ProductsContainer>
              );
            })}
          </ProductsWrapper>
        </>
      )}
    </Main>
  );
}

export default Home;
