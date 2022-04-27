import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddressLabel from "./component/AddressLabel";
import Envelope from "./component/Envelope";
import Card from "./component/Card";
function Main() {
  return (
    <div>
      <AddressLabel
        name="Fullname"
        address="123 Fake St.
        Boston, MA 02118"
      />
      <Envelope />
      <Card />
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector("#root"));
