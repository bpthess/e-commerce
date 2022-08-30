import styled from "styled-components";
import { Color, Spacing } from "../../variable/Spacing";

export const CartWrapper = styled.div`
  width: ${Spacing.select.selectNumber100}%;
  height: ${Spacing.select.selectNumber100}%;
  padding: ${Spacing.cart.mark.cartWrapPadding};
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const CartContainer = styled.div`
  display: ${Spacing.select.mark.selectFlex};
  justify-content: ${(props: any): string =>
    props.isPosition
      ? `${Spacing.select.mark.selectStart}`
      : `${Spacing.select.mark.selectCenter}`};
  align-items: ${Spacing.select.mark.selectCenter};
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`;

export const LabelTitle = styled.h2`
  padding: ${Spacing.cart.mark.cartLabelTitlePadding};
  text-align: ${Spacing.select.mark.selectCenter};
  font-size: ${Spacing.select.selectFontSize28}px;
  font-weight: ${Spacing.select.selectFontWeight500};
  @media only screen and (max-width: 1024px) {
    padding: 50px 0 28px;
  }
`;

export const LabelMessage = styled.label`
  text-align: ${Spacing.select.mark.selectCenter};
  display: ${Spacing.select.mark.selectBlock};
  padding: ${Spacing.cart.mark.cartLabelMessagePadding};

  & a {
    display: ${Spacing.select.mark.selectBlock};
    margin-top: ${Spacing.cart.cartLabelMessageMarginTop}px;
    & svg {
      font-size: ${Spacing.select.selectFontSize24}px;
      padding: ${Spacing.cart.cartLabelMessageSvgPadding}px;
      box-sizing: ${Spacing.select.mark.selectContentBox};
    }
  }
`;
export const CartContent = styled.div`
  width: ${Spacing.cart.cartContentWidth}px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Total = styled.div`
  width: 40%;
  border: ${Color.cart.cartBorder};
  padding: ${Spacing.cart.mark.cartTotalPadding};
  @media only screen and (max-width: 1024px) {
    width: auto;
  }
`;

export const TotalGroup = styled.div`
  width: ${Spacing.select.selectNumber100}%;
  height: ${Spacing.cart.cartTotalGroup}px;
  display: ${Spacing.select.mark.selectFlex};
  justify-content: ${Spacing.select.mark.selectSpaceBetween};
  & .cost {
    margin-left: ${Spacing.cart.cartTotalGroupCostMarginLeft}px;
  }
`;

export const CartInner = styled.div`
  display: ${Spacing.select.mark.selectFlex};
  justify-content: ${Spacing.select.mark.selectStart};
  @media only screen and (max-width: 1024px) {
    justify-content: ${Spacing.select.mark.selectCenter};
  }
`;
export const ListGroup = styled.div`
  display: ${Spacing.select.mark.selectFlex};
  align-items: ${Spacing.select.mark.selectCenter};
  width: ${Spacing.cart.cartListGroupWidth}%;
  text-align: ${Spacing.select.mark.selectCenter};
  padding: ${Spacing.cart.mark.cartListGroupPadding};
  border-top: ${Color.cart.cartBorder};

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    border-top: none;
    padding: 0 0 15px;
  }

  & a {
    flex: ${Spacing.select.selectNumber1};
  }
  & img {
    width: ${Spacing.cart.cartListGroupWidthImg}px;
    height: 100%;
    object-fit: cover;
    @media only screen and (max-width: 1024px) {
      width: 80%;
      margin-bottom: 20px;
    }
  }
  & .price {
    flex: ${Spacing.select.selectNumber1};
  }
`;

export const DeleteButton = styled.button``;
export const CheckoutButton = styled.button``;

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

  @media only screen and (max-width: 1024px) {
    margin: 10px;
    height: 40px;
  }

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
