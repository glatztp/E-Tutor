import { BrowserRouter } from "react-router-dom";
import NavbarOut from "./components/NavbarOut";
import Home from "./Home";
// import NavbarIn from "./components/NavbarIn";

function App() {
  return (
    <BrowserRouter>
      <NavbarOut />
      <Home />
      {/* <NavbarIn /> */}
    </BrowserRouter>
  );
}
export default App;
