import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const longitudeRef = useRef();
  const latitudeRef = useRef();
  const nameRef = useRef();
  const openTimeRef = useRef();
  const {t} = useTranslation();

  useEffect(() => {
    fetch(config.shopsUrl)
      .then(res=>res.json())
      .then(data=>setShops(data || []))
  }, []);

  const addShop = () => {
    shops.push({
      "name": nameRef.current.value,
      "longitude": Number(longitudeRef.current.value),
      "latitude": Number(latitudeRef.current.value),
      "openTime": openTimeRef.current.value,
    });
    setShops(shops.slice());
    fetch(config.shopsUrl, {
      method: "PUT", //asendamine
      body: JSON.stringify(shops)
    })
  }

  const deleteShop = (index) => {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(config.shopsUrl, {
      method: "PUT", //asendamine
      body: JSON.stringify(shops)
    })
  }

  return (
    <div>
      <label>{t("shop-name")}</label> <br />
      <input ref= {nameRef} type="text" /> <br />
      <label>{t("longitude")}</label> <br />
      <input ref= {longitudeRef} type="text" /> <br />
      <label>{t("latitude")}</label> <br />
      <input ref= {latitudeRef} type="text" /> <br />
      <label>{t("open-time")}</label> <br />
      <input ref= {openTimeRef} type="text" /> <br />
      <button onClick={addShop}>{t("add")}</button> <br /><br />

      <h4>Poed:</h4>
      {shops.map((shop, index) => 
        <div key={index}>
          <div>{t(shop.name)} </div>
          <div>{t("coordinates")}: {t(shop.longitude)}, {t(shop.latitude)}</div> 
          <div>{t("open")}: {t(shop.openTime)}</div>
          <button onClick={()=>deleteShop(index)}>{t("delete")}</button> <br /><br />
        </div>)}
     </div> 
  )
}

export default MaintainShops