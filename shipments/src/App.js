import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import shipmentsData from '../src/data/Shipments.json'

function App() {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
    fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => setShipments(json) || [])
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        console.log("Fetching data from local file...");

        // If the API request fails, use local data
        setShipments(shipmentsData);
      });
  }, []);

  const openShipmentDetails = (shipment) => {
    setSelectedShipment(shipment);
    setModalOpen(true);
  }

  const updateSelectedShipment = (updatedShipment) => {
    const updatedShipments = shipments.map((shipment) => {
      if (shipment.orderNo === updatedShipment.orderNo) {
        return updatedShipment;
      }
      return shipment;
    });
    setShipments(updatedShipments);
  }

  const deleteShipment = (shipment) => {
    shipments.splice(shipment.index, 1)
    setShipments(shipments.slice());
  }

  return (
    <div>

 {modalOpen && <Modal 
  shipment={selectedShipment}
  setShipment={setSelectedShipment}
  shipments = {shipments}
  setShipments = {setShipments}
  updateSelectedShipment ={updateSelectedShipment}
  setModalOpen={setModalOpen}
  closeModal={() => setModalOpen(false)}
  />}
      <table>
        <thead>
        <tr>
		      <th>ORDERNO</th>
		      <th>DELIVERYDATE</th>
		      <th>CUSTOMER</th>
		      <th>TRACKINGNO</th>
		      <th>STATUS</th>
		      <th>CONSIGNEE</th>
		      <th></th>
        </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => 
          <tr key={index}>
            <td>{shipment.orderNo}</td>
            <td>{shipment.date}</td>
            <td>{shipment.customer}</td>
            <td>{shipment.trackingNo}</td>
            <td>{shipment.status}</td>   
            <td>{shipment.consignee}</td>
            <td>
              <span>
                <button onClick={()=> openShipmentDetails(shipment)}>Details</button>
                <button  onClick={()=> deleteShipment(shipment)}>X</button>
              </span>
           
            </td>                   
         </tr> 
          )}        
        </tbody>
</table>

      
    </div>
  );
}

export default App;
