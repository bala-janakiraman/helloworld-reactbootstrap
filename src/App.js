import React, { useState} from "react";
import "./css/App.css";
import NavigationBar from "./components/NavigationBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
// import ToastAlert from "./components/ToastAlert";
import { Container, Button } from "react-bootstrap";

const App = (props) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showToastFlag, setShowToastFlag] = useState(false);
  const [ToastMessage, setToastMessage] = useState("");


   function showToast(message) {
     console.log('show toast funtion')
    setShowToastFlag(!showToastFlag);
    setToastMessage(message);
  };

  return (
    <>
      {showNavBar ? <NavigationBar parentMethod={showToast} /> : ""}

      <br />
      <Container fluid>
        <Button
          onClick={() => setShowNavBar(!showNavBar)}
          variant={showNavBar ? "danger" : "success"}
        >
          {showNavBar ? "Hide NavBar" : " Show Navbar"}
        </Button>
      </Container>
      <br />
      <HomePage />
      {showToastFlag ? (
        <Container center>
          {/* <ToastAlert
            parentMethod={showToast}
            toastMessage={ToastMessage}
          /> */}
          <SearchResults message={ToastMessage} />
        </Container>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default App;
