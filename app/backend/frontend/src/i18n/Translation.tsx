import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  LanguageButtonWrapper,
  KoLanguageButton,
  EnLanguageButton,
} from "./styled";

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
