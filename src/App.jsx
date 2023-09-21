import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import Header from "./Components/Header";
import BikesList from "./Components/BikesList.jsx";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Poster from "./Components/Poster";

function App() {
  return (
    <div>
      <Header />
      <Poster />
      <BikesList />;
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
