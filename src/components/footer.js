import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <Jumbotron fluid className="mb-0">
        <Container fluid>
          <h1>Footer</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
