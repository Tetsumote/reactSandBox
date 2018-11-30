import React, { Component } from "react";
import { Media } from "reactstrap";
import face1 from "../images/face1.jpg";
import face2 from "../images/face2.jpg";
import face3 from "../images/face3.jpg";

export default class Element5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: face1
    };
  }
  render() {
    return (
      <div className="mt-5 mb-5">
        <Media>
          <Media left top href="#" className="mb-2">
            <Media
              object
              src={this.state.img}
              alt="Generic placeholder image"
              className="mr-3"
            />
          </Media>
          <Media body>
            <Media heading>Top aligned media</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mb-2">
          <Media left middle href="#">
            <Media
              object
              src={face2}
              alt="Generic placeholder image"
              className="mr-3"
            />
          </Media>
          <Media body>
            <Media heading>Middle aligned media</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mb-2">
          <Media left bottom href="#">
            <Media
              object
              src={face3}
              alt="Generic placeholder image"
              className="mr-3"
            />
          </Media>
          <Media body>
            <Media heading>Bottom aligned media</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  }
}
