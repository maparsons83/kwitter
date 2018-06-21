import React, { Component } from "react";
import "../index.css";
import '../App.css';
import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import FeedItem from "./FeedItem.jsx";
import { Route } from "react-router-dom";

export class Feed extends Component {
    render() {
        return (
            <Route exact path="/messages">
            <Container text>
                <Icon.Group size="large">
                <Icon name="dont" inverted color="teal" size="big"/>  
                <Icon name="twitter"inverted color="black"/>
                </Icon.Group>
                <Segment text inverted color="teal">
                    <Form>
                        <TextArea fluid label="Message Box" size="huge" placeholder="Start kweeting" />
                    </Form>
                </Segment>
                <Divider horizontal></Divider>
            </Container>
            <FeedItem />
            </Route>
        
    )}
}
