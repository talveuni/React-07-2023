import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import config from "../../data/config.json"
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  const [shops, setShops] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    fetch(config.shopsUrl)
      .then(res=>res.json())
      .then(data=>setShops(data || []))
  }, []);

  return (
  <div>
    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map((shop, index)=>
      <Marker key={index} position={[shop.longitude, shop.latitude]}>
        <Popup>
          {shop.name} <br /> {t("open")}: {shop.openTime}
        </Popup>
      </Marker>
      )}
      {/* 
      <Marker position={[58.3775, 26.7308]}>
        <Popup>
          Tasku keskus. <br /> Avatud 10-21 <br />
          <a target='_blank' rel='noreferrer' href='https://www.google.com/maps/@58.3780497,26.7293706,18z?entry=ttu'>Turu 2</a>
        </Popup>
      </Marker> */}
    </MapContainer>
  </div>)
}

export default Map; 