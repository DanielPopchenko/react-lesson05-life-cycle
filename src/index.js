import React from "react";
import ReactDOM from "react-dom/client";
// import Feedbacks from "./Feedbacks";
// import Contacts from "./Contacts";
// import SecondApp from "./SecondApp";
import PhoneBook from "./PhoneBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Feedbacks></Feedbacks> */}
    {/* <Contacts></Contacts> */}
    <PhoneBook />
  </React.StrictMode>
);
