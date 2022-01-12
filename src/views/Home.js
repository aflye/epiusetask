import React from 'react';
import {Container, Card, Nav, Breadcrumb } from 'react-bootstrap/';
//import cookies from '../cookiestore';

class Home extends React.Component {

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
          <h1>Welcome, {cookies.get("session")}!</h1>
        </Jumbotron> */}
        <center><div className="login-text"><h3>SECURITREE - Security Dashboard</h3></div></center>
        <Breadcrumb>
          <Breadcrumb.Item active href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="border-0 bg-light">
          <Card.Body>
            <h4>Main Menu Options</h4>
            <Nav className="flex-column">
              <Nav.Link href="/hierarchy">1. View Security Entry Hierarchy</Nav.Link>
              <Nav.Link href="/doors">2. Manage Doors</Nav.Link>
              <Nav.Link href="/logout">3. Log Out</Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;