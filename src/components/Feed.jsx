import React, { Component } from "react";

import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import FeedItem from "./FeedItem.jsx";

export default class Feed extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
            <Container text>
                <Segment text inverted color="teal">
                    <Form>
                        <TextArea fluid label="Message Box" size="huge" placeholder="Start kweeting" />
                    </Form>
                </Segment>
                <Divider horizontal></Divider>
            </Container>
            <Container>
            <FeedItem />
            </Container>
            </React.Fragment>
        
    )}
}
