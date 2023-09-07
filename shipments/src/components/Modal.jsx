import React, { useRef } from "react";

function Modal(props) {
    const orderNoRef = useRef();
    const deliveryDateRef = useRef();
    const customerRef = useRef();
    const trackingNoRef = useRef();
    const statusRef = useRef();
    const consigneeRef = useRef();
    
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
        console.log(updatedShipment)
      }
    
  return (
    <div
      className="modal_container"
      onClick={(e) => {
        if (e.target.className === "modal_container") {
          props.closeModal();
        }
      }}
    >
      <div className="modal">
        <div className="modal_border">
          <div className="heading">
            Shipment details
          </div>
          <div className="modal_elements">
            <div>
              <label>orderNO</label> <br />
              <input ref={orderNoRef} defaultValue= {props.shipment.orderNo} type="text" /> 
            </div>
            <div>
              <label>date</label> <br />
              <input ref={deliveryDateRef} defaultValue= {props.shipment.date} type="text" />
            </div>
            <div>
              <label>customer</label> <br />
              <input ref={customerRef} defaultValue= {props.shipment.customer} type="text" /> 
            </div>
            <div>
              <label>trackingNo</label> <br />
              <input ref={trackingNoRef} defaultValue= {props.shipment.trackingNo} type="text" /></div>
            <div>
              <label>consignee</label> <br />
              <input ref={consigneeRef} defaultValue= {props.shipment.consignee} type="text" /> </div>
            <div>
              <label>status</label> <br />
              <input  ref={statusRef} defaultValue= {props.shipment.status} type="text" /></div>           
          </div>
          <div className="btn_center">
            <button onClick={saveShipmentDetails}>Update</button>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Modal;
