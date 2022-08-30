import i18next from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButtonWrapper = styled.div`
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
    padding: 15px;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const KoLanguageButton = styled.button``;
const EnLanguageButton = styled.button``;

const Translation = () => {
  const { t } = useTranslation();

  // 다국어 핸들러
  const clickHandler = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <LanguageButtonWrapper>
      <KoLanguageButton onClick={() => clickHandler("ko")}>
        {t("select.Ko")}
      </KoLanguageButton>
      <EnLanguageButton onClick={() => clickHandler("en")}>
        {t("select.En")}
      </EnLanguageButton>
    </LanguageButtonWrapper>
  );
};

export default Translation;
