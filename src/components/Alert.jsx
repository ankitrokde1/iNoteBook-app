import React from "react";

const Alert = (props) => {
  // const capitalize = (word) => {
  //   if (word === "danger") {
  //     word = "error";
  //   }
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + word.slice(1);
  // };
  return (
    <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        style={{ height: "50px" }}
        role="alert"
      >
        {props.alert.msg}
      </div>
    </div>
  );
};

export default Alert;
