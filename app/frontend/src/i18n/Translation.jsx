import i18next from "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  display: flex;
  z-index: 5000;
  :before {
    content: "";
    width: 0.5px;
    height: 12px;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & button {
    padding: 15px;
  }
`;
const KoLanguageButton = styled.button``;
const EnLanguageButton = styled.button``;

const Translation = () => {
  const { t } = useTranslation();

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <LanguageButtonWrapper>
      <KoLanguageButton onClick={() => clickHandler("ko")}>
        {t("common.Ko")}
      </KoLanguageButton>
      <EnLanguageButton onClick={() => clickHandler("en")}>
        {t("common.En")}
      </EnLanguageButton>
    </LanguageButtonWrapper>
  );
};

export default Translation;
