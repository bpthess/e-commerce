import { useEffect } from "react";
import i18n from "../../i18n";
import Translation from "../../i18n/Translation";
import {
  Wrap,
  Container,
  ItemsMenu,
  ItemsNavi,
  ItemsSearchForm,
  ItemsIconUlTree,
  ItemsIconLiTree,
  FormContainer,
  Controller,
  Badge,
  UserWrapper,
  UserProfile,
} from "./Styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../store/Store";
import { FiMapPin, FiHeart, FiMenu } from "react-icons/fi";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { RouteData } from "./types";
// import userInfo from "../../pages/Sign";

const Header = () => {
  const { t } = useTranslation();
  const { state, dispatch: contextDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  // 내비게이션 경로 캡슐화, 은닉화
  class Route implements RouteData {
    constructor(
      private _id: number,
      private _name: string,
      private _href: string
    ) {
      this._id = this.id;
      this._name = this.name;
      this._href = this.href;
    }

    get id() {
      return this._id;
    }
    get name() {
      return this._name;
    }
    get href() {
      return this._href;
    }
  }

  /**
   * 하나의 함수로 묶어서 map으로 리턴 시 [object Object]가 반환됨, 또는 한 단어만 나옴, 현재 사용하고 있는 생성자 함수가 옳게 쓰고 있는지 모르겠음,
   * TODO: 아래 사이트 참고만하여 전개구문(spread syntax)을 이용해서 해결하기
   * https://okky.kr/articles/570916
   * https://javascript.info/new-function
   */

  // const NaviData = new Route [
  //   { _id: 1, _name: "header.IHeaderNaviProduct", _href: "/" },
  //   { _id: 2, _name: "header.IHeaderNaviBestProduct", _href: "developing" },
  //   { _id: 3, _name: "header.IHeaderNaviThrifty", _href: "developing" },
  //   { _id: 4, _name: "header.IHeaderNaviBenefit", _href: "developing" },
  // ];

  const Navi1 = new Route(1, "header.IHeaderNaviProduct", "/");
  const Navi2 = new Route(2, "header.IHeaderNaviBestProduct", "developing");
  const Navi3 = new Route(3, "header.IHeaderNaviThrifty", "developing");
  const Navi4 = new Route(4, "header.IHeaderNaviBenefit", "developing");

  const NaviData = [Navi1, Navi2, Navi3, Navi4];

  useEffect(() => {
    // 다국어 적용
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  const signoutHandler = () => {
    contextDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  };

  return (
    <Wrap>
      <Translation />
      <Container>
        <ItemsMenu>
          <li>
            <Link to="/">
              <FiMenu />
              {t("select.Category")}
            </Link>
          </li>
        </ItemsMenu>
        <ItemsNavi>
          {NaviData.map((title) => {
            return (
              <li key={title.id}>
                <Link to={title.href}>{t(title.name)}</Link>
              </li>
            );
          })}
        </ItemsNavi>
        <ItemsSearchForm>
          <FormContainer>
            <Controller placeholder={t("header.IFormPlaceholder")} />
            <BiSearch />
          </FormContainer>
        </ItemsSearchForm>
        <ItemsIconUlTree>
          <ItemsIconLiTree>
            <FiMapPin />
          </ItemsIconLiTree>
          <ItemsIconLiTree>
            <FiHeart />
          </ItemsIconLiTree>
          <ItemsIconLiTree>
            <Link to="/cart">
              <BiShoppingBag />
              {cart.cartItems.length > 0 && (
                <Badge>
                  {cart.cartItems.reduce(
                    (a: number, c: { quantity: number }): number =>
                      a + c.quantity,
                    0
                  )}
                </Badge>
              )}
            </Link>
          </ItemsIconLiTree>
        </ItemsIconUlTree>
        <UserWrapper>
          {userInfo ? (
            <UserProfile title={userInfo.name} id="nav-dropdown">
              <ul>
                <li>
                  <Link to="/profile">{userInfo.name} 님</Link>
                  <ul>
                    <li>
                      <Link to="/orderhistory">주문내역</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        로그아웃
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </UserProfile>
          ) : (
            <Link to="/signin">로그인</Link>
          )}
        </UserWrapper>
      </Container>
    </Wrap>
  );
};

export default Header;
