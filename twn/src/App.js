import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./pages/Article";
import Table from "./pages/Table";

function App() {
  return (
    <div className="App">
      
        <Link to ="/article"> <button>Article</button></Link> <span></span>
        <Link to ="/table"> <button>Table</button></Link>
      


      <Routes>
        <Route path="/article" element = {<Article/>}></Route>
        <Route path="/table" element = {<Table/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
