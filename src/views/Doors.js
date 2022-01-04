import React from 'react';
import { Container, Jumbotron, Card, Button, Breadcrumb } from 'react-bootstrap/';
import cookies from '../cookiestore';

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
        <Jumbotron>
          <h1>Manage Doors</h1>
        </Jumbotron>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Doors</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="border-0" bg="light">
          <Card.Body>
            <h4>What would you like to do?</h4>
            <br />
            <Button href="/unlock">Unlock Door</Button>
            <br /><br />
            <Button href="/lock">Lock Door</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Doors;
