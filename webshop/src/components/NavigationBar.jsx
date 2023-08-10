import React, { useContext } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import { CartSumContext } from '../store/CartSumContect';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cartSum } = useContext(CartSumContext);
    const { loggedIn, setLoggedIn } = useContext(AuthContext); 
    const navigate = useNavigate();

    const changeLang = (newLanguage) => {
        i18n.changeLanguage(newLanguage)
        localStorage.setItem("language", newLanguage)
      }

    const logout = () => {
      setLoggedIn(false);
      navigate("/");  
    }

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to="/"><h2>{t("webshop-triin")}</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {loggedIn===true && <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
              <Nav.Link as={Link} to="shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            </Nav>
            <Nav>
              {loggedIn === true &&<button onClick={logout}>{t("logout")}</button>}
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
              {loggedIn === false && <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>}


              <div>{cartSum} €</div>
              <img className="lang" src= "/english.png" alt="" onClick={()=>changeLang("en")}></img>
              <img className="lang" src= "/estonian.png" alt="" onClick={()=>changeLang("ee")}></img>
              <img className="lang" src= "/spanish.png" alt="" onClick={()=>changeLang("es")}></img>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar