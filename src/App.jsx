import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./App/store";
import Navbar from "./Routers/Navbar";
import Footer from "./Components/Footer";
import IntroPage from "./Components/IntroPage";
import HomePage from "./Components/HomePage";
import LoginPage from "./Routers/LoginPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     


<BrowserRouter basename="/planthub">
  <Navbar />
  <Routes>
    <Route path="/" element={<IntroPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  );
}

export default App;
