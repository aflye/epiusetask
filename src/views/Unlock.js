import React from 'react';
import { Container, Card, Button,Nav, InputGroup, FormControl, Form, Breadcrumb } from 'react-bootstrap/';
//import cookies from '../cookiestore';

class Unlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      session: ""
    };
  }

  validateForm() {
    return this.state.id.length > 0;
  }

  async getDoors(node) {
    let query = "http://localhost:5000/doors?parent_area=".concat(node);
    // console.log(query);
    const response = await fetch(query);
    const json = await response.json();
    var data = json;
    // console.log(data);
    return data;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = event => {
    event.preventDefault();
    let query = "http://localhost:5000/doors?id=".concat(this.state.id);
    // console.log(query);
    fetch(query)
    .then(response => response.json()) 
    .then(json => {
      let data = json[0];
      if (typeof data === 'undefined' || data === []) {
        alert("No door exists with id " + this.state.id);
      }
      data.status = "open";
      // console.log(data);
      // console.log(JSON.stringify(data));
      fetch("http://localhost:5000/doors/".concat(this.state.id), {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        if (typeof json[0] !== 'undefined' || json[0] !== []) {
          alert("Door " + this.state.id + " set to 'open'");
        }
      })
      .catch(err => {
        alert("No door exists with id " + this.state.id);
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <br />
        {/* <Jumbotron>
          <h1>Unlock door</h1>
        </Jumbotron> */}
        <center><div className="login-text"><h3>SECURITREE - Security Dashboard</h3></div></center>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/doors">Doors</Breadcrumb.Item>
          <Breadcrumb.Item active>Unlock</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="border-0" bg="light">
          <Card.Body>
            <h4>Please enter the ID of the door to unlock</h4>
            <br/>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-0" controlId="id">
                <InputGroup className="">
                  <FormControl
                    aria-label="Door ID"
                    aria-describedby="basic-addon2"
                    autoFocus
                    required
                    minLength="5"
                    type="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <Button block type="submit" disabled={!this.validateForm()}>
                      Unlock Door
                  </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
            <Nav className="flex-column">
            <Nav.Link href="/doors"> Back</Nav.Link>
            </Nav> 
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Unlock;