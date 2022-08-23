import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
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
import { Store } from "../../Store";
import { BiShoppingBag } from "react-icons/bi";
import getError from "../../utils/Utils";

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

function HomeScreen() {
  const { t } = useTranslation();

  // 대체 이미지 state
  // const [isItemHover, setIsItemHover] = useState(false);

  // 상태관리 데이터 저장
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,

    error: "",
  });

  useEffect(() => {
    /**
     * TODO:
     * 통신 요청 과정 중 에러 반환 코드가 중복되어 있음. 리팩토링 필요.
     */

    // 패치 요청
    dispatch({ type: "FETCH_REQUEST" });
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
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
  const { cart } = state;

  const storageCartHandler = async () => {
    const storageItem = cart.cartItems.find((x) => x._id === products._id);
    const quantity = storageItem ? storageItem.quantity + 1 : 1;

    contextDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...products, quantity },
    });
  };

  return (
    <Main>
      <Helmet>
        <title>{t("helmet.Home")}</title>
      </Helmet>
      <SectionTitle>{t("home.IHomeSectionMent")}</SectionTitle>
      <ProductsWrapper>
        {loading ? (
          <AppLoading />
        ) : error ? (
          <AppError>{error}</AppError>
        ) : (
          products.map((product) => {
            return (
              <ProductsContainer key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <ImgContents>
                    {/* TODO: 이미지 호버 시 대체 이미지 전환, map이여서 배열 전체가 변하게 됨, 해당 갯수만큼 state를 만들거나, src값을 변경하는 코드를 짜야함. */}
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
                  <OnStorageCartButton onClick={storageCartHandler}>
                    <BiShoppingBag />
                  </OnStorageCartButton>
                </ProductsDesc>
              </ProductsContainer>
            );
          })
        )}
      </ProductsWrapper>
    </Main>
  );
}

export default HomeScreen;
