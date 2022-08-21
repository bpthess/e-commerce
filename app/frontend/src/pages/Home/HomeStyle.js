import styled from "styled-components";
import { Color, Spacing } from "../../variable/Spacing";

export const Main = styled.div`
  width: ${Spacing.select.selectNumber100}%;
`;

export const SectionTitle = styled.h1`
  text-align: ${Spacing.select.mark.selectCenter};
  font-size: ${Spacing.select.selectFontSize28}px;
  font-weight: ${Spacing.select.selectFontWeight500};
`;

export const ProductsWrapper = styled.div`
  display: ${Spacing.select.mark.selectFlex};
  flex-wrap: ${Spacing.select.mark.selectFlexWrap};
  justify-content: ${Spacing.select.mark.selectCenter};
`;

export const ProductsContainer = styled.div`
  margin: ${Spacing.home.mark.homeContainerMargin};
  overflow: ${Spacing.select.mark.selectHidden};
`;

export const ImgContents = styled.div`
  max-width: ${Spacing.home.homeWidth}px;
  height: ${Spacing.home.homeHeight}px;
  overflow: ${Spacing.select.mark.selectHidden};
`;

export const ImgItem = styled.img`
  width: ${Spacing.select.selectNumber100}%;
  height: ${Spacing.select.selectNumber100}%;
  object-fit: ${Spacing.select.mark.selectCover};
  overflow: ${Spacing.select.mark.selectHidden};
  transition: ${Spacing.home.mark.homeTransition};

  :hover {
    object-fit: ${Spacing.select.mark.selectCover};
    transform: ${Spacing.home.mark.homeHoverScale};
  }
`;

export const ProductsDesc = styled.div`
  padding: ${Spacing.home.mark.homeDescPadding};
  position: ${Spacing.select.mark.selectRelative};

  & strong {
    display: ${Spacing.select.mark.selectBlock};
    font-size: ${Spacing.select.selectFontSize11}px;
    font-weight: ${Spacing.select.mark.selectBold};
    color: ${Color.home.homeColor};
    margin-bottom: ${Spacing.home.homeMarinBottom}px;
  }

  & p.price {
    padding: ${Spacing.home.mark.homePricePadding};
    font-weight: ${Spacing.select.mark.selectBold};
  }

  & p.desc {
    font-size: ${Spacing.select.selectFontSize14}px;
    color: ${Color.home.homeColor};
  }
`;

export const OnStorageCartButton = styled.button`
  position: ${Spacing.select.mark.selectAbsolute};
  right: ${Spacing.home.homeCartButtonRight}px;
  top: ${Spacing.home.homeCartButtonTop}px;
  background-color: ${Color.select.selectDarkCyanColor};
  border-radius: ${Spacing.select.selectNumber100}%;
  width: ${Spacing.home.homeCartButtonWidth}px;
  height: ${Spacing.home.homeCartButtonWidth}px;

  & svg {
    margin-top: ${Spacing.home.homeCartButtonMarginTop}px;
    font-size: ${Spacing.select.selectFontSize24}px;
    color: ${Color.select.selectWhiteColor};
  }

  :hover {
    background-color: ${Color.select.selectWhiteColor};
    transition: ${Spacing.home.mark.homeHoverTranstion};

    & svg {
      color: ${Color.select.selectDarkCyanColor};
    }
  }
`;