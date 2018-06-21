import React, { Component } from "react";
import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import FeedItem from "./FeedItem.jsx";


export default class Feed extends Component {
    state = {
        messages: []    
    }
    componentDidMount() {
        fetch("https://kwitter-api.herokuapp.com/messages") 
        .then(results => {
            return results.json();
        }).then(data => {
            console.log("data", data)
            this.setState({messages: data.messages})
            
        }).then( data => data ? console.log(this.state.messages): setInterval(console.log(this.state.messages), 5000)
        )
        
    }

    
    render() {
        return (
            <React.Fragment>
                <br />
            <Container text>
                <Segment text inverted color="blue">
                    <Form>
                        <TextArea fluid label="Message Box" maxlength="280" size="huge" placeholder="Start kweeting" />
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
