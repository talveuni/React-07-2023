import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import List from "./pages/List";
import ArticlePage from "./pages/ArticlePage";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
       <div className="upper_menu_bar">
        <Button as={Link} to= {"/article/972d2b8a"} variant="light" className="menu_btn">Artikkel</Button>      
        <Button as={Link} to= {"/list"} variant="light" className="menu_btn">Tabel</Button>      
        </div>
      
      <div className="sidebar">
      ``<Button as={Link} to= {"/article/972d2b8a"} variant="light" className="menu_btn">Artikkel</Button> <br />     
        <Button as={Link} to= {"/list"} variant="light" className="menu_btn">Tabel</Button> 
      
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
