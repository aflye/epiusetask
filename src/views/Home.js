import React from 'react';
import {Container, Jumbotron, Card, Nav, Breadcrumb } from 'react-bootstrap/';
import cookies from '../cookiestore';

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
        <Jumbotron>
          <h1>Welcome, {cookies.get("session")}!</h1>
        </Jumbotron>
        <Breadcrumb>
          <Breadcrumb.Item active href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="border-0 bg-light">
          <Card.Body>
            <h4>What would you like to do?</h4>
            <Nav className="flex-column">
              <Nav.Link href="/hierarchy">View security door entry hierarchy</Nav.Link>
              <Nav.Link href="/doors">Manage Doors</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;