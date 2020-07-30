import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Jumbotron >
        <h1>React-Bootstrap Hello, world!</h1>
        <p>
          This is a Hello world program using React-Bootstrap.
        </p>
   
      </Jumbotron>
      <h3>Hello world!!</h3>
      <p>
        A "Hello, World!" program generally is a computer program that outputs
        or displays the message "Hello, World!". Such a program is very simple
        in most programming languages, and is often used to illustrate the basic
        syntax of a programming language. It is often the first program written
        by people learning to code.[1][2] It can also be used as a sanity test
        to make sure that a computer language is correctly installed, and that
        the operator understands how to use it.
      </p>
      <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </Container>
  );
}

export default HomePage;
