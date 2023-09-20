import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import List from "./pages/List";
//import DefaultArticle from "./pages/DefaultArticle";
//import SingleArticle from "./pages/SingleArticle";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div className="App">
      
      <div className="sidebar">
        <Link to ="/article/972d2b8a"> <button>Artikkel</button></Link> <span></span>
        <Link to ="/list"> <button>Tabel</button></Link>
      
      </div>
      <Routes>
        <Route path="/article/:articleID" element={<ArticlePage/>} /> 
        <Route path="/list" element={<List/>} />
        <Route path="/" element={<List/>} />
      </Routes>
    </div>
  );
}

export default App;
