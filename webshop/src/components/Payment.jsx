import React from 'react'

function Payment(props) {
        
    const pay = () => {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const paymnentBody = {
          "api_username": "e36eb40f5ec87fa2",
          "account_name": "EUR3D1",
          "amount": props.sum,
          "order_reference": Math.random()* 9999999,
          "nonce":  Math.random()* 9999999 + new Date(),
          "timestamp": new Date(),
          "customer_url": "https://https://webshop-triin.web.app"
        };
        const paymentHeaders= {
          "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
          "Content-Type": "application/json"
        };
    
        fetch(url, {method: "POST", body: JSON.stringify(paymnentBody), headers: paymentHeaders})
          .then(res => res.json())
          .then(data => window.location.href= data.payment_link);
      }
  return (
    <div>
        <button onClick={pay}>Maksa</button> <br /><br />
    </div>
  )
}

export default Payment