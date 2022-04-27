import React from "react";
import "./card.css";

function Card() {
  return (
    <div>
      <Content props={details} />
    </div>
  );
}
function Content({ props }) {
  return (
    <div className="card">
      <div className="bankName">{props.bankName}</div>
      <div className="creditNum">{props.creditNum}</div>
      <div className="expDate">
        <span>THUR</span> {props.expDate}
      </div>
      <div className="name">{props.name}</div>
    </div>
  );
}
const details = {
  bankName: "First Bank",
  creditNum: "123 445 445 3337 33333",
  expDate: "05/22",
  name: "David Benson Steve",
};
export default Card;
