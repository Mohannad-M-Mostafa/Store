import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Login from "./pages/Register/Login";
import NewCompany from "./pages/Register/NewCompany";
import ForgotPassword from "./pages/Register/ForgotPassowrd";
import PersonalPage from "./pages/PersonalPage";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/PersonalPage" element={<PersonalPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sigin" element={<sigin />} />
          <Route path="/NewCompany" element={<NewCompany />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          {/*<Route path="/Coatings" element={<Coatings />} />*/}
          {/* <Route path="/sections/:id/Coatings" element={<sections />}/>  */}
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;
