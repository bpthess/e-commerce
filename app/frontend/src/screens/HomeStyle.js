import styled from "styled-components";

export const ProductArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & .product {
    border: 1px solid #404040;
    margin: 25px 8px;

    & img {
      width: 100%;
      height: 100%;
      max-width: 250px;
      object-fit: cover;
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

export const OnStorageCartButton = styled.button``;
