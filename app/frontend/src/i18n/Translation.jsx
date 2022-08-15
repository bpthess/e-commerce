import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18next from "../i18n";

const LanguageButtonStyles = styled.div`
  float: left;
  transform: translateX(calc(20% + 40px));
  margin-top: -3vh;
  & button {
    margin: 0 10px;
  }
`;

const Translation = () => {
  const { t } = useTranslation();

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <LanguageButtonStyles>
      <button onClick={() => clickHandler("ko")}>{t("common.Ko")}</button>
      <button onClick={() => clickHandler("en")}> {t("common.En")}</button>
    </LanguageButtonStyles>
  );
};

export default Translation;
