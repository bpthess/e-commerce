import { useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import AppLoading from "../../AppLoading";
import AppError from "../../error/AppError";
import getError from "../../utils/Utils";
import { Store } from "../../Store";
import {
  Main,
  ProductWrapper,
  ProductContainer,
  ImgContent,
  DescContent,
  DescInner,
  ProductDescHeader,
  ProductDescMiddle,
  ProductDescBottom,
  CartAmountCounter,
  CountOuter,
  AmountCountPlusButton,
  AmountCountMinusButton,
  TotalMoney,
  LoginAfterBenefits,
  TechnicalCheckIcons,
  InStorageCartButton,
} from "./ProductStyle";
import { useTranslation } from "react-i18next";
import { FiHeart } from "react-icons/fi";
import { BiBell, BiPlus, BiMinus } from "react-icons/bi";

// 상태관리 케이스
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
  const { t } = useTranslation();
  // const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  // 상태관리 데이터 저장
  const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    /**
     * TODO:
     *  API 요청하는 과정 중 에러 반환 코드가 중복되어 있음. 리팩토링 필요.
     */

    // 패치 요청
    dispatch({ type: "FETCH_REQUEST" });
    fetch(`http://localhost:8000/api/products/slug/${slug}`)
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
  }, [slug]);

  // 상품 장바구니 추가
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { cart } = state;

  const storageCartHandler = async () => {
    const storageItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = storageItem ? storageItem.quantity + 1 : 1;

    // 갯수 추가 & 제한
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
    contextDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });

    // 상품 추가 시 이동
    // navigate("/cart");
  };

  return loading ? (
    <AppLoading />
  ) : error ? (
    <AppError>{error}</AppError>
  ) : (
    <Main>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <ProductWrapper>
        <ProductContainer>
          <ImgContent>
            <img src={product.image} alt={product.name} />
          </ImgContent>
          <DescContent>
            <DescInner>
              <ProductDescHeader>
                <span className="tag">{product.tag}</span>
                <h2 className="title">{product.name}</h2>
                <p className="desc">{product.desc}</p>
                <p className="price">{product.price}</p>
                <p className="benefit">{t("common.InitLoginAfterBenefits")}</p>
              </ProductDescHeader>
              <ProductDescMiddle>
                {/* {Array.isArray(product)
                  ? product.products.map((desc) => {
                      return <li>{desc.tag}</li>;
                    })
                  : null} */}
                {/* {product &&
                  product.products.map((product) => {
                    return <li>{product.tag}</li>;
                  })} */}
                {/* {product.map(() => {
                  return <li>sdsdsd</li>;
                })} */}
              </ProductDescMiddle>
              <ProductDescBottom>
                <CartAmountCounter>
                  <span className="amount">구매수량</span>
                  <CountOuter>
                    <AmountCountPlusButton>
                      <BiPlus />
                    </AmountCountPlusButton>
                    <span>1</span>
                    <AmountCountMinusButton>
                      <BiMinus />
                    </AmountCountMinusButton>
                  </CountOuter>
                </CartAmountCounter>

                <TotalMoney>
                  {t("product.IProductTotalMoney")} :
                  <strong>{product.price}</strong>
                </TotalMoney>
                <LoginAfterBenefits>
                  <span>{t("product.IPointCccumulate")}</span>
                  {t("common.InitLoginAfterBenefits")}
                </LoginAfterBenefits>
                <TechnicalCheckIcons>
                  <i className="ico heart">
                    <FiHeart />
                  </i>
                  <i className="ico bell">
                    <BiBell />
                  </i>
                  <InStorageCartButton onClick={storageCartHandler}>
                    {t("product.IButtonAddToCart")}
                  </InStorageCartButton>
                </TechnicalCheckIcons>
              </ProductDescBottom>
            </DescInner>
          </DescContent>
        </ProductContainer>
      </ProductWrapper>
    </Main>
  );
}

export default ProductScreen;
