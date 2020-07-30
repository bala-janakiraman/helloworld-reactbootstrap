import React, { useState } from "react";
import { Toast } from "react-bootstrap";

function ToastAlert(props) {
  const [showToast, setShowToast] = useState(true);

//   const toggleShowToast = () => {
//     console.log(showToast);
//     setShowToast(!showToast);
//   };

  const toggleShowToastInApp = () => {
    props.parentMethod();
  };

  return (
    // <Toast show={showToast} onClose={toggleShowToast}>
    <Toast show={showToast} onClose={toggleShowToastInApp}>
      {/* // <Toast > */}
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        Hello, world! This is a toast message.Your message was - {props.toastMessage}
      </Toast.Body>
    </Toast>
  );
}

export default ToastAlert;
