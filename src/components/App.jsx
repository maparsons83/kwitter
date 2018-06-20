import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Button, Form, Divider, Container, Header, Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
            <Container text>
                <Container>
                <Icon.Group size="huge">
                <Icon name="dont" inverted color="teal" size="big"/>  
                <Icon name="twitter"inverted color="black"/>
                </Icon.Group>
                </Container>
                <Header as="h1">Welcome to Kwitter!</Header>
                <Container text>
                    <Header as="h2">New to Kwitter?  Register here!</Header>
                        <Form>
                            <Form.Field>
                            <Form.Input fluid label="Email Address" type="text" placeholder="Email Address" required/>
                            </Form.Field>
                            <Form.Field>
                            <Form.Input fluid label="Password" type="text" placeholder="Password" required/>
                            </Form.Field>
                            <Form.Field>
                            <Form.Input fluid label="Confirm Password" type="text" placeholder="Confirm Password" required/>
                            </Form.Field>
                            <Button inverted color="teal" type="submit">Submit</Button>
                        </Form>
                </Container>
                <Divider horizontal>OR</Divider>
                <Container text>
                    <Header as="h2">Already a member?  Login</Header>
                        <Form>
                        <Form.Field>
                        <Form.Input fluid label="Email Address" type="text" placeholder="Email Address" required/>
                        </Form.Field>
                        <Form.Field>
                        <Form.Input fluid label="Password" type="text" placeholder="Password" required/>
                        </Form.Field>
                        <Button inverted color="teal" type="submit">Submit</Button>
                        </Form>
                </Container>
            </Container>
    );
  }
}

export default App;
