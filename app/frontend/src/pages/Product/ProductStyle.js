import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
`;

export const ProductWrapper = styled.div`
  width: 1050px;
  min-width: 1050px;
  margin: 0px auto;
`;

export const ProductContainer = styled.div`
  display: flex;
`;
export const ImgContent = styled.div`
  flex: 0.6;
`;
export const DescContent = styled.div`
  flex: 0.8;
  margin-left: 5vw;
`;
export const DescInner = styled.div`
  overflow: hidden;
`;
export const ProductDescHeader = styled.div`
  & .tag {
    font-size: 14px;
    color: #999;
    font-weight: bold;
  }
  & .title {
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
    padding: 5px 0 15px;
  }
  & .desc {
    font-size: 14px;
    color: #ababab;
  }
  & .price {
    font-size: 24px;
    font-weight: bold;
    margin: 15px 0 10px;
  }
  & .benefit {
    font-size: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ececec;
  }
`;
export const ProductDescMiddle = styled.div``;
export const ProductDescBottom = styled.div``;
export const CartAmountCounter = styled.div`
  width: 85px;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  & .amount {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
export const CountOuter = styled.div`
  width: 85px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  & span {
    font-size: 14px;
  }
`;
export const AmountCountPlusButton = styled.button`
  & svg {
    margin-top: 5px;
    font-size: 14px;
  }
`;
export const AmountCountMinusButton = styled.button`
  & svg {
    margin-top: 5px;
    font-size: 14px;
  }
`;
export const TotalMoney = styled.p`
  padding-right: 12px;
  padding-top: 10px;
  font-size: 13px;
  font-weight: 500;
  text-align: right;
  & strong {
    font-size: 28px;
    font-weight: bold;
  }
`;
export const LoginAfterBenefits = styled.p`
  padding: 20px 0;
  font-size: 14px;
  text-align: right;
  & span {
    padding: 2px 7px;
    margin-right: 5px;
    background-color: darkcyan;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    color: #fff;
  }
`;
export const TechnicalCheckIcons = styled.div`
  height: 55px;
  line-height: 55px;
  display: flex;
  & .ico {
    padding: 0 7px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 24px;
    cursor: pointer;

    & svg {
      margin: 0 7px;
      font-size: 24px;
    }
  }
  & button {
    background-color: #fff;
    border: 1px solid darkcyan;
    border-radius: 3px;
    color: darkcyan;
    flex-grow: 1;
    margin-left: 5px;
    transition: all 0.15s linear;
    :hover {
      color: #fff;
      background-color: darkcyan;
    }
  }
`;
export const InStorageCartButton = styled.button``;
