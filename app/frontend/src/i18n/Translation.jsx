import i18next from "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageButtonWrapper = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
  flex-direction: column;
  & button {
    margin: 15px 0;
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
