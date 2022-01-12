import React from 'react';
import { Container, Card, Breadcrumb, Nav } from 'react-bootstrap/';
//import { NavLink } from 'react-router-dom';
//import cookies from '../cookiestore';

class Doors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      surname: ""
    };
  }

  render() {
    return (
      <Container>
        <br />
        {/* <Jumbotron>
          <h1>Manage Doors</h1>
        </Jumbotron> */}
        <center><div className="login-text"><h3>SECURITREE - Security Dashboard</h3></div></center>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Doors</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="border-0" bg="light">
          <Card.Body>
            <h4>Manage Doors Menu Options</h4>
            <Nav className="flex-column">
              <Nav.Link href="/lock">1. Lock Door</Nav.Link>
              <Nav.Link href="/unlock">2. Unlock Door</Nav.Link>
              <Nav.Link href="/home">3. Back</Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Doors;
