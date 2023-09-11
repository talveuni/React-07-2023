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
      orderNo: orderNoRef.current.value,
      date: formatDateForTable(deliveryDateRef.current.value),
      customer: customerRef.current.value,
      trackingNo: trackingNoRef.current.value,
      status: statusRef.current.value,
      consignee: consigneeRef.current.value,
    };
    props.updateSelectedShipment(updatedShipment);
    props.setModalOpen(false);
    console.log(updatedShipment);
  };

  // Function to format the date for the input field
  function formatDateForInput(dateString) {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      // Check if the date is valid
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    return ""; // Return an empty string if the date is not valid
  }

  function formatDateForTable(dateString) {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      // Check if the date is valid
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
    return ""; // Return an empty string if the date is not valid
  }

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={() => props.setModalOpen(!props.isOpen)}
    >
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
                defaultValue={formatDateForInput(props.shipment.date)} // Format the date here
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
