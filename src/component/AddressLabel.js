import React from "react";
import "./address.css";
function AddressLabel(props) {
  return (
    <div className="address">
      <div>{props.name}</div>
      <div>{props.address}</div>
    </div>
  );
}
export default AddressLabel;
