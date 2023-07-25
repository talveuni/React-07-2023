import React, { useState } from 'react'
import cartFromFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';

function Cart() {
  const [cart, setCart] = useState(cartFromFile);
  const {t} = useTranslation();

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
  }

  const removeItem = (id) => {
    cart.splice(id, 1);
    setCart(cart.slice());
  }

  const addItem = (product) => {
    cart.push(product);
    setCart(cart.slice());

  }

  const calcSum = () => {
    let sum = 0;
    cart.forEach(product => sum += product.price);
    return sum;
  }

  return (
    <div>
      {cart.map((product, id) =>
      <div key={id}> 
        {product.name} - {product.price} €
        <button className="btn1" onClick={()=> removeItem(id)}>x</button>
        <button className="btn1" onClick={()=> addItem(product)}>+</button>
      </div>
      )}
      
      {cart.length > 0 && <button onClick={emptyCart}>{t("remove-all")}</button>} 
      <br /> <br />
      <div>{t("total-sum")}: {calcSum()} €</div>


    </div>
  )
}

export default Cart