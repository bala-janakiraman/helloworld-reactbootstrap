import React, { useState, Component } from "react";
import "./css/App.css";
// import NavBar from "./components/NavBar";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ToastAlert from "./components/ToastAlert";
import { Container, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToastFlag: false,
      showNavBar: false,
      toastMessage:""
    };
    this.showToast = this.showToast.bind(this);
  }

  showSearchAlert() {
    // console.log("Got toast alert");
    return (
      <Container>
        <ToastAlert>Your Search text was</ToastAlert>
      </Container>
    );
  }

  showToast(message) {
    // this.setState({ showToastFlag: true });
    this.setState({ showToastFlag: !this.state.showToastFlag });
    this.setState({ToastMessage:message})
  }

  render() {
    return (
      <>
        {this.state.showNavBar ? (
          <NavigationBar parentMethod={this.showToast} />
        ) : (
          ""
        )}

        <br />
        <Container fluid>
          {/* <Button
            onClick={() => setShowNavBar(!showNavBar)}
            variant={showNavBar ? "danger" : "success"}
          >
            {showNavBar ? "Hide NavBar" : " Show Navbar"}
          </Button> */}
          <Button
            onClick={() =>
              this.setState({ showNavBar: !this.state.showNavBar })
            }
            variant={this.state.showNavBar ? "danger" : "success"}
          >
            {this.state.showNavBar ? "Hide NavBar" : " Show Navbar"}
          </Button>
        </Container>
        <br />
        <HomePage />
        {this.state.showToastFlag ? (
          <Container>
            <ToastAlert parentMethod={this.showToast} toastMessage={this.state.ToastMessage}/>
          </Container>
        ) : (
          ""
        )}
        <Footer />
      </>
    );
  }
}

export default App;
