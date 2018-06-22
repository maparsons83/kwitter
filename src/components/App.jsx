
import React, { Component } from "react";
import {
  Button,
  Form,
  Divider,
  Container,
  Header,
  Icon
} from "semantic-ui-react";
import { withRouter } from "react-router";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../actions.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      // loginSuccess: false
    };
  }

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  handleRegisterSubmit = e => {
    e.preventDefault();
    const postOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.username
      })
    };
    fetch("https://kwitter-api.herokuapp.com/auth/register", postOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.dispatch(registerUser(data));
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const postOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.loginUsername,
        password: this.state.loginPassword
      })
    };

    fetch("https://kwitter-api.herokuapp.com/auth/login", postOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.dispatch(loginUser(data));
        console.log("this.props: ", this.props)
         
      }).then(this.props.history.push("/messages"))
      .catch(e => {
        console.log(e);
        
      });
  };

  render() {
    return (
      <React.Fragment>
        <Container text>
          {/* <Container text>
            <Icon.Group size="huge">
              <Icon name="dont" inverted color="teal" size="big" />
              <Icon name="twitter" inverted color="black" />
            </Icon.Group>
          </Container> */}
          <Header as="h1">Welcome to Kwitter!</Header>
          <Container text>
            <Header as="h2">New to Kwitter? Register here!</Header>
            <Form onSubmit={this.handleRegisterSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("username")}
                  fluid
                  label="Username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("password")}
                  fluid
                  label="Password"
                  type="text"
                  placeholder="Password"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("confirmPassword")}
                  fluid
                  label="Confirm Password"
                  type="text"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Field>
              <Button inverted color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <Divider horizontal>OR</Divider>
          <Container text>
            <Header as="h2">Already a member? Login</Header>
            <Form onSubmit={this.handleLoginSubmit}>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("loginUsername")}
                  fluid
                  label="Username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  onChange={this.handleChange("loginPassword")}
                  fluid
                  label="Password"
                  type="text"
                  placeholder="Password"
                  required
                />
              </Form.Field>
              <Button inverted color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
          <br />
          <Container>
            <Button inverted color="teal">
              <Link to="/messages">Preview Posts</Link>
            </Button>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password,
    displayName: state.displayName,
    token: state.token,
    success: state.success
  };
};

export default withRouter(connect(mapStateToProps)(App));
