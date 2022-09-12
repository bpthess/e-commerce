import Header from "./components/Header";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <Header />
      <Router />
    </>
  );
}

export default App;
