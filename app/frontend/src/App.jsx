import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./pages/Product/ProductScreen";
import HomeScreen from "./pages/Home/HomeScreen";
import CartScreen from "./pages/Cart/CartScreen";
import { useEffect } from "react";
import i18n from "./i18n";
import Translation from "./i18n/Translation";
import Header from "./components/Header";

function App() {
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
        <Header />
        <main>
          <Translation />
          {/* Todo: 다국어 버튼 UI 변경 */}
          {/* <Translation /> */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
