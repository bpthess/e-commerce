import styled from "styled-components";
import { Color, Spacing } from "../../variable/Spacing";

export const Main = styled.div`
  width: ${Spacing.select.selectNumber100}%;
`;

export const ProductWrapper = styled.div`
  width: ${Spacing.product.productWidth}px;
  min-width: ${Spacing.product.productWidth}px;
  margin: ${Spacing.select.mark.selectMarginAuto};
`;

export const ProductContainer = styled.div`
  display: ${Spacing.select.mark.selectFlex};
`;

export const ImgContent = styled.div`
  flex: ${Spacing.product.productFlex06};
`;

export const DescContent = styled.div`
  flex: ${Spacing.product.productFlex08};
  margin-left: ${Spacing.product.productDescMarginLeft}vw;
`;

export const DescInner = styled.div`
  overflow: ${Spacing.select.mark.selectHidden};
`;

export const ProductDescHeader = styled.div`
  & .tag {
    font-size: ${Spacing.select.selectFontSize14}px;
    color: ${Color.product.productColor};
    font-weight: ${Spacing.select.mark.selectBold};
  }

  & .title {
    font-size: ${Spacing.select.selectFontSize24}px;
    font-weight: ${Spacing.select.selectFontWeight500};
    white-space: ${Spacing.select.mark.selectNowrap};
    padding: ${Spacing.product.mark.productDescPadding};
  }

  & .desc {
    font-size: ${Spacing.select.selectFontSize14}px;
    color: ${Color.product.productColor2};
  }

  & .price {
    font-size: ${Spacing.select.selectFontSize24}px;
    font-weight: ${Spacing.select.mark.selectBold};
    margin: ${Spacing.product.mark.productPriceMargin};
  }

  & .benefit {
    font-size: ${Spacing.select.selectFontSize14}px;
    padding-bottom: ${Spacing.product.productBenefitPaddingBottom}px;
    border-bottom: ${Color.product.productBorder2};
  }
`;

export const ProductDescMiddle = styled.div``;
export const ProductDescBottom = styled.div``;
export const CartAmountCounter = styled.div`
  width: ${Spacing.product.productCartWidth}px;
  text-align: ${Spacing.select.mark.selectCenter};
  display: ${Spacing.select.mark.selectInlineBlock};
  margin-top: ${Spacing.product.productCartMarginTop}px;

  & .amount {
    display: ${Spacing.select.mark.selectBlock};
    font-size: ${Spacing.select.selectFontSize14}px;
    margin-bottom: ${Spacing.product.productCartAmountMarginBottom}px;
  }
`;

/**
 * TODO: 수량 추가& 제거 스타일드 컴포넌트,
 * 추후 컴포넌트로 빼내어 여러 곳에 할당 예정
 * */
export const CountOuter = styled.div`
  width: ${Spacing.product.productCountOuterWidth}px;
  height: ${Spacing.product.productCountOuterHeight}px;
  line-height: ${Spacing.product.productCountOuterLineHeight}px;
  overflow: ${Spacing.select.mark.selectHidden};
  text-align: ${Spacing.select.mark.selectCenter};
  border: ${Color.product.productBorder1};
  border-radius: ${Spacing.select.selectRadius3}px;
  display: ${Spacing.select.mark.selectFlex};
  justify-content: ${Spacing.select.mark.selectSpaceAround};

  & span {
    font-size: ${Spacing.select.selectFontSize14}px;
  }
`;

export const AmountCountPlusButton = styled.button`
  & svg {
    margin-top: ${Spacing.product.productSvgMarginTop}px;
    font-size: ${Spacing.select.selectFontSize14}px;
  }
`;

export const AmountCountMinusButton = styled.button`
  & svg {
    margin-top: ${Spacing.product.productSvgMarginTop}px;
    font-size: ${Spacing.select.selectFontSize14}px;
  }
`;

export const TotalMoney = styled.p`
  padding-right: ${Spacing.product.productTotalPaddingRight}px;
  padding-top: ${Spacing.product.productTotalPaddingTop}px;
  font-size: ${Spacing.select.selectFontSize13}px;
  font-weight: ${Spacing.select.selectFontWeight500};
  text-align: ${Spacing.select.mark.selectRight};

  & strong {
    font-size: ${Spacing.select.selectFontSize28}px;
    font-weight: ${Spacing.select.mark.selectBold};
  }
`;

export const LoginAfterBenefits = styled.p`
  padding: ${Spacing.product.productLoginBenefitsPadding}px;
  font-size: ${Spacing.select.selectFontSize14}px;
  text-align: ${Spacing.select.mark.selectRight};

  & span {
    padding: ${Spacing.product.mark.productLoginBenefitsSpanPadding};
    margin-right: ${Spacing.product.productLoginBenefitsMarginRight}px;
    background-color: ${Color.select.selectDarkCyanColor};
    border-radius: ${Spacing.product.productLoginBenefitsRadius}px;
    font-size: ${Spacing.select.selectFontSize11}px;
    font-weight: ${Spacing.select.selectFontWeight600};
    color: ${Color.select.selectWhiteColor};
  }
`;

export const TechnicalCheckIcons = styled.div`
  height: ${Spacing.product.productIconHeight}px;
  line-height: ${Spacing.product.productIconLineHeight}px;
  display: ${Spacing.select.mark.selectFlex};

  & .ico {
    padding: ${Spacing.product.mark.productIconPadding};
    margin: ${Spacing.product.mark.productIconMargin};
    border: ${Color.product.productBorder1};
    border-radius: ${Spacing.select.selectRadius3}px;
    font-size: ${Spacing.select.selectFontSize24}px;
    cursor: pointer;

    & svg {
      margin: ${Spacing.product.mark.productIconSvgMargin};
      font-size: ${Spacing.select.selectFontSize24}px;
    }
  }

  & button {
    background-color: ${Color.select.selectWhiteColor};
    border: ${Color.product.productBorder3};
    border-radius: ${Spacing.select.selectRadius3}px;
    color: ${Color.select.selectDarkCyanColor};
    flex-grow: ${Spacing.select.selectNumber1};
    margin-left: ${Spacing.product.productIconButtonMarginLeft}px;
    transition: ${Spacing.product.mark.productIconButtonTransition};

    :hover {
      color: ${Color.select.selectWhiteColor};
      background-color: ${Color.select.selectDarkCyanColor};
    }
  }
`;
export const InStorageCartButton = styled.button``;
