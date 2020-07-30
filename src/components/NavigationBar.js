import React, { useState } from "react";
import {
  Button,
  Nav,
  Form,
  FormControl,
  Navbar,
  Container,
} from "react-bootstrap";

const NavigationBar = (props) => {
  const [searchText, setSearchText] = useState("");

  // Alternate way to invoke function in parent component- pass the function as a object. The one used in onClick for Button is another way.
  // const showToastInParent = (searchText) => {
  //   props.parentMethod();
  // };

  return (
    <Container fluid>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Hello_world Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline onChange={(e) => setSearchText(e.target.value)}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />

          {/* <Button onClick={showToastInParent} variant="outline-light"> */}
          <Button
            onClick={() => props.parentMethod(searchText)}
            variant="outline-light"
          >
            Search
          </Button>
        </Form>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
