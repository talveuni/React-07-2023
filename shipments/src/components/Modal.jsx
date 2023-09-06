import React, { useRef } from "react";

function Modal(props) {
    const orderNoRef = useRef();
    const deliveryDateRef = useRef();
    const customerRef = useRef();
    const trackingNoRef = useRef();
    const statusRef = useRef();
    const consigneeRef = useRef();
    
    console.log(props.shipment)

    const saveShipmentDetails = () => {
       const updatedShipment = {
          orderNo : orderNoRef.current.value,
          date : deliveryDateRef.current.value,
          customer : customerRef.current.value,
          trackingNo : trackingNoRef.current.value,
          status : statusRef.current.value,
          consignee : consigneeRef.current.value
        }

        props.updateSelectedShipment(updatedShipment);
        props.setModalOpen(false);
        console.log(props.shipment)

      }
    
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") {
          props.closeModal();
        }
      }}
    >
      <div className="modal">
        <div>
          <div>Shipment details</div>
          <br />
          <label>orderNO</label> <br />
          <input ref={orderNoRef} defaultValue= {props.shipment.orderNo} type="text" /> <br />
          <label>date</label> <br />
          <input ref={deliveryDateRef} defaultValue= {props.shipment.date} type="text" />
          <br />
          <label>customer</label> <br />
          <input ref={customerRef} defaultValue= {props.shipment.customer} type="text" /> <br />
          <label>trackingNO</label> <br />
          <input ref={trackingNoRef} defaultValue= {props.shipment.trackingNo} type="text" />
          <br />
          <label>consignee</label> <br />
          <input ref={consigneeRef} defaultValue= {props.shipment.consignee} type="text" /> <br />
          <label>status</label> <br />
          <input  ref={statusRef} defaultValue= {props.shipment.status} type="text" />
          <br /> <br />
          <button onClick={saveShipmentDetails}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
