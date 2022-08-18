import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductsContainer = styled.div`
  margin: 28px 8px;
  overflow: hidden;
`;

export const ImgContents = styled.div`
  max-width: 250px;
  height: 320px;
  overflow: hidden;
`;

export const ImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease 0s;
  overflow: hidden;
  :hover {
    transform: scale(1.1);
    object-fit: cover;
  }
`;

export const ProductsDesc = styled.div`
  padding: 1rem 0;
  position: relative;
  & strong {
    display: block;
    font-size: 11px;
    font-weight: bold;
    color: #999;
    margin-bottom: 2px;
  }
  & p.price {
    padding: 8px 0 15px;
    font-weight: bold;
  }
  & p.desc {
    font-size: 14px;
    color: #999;
  }
  & button {
  }
`;

export const OnStorageCartButton = styled.button`
  position: absolute;
  right: 10px;
  top: -60px;
  background-color: darkcyan;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  & svg {
    margin-top: 2px;
    font-size: 24px;
    color: #fff;
  }
  :hover {
    background-color: #fff;
    transition: all 0.1s linear 0s;
    & svg {
      color: darkcyan;
    }
  }
`;
