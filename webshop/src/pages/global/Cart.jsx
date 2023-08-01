import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import '../../css/Cart.css'

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  const {t} = useTranslation();
  const [parcelMachines, setParcelmachines] = useState([]);
  
  useEffect(()=> { //kohe lehele tulles tehakse API päring
    fetch('https://www.omniva.ee/locations.json')
      .then(response => response.json()) // päringu staatus ja metaandmed
      .then(json => setParcelmachines(json)) // json kujul veebilehe sisu
  }, []);

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeItem = (id) => {
    cart.splice(id, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calcSum = () => {
    let sum = 0;
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    return sum.toFixed(2);
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if  (cart[index].quantity === 0) {      //  --> eemaldab, kui kogus läheb 0
      cart.splice(index, 1);
      setCart(cart.slice());
    } 

    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return (
    <div>
      <br />
      {cart.map((cartProduct, index) =>
      <div className='product' key={index}> 
        <img className='image' src={cartProduct.product.image} alt="" />
        <div className='name'>{cartProduct.product.name}</div>
        <div className='price'>{(cartProduct.product.price.toFixed(2))} € </div>
        <div className='quantity'>
          <img src="/minus.png" className='button' onClick={()=> decreaseQuantity(index)} alt="" />
          <span>{cartProduct.quantity} {t("pc")} </span>
          <img src="/add.png" className='button' onClick={()=> increaseQuantity(index)} alt="" />
        </div>
        <span className='sum'>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</span>
        <img src="/delete.png" className='button' onClick={()=> removeItem(index)} alt="" />
       
      </div>
      )}
      <br />
      <select>{parcelMachines.filter(pm=> pm.A0_NAME === "EE").map((pm, index) => <option key={index}>{pm.NAME}</option>)}</select>


      {cart.length > 0 && 
      <div>
        <div>{t("total-sum")}: {calcSum()} €</div> <br />
        <Button onClick={emptyCart} variant="secondary">{t("remove-all")}</Button>
      </div>} 
      
       {cart.length === 0 && <div>{t("empty-cart")}</div>}
    </div>
  )
}

export default Cart