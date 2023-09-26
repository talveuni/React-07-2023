import {Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import List from "./pages/List";
import ArticlePage from "./pages/ArticlePage";
import {Button} from "react-bootstrap";
import {FaFile, FaTable} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <div className="upper_menu_bar">
        <div className="logo"><img src= "/logo.svg" alt="twn_logo" /></div>
        <div className="menu_btn_container">
          <Button as={Link} to= {"/article/972d2b8a"} variant="light" className="menu_btn">Artikkel <FaFile/></Button>      
          <Button as={Link} to= {"/list"} variant="light" className="menu_btn">Tabel <FaTable/></Button>
        </div>
      </div>
      
      <div className="sidebar">
        <div className="logo"><img  src= "/logo.svg" alt="twn_logo" /></div>
        <div className="menu_btn_container">
          <Button as={Link} to= {"/article/972d2b8a"} variant="light" className="menu_btn">ARTIKKEL <FaFile/></Button> <br />     
          <Button as={Link} to= {"/list"} variant="light" className="menu_btn">TABEL <FaTable/></Button> 
      </div> 
      
      </div>
      <Routes>
        <Route path="/article/:articleID" element={<ArticlePage/>} /> 
        <Route path="/list" element={<List/>} />
        <Route path="/" element={<ArticlePage/>} />
      </Routes>
    </div>
  );
}

export default App;
