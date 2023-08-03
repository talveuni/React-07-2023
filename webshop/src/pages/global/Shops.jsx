import { useEffect, useState } from 'react';
import Map from '../../components/Map';
import config from "../../data/config.json"
import { useTranslation } from "react-i18next";

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    fetch(config.shopsUrl)
      .then(res=>res.json())
      .then(data=>setShops(data || []))
  }, []);

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.9388, 25.6052], zoom: 7})}>{t("all-shops")}</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>{t("all-tln-shops")}</button>
    {shops.map((shop, index)=>
    <button onClick={() => setCoordinates({lngLat: [shop.longitude, shop.latitude], zoom: 13})}>{shop.name}</button>
    )}
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;