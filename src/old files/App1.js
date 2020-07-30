import React, { useState } from "react";
import "./css/App.css";
import NavBar from "./components/NavBar";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ToastAlert from "./components/ToastAlert";
import { Container, Button } from "react-bootstrap";

function showSearchAlert() {
  // console.log("Got toast alert");
  return (
    <Container>
      <ToastAlert>Your Search text was</ToastAlert>
    </Container>
  );
}

showToast(){

  this.setState({showToastFlag:!this.state.showToastFlag})
}

function App(props) {
  const [showNavBar, setShowNavBar] = useState(false);



  return (
    <>
      {/* {showNavBar ? <NavBar showSearchAlert={this.showSearchAlert} /> : ""} */}
      {/* {showNavBar ? <NavBar /> : ""} */}
      {showNavBar ? <NavigationBar /> : ""}

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

      {/* <ToastAlert /> */}
      <Footer />
    </>
  );
}

export default App;
