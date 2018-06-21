import React, { Component } from "react";
import { Banner } from './Banner.jsx';
import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import FeedItem from "./FeedItem.jsx";
import { Route } from "react-router-dom";

export class Feed extends Component {
    render() {
        return (
            <Route exact path="/messages">
            <Container text>
                <Segment text inverted color="teal" >
                    <Form>
                        <TextArea fluid label="Message Box" maxlength="280" size="huge" placeholder="Start kweeting" />
                    </Form>
                </Segment>
                <Divider horizontal></Divider>
            </Container>          
            </Route>
        
    )}
}
