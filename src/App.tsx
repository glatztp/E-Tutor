import { BrowserRouter } from "react-router-dom";
import NavbarIn from "./components/NavbarIn";
import HomeIn from "./HomeIn";
import Footer from "./components/Footer";
// import NavbarIn from "./components/NavbarIn";

function App() {
  return (
    <BrowserRouter>
      <NavbarIn />
      <HomeIn />
      <Footer />
      {/* <NavbarIn /> */}
    </BrowserRouter>
  );
}
export default App;
