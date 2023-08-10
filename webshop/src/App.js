
import "./App.css";
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
import NavigationBar from "./components/NavigationBar";
import { Routes, Route,} from "react-router-dom";



function App() {
 
  return (
    <div className="App">
    
      <NavigationBar/>

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
