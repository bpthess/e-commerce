import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import i18n from "./i18n";
import { Store } from "./Store";
// import Translation from "./i18n/Translation";
import styled from "styled-components";

export const Badge = styled.span`
  background-color: crimson;
  border: 50%;
  width: 10px;
  height: 10px;
`;

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/" style={{ margin: "20px" }}>
            amazona
          </Link>
          <Link to="/cart">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge>{cart.cartItems.length}</Badge>
            )}
          </Link>
        </header>
        <main>
          {/* Todo: 다국어 버튼 UI 변경 */}
          {/* <Translation /> */}
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
