import React, { useRef } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
} from "reactstrap";



function TModal(props) {
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
  //   <div
  //     className="modal_container"
  //     onClick={(e) => {
  //       if (e.target.className === "modal_container") {
  //         props.setModalOpen(false);
  //       }
  //     }}
  //   >
  //     <div className="modal">
  //       <div className="modal_border">
  //         <div className="heading">
  //           Shipment details
  //         </div>
  //         <div className="modal_elements">
  //           <div>
  //             <label>orderNO</label> <br />
  //             <input ref={orderNoRef} defaultValue= {props.shipment.orderNo} type="text" /> 
  //           </div>
  //           <div>
  //             <label>date</label> <br />
  //             <input ref={deliveryDateRef} defaultValue= {props.shipment.date} type="date" />
  //           </div>
  //           <div>
  //             <label>customer</label> <br />
  //             <input ref={customerRef} defaultValue= {props.shipment.customer} type="text" /> 
  //           </div>
  //           <div>
  //             <label>trackingNo</label> <br />
  //             <input ref={trackingNoRef} defaultValue= {props.shipment.trackingNo} type="text" /></div>
  //           <div>
  //             <label>consignee</label> <br />
  //             <input ref={consigneeRef} defaultValue= {props.shipment.consignee} type="text" /> </div>
  //           <div>
  //             <label>status</label> <br />
  //             <div className="status">
  //             <select ref={statusRef} defaultValue= {props.shipment.status}>
  //               <option value="'Delivered'">'Delivered'</option>
  //               <option value="'In Transit'">'In Transit'</option>
  //               <option value="'Shipped'">'Shipped'</option>
  //             </select>
  //             </div>
  //           </div>           
  //         </div>
  //         <div className="btn_center">
  //           <button onClick={saveShipmentDetails}>Update</button>
  //         </div>
  //        </div>
  //     </div>
  //   </div>


  <Modal isOpen={props.isOpen} toggle={() => props.setModalOpen(!props.isOpen)}>
      <div className="modal_border">
        <ModalHeader toggle={() => props.setModalOpen(!props.isOpen)}>
          Shipment details
        </ModalHeader>
        <ModalBody>
          <div className="modal_elements">
            <div>
              <Label for="orderNo">Order No</Label>
              <Input
                id="orderNo"
                innerRef={orderNoRef}
                defaultValue={props.shipment.orderNo}
                type="text"
              />
            </div>
            <div>
              <Label for="deliveryDate">Delivery Date</Label>
              <Input
                id="deliveryDate"
                innerRef={deliveryDateRef}
                defaultValue={props.shipment.date}
                type="date"
              />
            </div>
            <div>
              <Label for="customer">Customer</Label>
              <Input
                id="customer"
                innerRef={customerRef}
                defaultValue={props.shipment.customer}
                type="text"
              />
            </div>
            <div>
              <Label for="trackingNo">Tracking No</Label>
              <Input
                id="trackingNo"
                innerRef={trackingNoRef}
                defaultValue={props.shipment.trackingNo}
                type="text"
              />
            </div>
            <div>
              <Label for="consignee">Consignee</Label>
              <Input
                id="consignee"
                innerRef={consigneeRef}
                defaultValue={props.shipment.consignee}
                type="text"
              />
            </div>
            <div>
              <Label for="status">Status</Label>
              <Input
                id="status"
                innerRef={statusRef}
                defaultValue={props.shipment.status}
                type="select"
              >
                <option value="Delivered">Delivered</option>
                <option value="In Transit">In Transit</option>
                <option value="Shipped">Shipped</option>
              </Input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="btn_center">
          <Button color="primary" onClick={saveShipmentDetails}>
            Update
          </Button>
          <Button color="secondary" onClick={() => props.setModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </div>
    </Modal>
   );

}

export default TModal;
