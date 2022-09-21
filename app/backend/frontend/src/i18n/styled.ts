import styled from "styled-components";

export const LanguageButtonWrapper = styled.div`
  position: fixed;
  left: 20px;
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
    padding: 0 15px;
    height: 7vh;
    line-height: 7vh;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const KoLanguageButton = styled.button``;
export const EnLanguageButton = styled.button``;
