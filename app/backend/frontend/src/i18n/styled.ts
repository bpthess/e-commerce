import styled from "styled-components";

export const LanguageButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 0;
  display: flex;
  z-index: 3000;

  :before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.5px;
    height: 12px;
    background-color: #ccc;
  }

  & button {
    padding: 18px;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const KoLanguageButton = styled.button``;
export const EnLanguageButton = styled.button``;
