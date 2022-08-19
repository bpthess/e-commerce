import styled from "styled-components";
import { Color, Spacing } from "../../variable/Spacing";

export const Wrap = styled.div`
  width: ${Spacing.select.selectNumber100}%;
  height: ${Spacing.header.headerWrapHeight}vh;
  line-height: ${Spacing.header.headerWrapLineHeight}vh;
  position: ${Spacing.select.mark.selectFixed};
  top: ${Spacing.select.selectNumber0};
  background-color: ${Color.header.headerWrapBgColor};
  box-shadow: ${Color.header.headerWrapBoxShaow};
  padding: ${Spacing.header.mark.headerWrapPadding}vw;
  z-index: ${Spacing.header.headerWrapZIndex};
  overflow: ${Spacing.select.mark.selectHidden};
`;

export const Container = styled.div`
  min-width: ${Spacing.header.headerContainerMinWidth}px;
  height: ${Spacing.select.mark.selectInhert};
  margin: ${Spacing.select.mark.selectMarginAuto};
  display: ${Spacing.select.mark.selectFlex};
  justify-content: ${Spacing.select.mark.selectCenter};
  align-items: ${Spacing.select.mark.selectCenter};

  & > ul,
  > form {
    padding: ${Spacing.header.mark.headerContainerPadding}px;
    display: ${Spacing.select.mark.selectFlex};
    justify-content: ${Spacing.select.mark.selectCenter};
    align-items: ${Spacing.select.mark.selectCenter};
    font-weight: ${Spacing.select.selectFontWeight500};
  }
`;

export const ItemsMenu = styled.ul`
  & li {
    display: ${Spacing.select.mark.selectFlex};
    & a {
      font-size: ${Spacing.select.selectFontSize16}px;
      & svg {
        margin-right: ${Spacing.header.headerItemsMenuMarginRight}px;
        font-size: ${Spacing.select.selectFontSize20}px;
        vertical-align: ${Spacing.select.mark.selectTextTop};
        margin-top: ${Spacing.header.headerItemsMenuMarginTop}px;
      }
    }
  }
`;

export const ItemsNavi = styled.ul`
  & li {
    padding: ${Spacing.header.mark.headerItemsNavi}px;
  }
`;

export const ItemsSearchForm = styled.form`
  position: ${Spacing.select.mark.selectRelative};
`;

export const FormContainer = styled.div`
  & svg {
    font-size: ${Spacing.select.selectFontSize20}px;
    position: ${Spacing.select.mark.selectAbsolute};
    right: ${Spacing.header.headerFormContainerRight}px;
    top: ${Spacing.header.headerFormContainerTop}%;
    transform: ${Spacing.header.mark.headerFormContainerTransform};
    margin-top: ${Spacing.header.headerFormContainerMarinTop}px;
    cursor: pointer;
  }
`;

export const Controller = styled.input`
  background-color: ${Color.header.headerControllerBgColor};
  border-radius: ${Spacing.header.headerFormControllerRadius}px;
  padding: ${Spacing.header.mark.headerFormControllerPadding};
  font-size: ${Spacing.select.selectFontSize12}px;

  ::placeholder {
    font-weight: ${Spacing.select.selectFontWeight400};
    font-size: ${Spacing.header.headerFormControllerFontSize}px;
    color: ${Color.header.headerPlaceholderFontColor};
  }
`;

export const ItemsIcon = styled.ul`
  & li {
    padding: ${Spacing.header.mark.headerItemsIconsPadding}px;
    font-size: ${Spacing.select.selectFontSize24}px;
    cursor: pointer;
  }
  & li:last-child {
    position: ${Spacing.select.mark.selectRelative};
  }
`;

export const Badge = styled.span`
  height: ${Spacing.header.headerBadgeHeigth}px;
  line-height: ${Spacing.header.headerBadgeLineHeigth}px;
  position: ${Spacing.select.mark.selectAbsolute};
  right: ${Spacing.header.headerBadgeRight}px;
  bottom: ${Spacing.header.headerBadgeBottom}px;
  font-size: ${Spacing.select.selectFontSize12}px;
  color: ${Color.select.selectWhiteColor};
  z-index: ${Spacing.header.headerBadgeZIndex};

  :before {
    content: "";
    background-color: ${Color.select.selectDarkCyanColor};
    border-radius: ${Spacing.select.selectNumber100}%;
    position: ${Spacing.select.mark.selectAbsolute};
    left: ${Spacing.header.headerBadgeBeforeLeft}px;
    width: ${Spacing.header.headerBadgeBeforeWidth}px;
    height: ${Spacing.header.headerBadgeBeforeHeight}px;
    z-index: ${Spacing.select.selectMinusZindex};
  }
`;
