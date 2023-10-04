import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import BikesList from "./Components/BikesList.jsx";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Poster from "./Components/Poster";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Router basename="/e-bikes-rental">
      <Routes>
        <Route path="/" element={<Home />} />
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
      <BikesList />;
      <AboutUs />
      <Footer />
    </div>
  );
};
export default App;
