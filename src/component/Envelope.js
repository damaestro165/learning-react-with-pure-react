import React from "react";
import "./envelope.css";

function Person({ props }) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.address}</div>
    </div>
  );
}
function Stamp() {
  return (
    <div>
      <img
        src="https://cdn.vectorstock.com/i/preview-2x/81/91/seal-stamp-red-color-on-white-background-vector-34828191.webp"
        alt=""
        className="stamp"
      />
    </div>
  );
}
function Envelope() {
  return (
    <div className="container">
      <div>
        <Person props={sender} />
      </div>
      <div className="center">
        <Person props={reciever} />
      </div>
      <div>
        <Stamp />
      </div>
    </div>
  );
}
const sender = {
  name: "Mr.sender",
  address: "123 fake street, Sanfrancisco, CA 9410",
};
const reciever = {
  name: "Mr.reciever",
  address: "123 fake street, Boston, CA 9410",
};

export default Envelope;
