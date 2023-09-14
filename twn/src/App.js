import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Article from "./pages/Article";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      
      

      <div className="sidebar">
        <Link to ="/article"> <button>Artikkel</button></Link> <span></span>
        <Link to ="/list"> <button>Tabel</button></Link>
      </div>
            <Routes>
        <Route path="/article" element = {<Article/>}></Route>
        <Route path="/list" element = {<List/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
