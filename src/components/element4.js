import React from "react";
import { Row, Col, Progress } from "reactstrap";

const Element4 = props => {
  return (
    <div className="mb-5">
      <h1>Design:</h1>
      <Progress value="75">75%</Progress>
      <h1>Code:</h1>
      <Progress value={68}>68%</Progress>
      <h1>JavaScript:</h1>
      <Progress value={75}>80%</Progress>
      <h1>Client satisfaction:</h1>
      <Progress color="success" value="100">
        100%
      </Progress>
      <h1>Programing languages:</h1>
      <Progress multi>
        <Progress bar value="15">
          Python
        </Progress>
        <Progress bar color="success" value="30">
          HTML
        </Progress>
        <Progress bar color="info" value="25">
          Javascript
        </Progress>
        <Progress bar color="warning" value="20">
          CSS
        </Progress>
        <Progress bar color="danger" value="15">
          Node
        </Progress>
      </Progress>
    </div>
  );
};

export default Element4;
