import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Designs from './pages/Designs';
import Photography from './pages/Photography';
import Webpages from './pages/Webpages';

function App() {
  return (
    <div className="App">
      <img className="main-picture" src="https://st4.depositphotos.com/1010735/21665/v/600/depositphotos_216650966-stock-illustration-portfolio-banner-colorful-paper-confetti.jpg" alt="Portfolio banner"></img>
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link className='main-link' to="/webpages">
          <img src="https://www.fromdreamstolifestyle.com/wp-content/uploads/2012/08/Website-Blog-1024x683.jpg" alt=""/>
          <p>Veebilehed</p>
        </Link>
        <Link className='main-link' to="/designs">
          <img src="https://inifdjaipur.in/blog/wp-content/uploads/2019/06/sketching-1024x585.jpg" alt=""/>
          <p>Disainid</p>     
       </Link>
        <Link className='main-link' to="/photography">
          <img src="https://yourfreecareertest.com/wp-content/uploads/2016/07/photographer-300x200.jpg" alt=""/>
          <p>Fotograafia</p>
        </Link>

      </div>
      <Routes>
        <Route path="webpages" element={<Webpages/>}/>
        <Route path="designs" element={<Designs/>}/>
        <Route path="photography" element={<Photography/>}/>
      </Routes>
    </div>
  );
}

export default App;
