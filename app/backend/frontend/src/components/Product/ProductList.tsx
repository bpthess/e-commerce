import { useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AppLoading from "../../AppLoading";
import AppError from "../../error/appError";
import getError from "../../error/getError";
import { Store } from "../../store/Store";
import {
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
} from "./Styled";
import { FiHeart } from "react-icons/fi";
import { BiBell, BiPlus, BiMinus } from "react-icons/bi";
import { GlobalData } from "../../types/global";

// 상태관리 케이스
const reducer = (state: any, action: { type: any; payload: undefined }) => {
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

const ProductList = () => {
  const { t } = useTranslation();
  const params = useParams();
  const { slug } = params;

  // 상태관리 데이터 저장
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
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
    dispatch({
      type: "FETCH_REQUEST",
      payload: undefined,
    });
    fetch(`/api/products/slug/${slug}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
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
  }, [slug]);

  // 상품 장바구니 추가
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { cart } = state;

  const storageCartHandler = async () => {
    const storageItem = cart.cartItems.find(
      (x: { _id: string | number }) => x._id === product._id
    );
    const quantity = storageItem ? storageItem.quantity + 1 : 1;

    // 갯수 추가 & 제한
    /* TODO: data 타입 지정, countInStock 에러 */
    const data: any = (product: GlobalData) => {
      try {
        axios.get(`http://localhost:8000/api/products/${product._id}`);
      } catch (error: any) {
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
  };

  return loading ? (
    <AppLoading />
  ) : error ? (
    <AppError>{error}</AppError>
  ) : (
    <>
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
                <p className="benefit">{t("select.InitLoginAfterBenefits")}</p>
              </ProductDescHeader>
              <ProductDescMiddle>
                {/* TODO: 3항 연산자 in 배열 */}
                {/* {Array.isArray(product)
                  ? product.products.map((desc) => {
                      return <li>{desc.tag}</li>;
                    })
                  : null} */}
              </ProductDescMiddle>
              <ProductDescBottom>
                <CartAmountCounter>
                  <span className="amount">
                    {t("product.IPurchaseQuantity")}
                  </span>
                  <CountOuter>
                    <AmountCountMinusButton>
                      <BiMinus />
                    </AmountCountMinusButton>
                    <span className="quantity">1</span>
                    <AmountCountPlusButton>
                      <BiPlus />
                    </AmountCountPlusButton>
                  </CountOuter>
                </CartAmountCounter>

                <TotalMoney>
                  {t("product.IProductTotalMoney")} :{" "}
                  <strong>{product.price}</strong>
                </TotalMoney>
                <LoginAfterBenefits>
                  <span>{t("product.IPointCccumulate")}</span>
                  {t("select.InitLoginAfterBenefits")}
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
    </>
  );
};

export default ProductList;
