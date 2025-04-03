import { BrowserRouter } from "react-router-dom";
import NavbarOut from "./components/NavbarOut";
import Home from "./Home";
import Footer from "./components/Footer";
// import NavbarIn from "./components/NavbarIn";

function App() {
  return (
    <BrowserRouter>
      <NavbarOut />
      <Home />
      <Footer />
      {/* <NavbarIn /> */}
    </BrowserRouter>
  );
}
export default App;
