import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar fixed="bottom" bg="primary" variant="dark">
          <Navbar.Brand href="#">Footer</Navbar.Brand>
          <Container fluid>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Linkedin</Nav.Link>
              <Nav.Link href="#sdsds">Twitter</Nav.Link>
              <Nav.Link href="#dsds">Github</Nav.Link>
              <Nav.Link href="#dsdsds">LeetCode</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}

export default Footer;
