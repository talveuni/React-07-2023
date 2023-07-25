import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainShops from "./pages/admin/MaintainShops";
import HomePage from "./pages/global/HomePage";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import {ContactUs} from "./pages/global/ContactUs";
import Cart from "./pages/global/Cart";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/global/NotFound";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en")

  }
  const changeLangEe = () => {
    i18n.changeLanguage("ee")
    localStorage.setItem("language", "ee")

  }

  const changeLangEs = () => {
    i18n.changeLanguage("es")
    localStorage.setItem("language", "es")

  }


  return (
    <div className="App">
    
      <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to="/"><h2>{t("webshop-triin")}</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to="shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
              <img className="lang" src= "/english.png" alt="" onClick={changeLangEn}></img>
              <img className="lang" src= "/estonian.png" alt="" onClick={changeLangEe}></img>
              <img className="lang" src= "/spanish.png" alt="" onClick={changeLangEs}></img>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:productId" element={<EditProduct />} />
        <Route path="/admin/maintain-products" element={<MaintainProducts />} />
        <Route path="/admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="/admin/maintain-shops" element={<MaintainShops />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
