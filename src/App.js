import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Navibar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Certs from "./Components/Certs";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/certificates" element={<Certs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
