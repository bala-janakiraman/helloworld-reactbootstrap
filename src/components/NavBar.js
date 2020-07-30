import React, { Component } from "react";
import {
  Button,
  Nav,
  Form,
  FormControl,
  Navbar,
  Container,
  Alert,
} from "react-bootstrap";
import ToastAlert from "./ToastAlert";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      showAlert: false,
      showToastFlag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  showAlert() {
    const alertComponent = (
      <card>
        <Alert
          variant="danger"
          onClose={() => this.setState({ showAlert: false })}
          dismissible
        >
          You had typed + {this.state.searchText}
        </Alert>
      </card>
    );
    return alertComponent;
  }

  render() {
    return (
      <Container fluid>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Hello_world Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline onChange={this.handleChange}>
            {/* <Form inline onChange={e=>setSearchText(e.target.value)}> */}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button
              //   onClick={() => this.setState({ showAlert: !this.state.showAlert })}
              onClick={() => this.props.showSearchAlert("HELLO")}
              variant="outline-light"
            >
              Search
            </Button>
            {/* {this.state.showAlert ? this.showAlert() : ""} */}
            {this.state.showAlert ? (
              <ToastAlert message={this.state.searchText} />
            ) : (
              ""
            )}
          </Form>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;
