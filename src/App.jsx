import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import BikesList from "./Components/BikesList/BikesList";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Poster from "./Components/Poster/Poster";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router basename="/e-bikes-rental">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <Header />
      <Poster />
      <div id="bikeslist">
        <BikesList />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};
export default App;
