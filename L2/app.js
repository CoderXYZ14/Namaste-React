import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading1 = (
//   <h1 className="head" tabIndex="5">
//     Namaste React
//   </h1>
// );
const Heading1 = () => (
  <h1 className="head" tabIndex="5">
    Namaste React
  </h1>
);

//Raect Funcitonal Components
const Heading = () => (
  <div>
    {/* both are same thibg */}
    {Heading1()}
    <Heading1 />
    <h1>Namaste Raect</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
