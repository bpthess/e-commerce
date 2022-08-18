import {
  Wrap,
  Container,
  ItemsMenu,
  ItemsNavi,
  ItemsSearchForm,
  ItemsIcon,
  FormContainer,
  Controller,
  Badge,
} from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../Store";
import { FiMapPin, FiHeart, FiMenu } from "react-icons/fi";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { state } = useContext(Store);
  const { cart } = state;

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
  const Navi1 = new Route(1, "상품", "");
  const Navi2 = new Route(2, "베스트", "");
  const Navi3 = new Route(3, "알뜰쇼핑", "");
  const Navi4 = new Route(4, "특가/혜택", "");

  const NaviData = [Navi1, Navi2, Navi3, Navi4];

  return (
    <Wrap>
      <Container>
        <ItemsMenu>
          <li>
            <Link to="/">
              <FiMenu />
              {t("common.Category")}
            </Link>
          </li>
        </ItemsMenu>
        <ItemsNavi>
          {NaviData.map((title) => {
            return (
              <Link to={title.href} key={title.id}>
                <li>{title.name}</li>
              </Link>
            );
          })}
        </ItemsNavi>
        <ItemsSearchForm>
          <FormContainer>
            <Controller placeholder="검색어를 입력해주세요" />
            <BiSearch />
          </FormContainer>
        </ItemsSearchForm>
        <ItemsIcon>
          <li>
            <FiMapPin />
          </li>
          <li>
            <FiHeart />
          </li>
          <li>
            <Link to="/cart">
              <BiShoppingBag />
              {cart.cartItems.length > 0 && (
                <Badge>
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </li>
        </ItemsIcon>
      </Container>
    </Wrap>
  );
};

export default Header;
