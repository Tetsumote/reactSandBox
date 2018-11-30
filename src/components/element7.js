import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Jumbotron,
  Container
} from "reactstrap";
import classnames from "classnames";

export default class Element7 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Adress:
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Google maps:
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ListGroup flush>
                  <ListGroupItem disabled tag="a" href="#">
                    Cras justo odio
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Dapibus ac facilisis in
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Morbi leo risus
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Porta ac consectetur ac
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Vestibulum at eros
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <div>
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Google maps</h1>
                  <p className="lead">Content</p>
                </Container>
              </Jumbotron>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
