import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";
import Services from "./components/Models";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
