import React, { Component } from 'react';
import { Container, Form, Button, Card, Jumbotron } from 'react-bootstrap';
import cookies from "../cookiestore";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      session: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = event => {
    event.preventDefault();

    let query = "http://localhost:5000/registered_users?username=".concat(this.state.username).concat("&password=").concat(this.state.password)
    // console.log(query);
    fetch(query)
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        // console.log('Success:', response);
        // console.log(response.length);
        if (response.length === 0) {
          alert("Incorrect credentials, please try again");
        }
        else {
          this.state.session = response;
          cookies.set("session", response[0].first_name + " " + response[0].surname);
          this.props.history.push('/');
        }
      });
  }


  render() {
    return (
      <Container>
      <br />
      <Jumbotron>
        <h1>Login</h1>
      </Jumbotron>
      <Card>
        <Card.Header>Please enter login information</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoFocus
                required
                minLength="6"
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                minLength="6"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!this.validateForm()}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
  }

}
