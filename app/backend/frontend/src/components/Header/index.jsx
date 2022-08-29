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
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../store/Store";
import { FiMapPin, FiHeart, FiMenu } from "react-icons/fi";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { state } = useContext(Store);
  const { cart } = state;

  // 내비게이션 경로 캡슐화, 은닉화
  class Route {
    constructor(id, name, href) {
      this._id = id;
      this._name = name;
      this._href = href;
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
   * 하나의 함수로 묶어서 map으로 리턴 시 [object Object]가 반환됨, 또는 한 단어만 나옴
   * TODO: 아래 사이트 참고만하여 전개구문(spread syntax)을 이용해서 해결하기
   * https://okky.kr/articles/570916
   * https://javascript.info/new-function
   */

  // const NaviData = new Route ([
  //   {id: 1, name: "header.IHeaderNaviProduct", href: "/"},
  //   {id: 2, name: "header.IHeaderNaviBestProduct", href: "developing"},
  //   {id: 3, name: "header.IHeaderNaviThrifty", href: "developing"},
  //   {id: 4, name: "header.IHeaderNaviBenefit", href: "developing"},
  // ])

  const Navi1 = new Route(1, "header.IHeaderNaviProduct", "/e-commerce");
  const Navi2 = new Route(2, "header.IHeaderNaviBestProduct", "developing");
  const Navi3 = new Route(3, "header.IHeaderNaviThrifty", "developing");
  const Navi4 = new Route(4, "header.IHeaderNaviBenefit", "developing");

  const NaviData = [{ ...Navi1 }, { ...Navi2 }, { ...Navi3 }, { ...Navi4 }];

  return (
    <Wrap>
      <Container>
        <ItemsMenu>
          <li>
            <Link to="/e-commerce">
              <FiMenu />
              {t("select.Category")}
            </Link>
          </li>
        </ItemsMenu>
        <ItemsNavi>
          {NaviData.map((title) => {
            return (
              <Link to={title._href} key={title._id}>
                <li>{t(title._name)}</li>
              </Link>
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
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </ItemsIconLiTree>
        </ItemsIconUlTree>
      </Container>
    </Wrap>
  );
};

export default Header;
