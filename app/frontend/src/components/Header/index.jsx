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

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Wrap>
      <Container>
        <ItemsMenu>
          <li>
            <Link to="/">
              <FiMenu />
              카테고리
            </Link>
          </li>
        </ItemsMenu>
        <ItemsNavi>
          <li>상품</li>
          <li>베스트</li>
          <li>알뜰쇼핑</li>
          <li>특가/혜택</li>
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
