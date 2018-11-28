import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export default class Example3 extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
