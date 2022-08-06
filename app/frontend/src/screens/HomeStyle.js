import styled from "styled-components";

export const ProductArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & .product {
    border: 1px solid #404040;
    margin: 1rem;

    & img {
      width: 100%;
      max-width: 350px;
    }
  }

  & .product-info {
    padding: 1rem;
    & span {
    }
    & p {
      & strong {
      }
    }
    & button {
    }
  }
`;
