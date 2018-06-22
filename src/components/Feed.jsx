import React, { Component } from "react";
import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import FeedItem from "./FeedItem.jsx";
import { withRouter } from "react-router";

class Feed extends Component {
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
            
        }).catch((e) => console.log(e))
    }
    handleTextChange = (e) => {
        this.setState({ textAreaText: e.target.value })
    }
    handleKeyPress = (e) => {
        if (e.key === "Enter") { 
            alert(e.key)
        }

    }

    
    render() {
        return (
            <React.Fragment>
                <br />
            <Container text>
                <Segment text inverted color="blue">
                    <Form on>
                        <TextArea onChange={this.handleTextChange} onKeyPress={this.handleKeyPress} fluid label="Message Box" maxlength="280" size="huge" placeholder="Start kweeting" />
                    </Form>
                </Segment>
                <Divider horizontal></Divider>
            </Container>
            <Container>
            <FeedItem messages={this.state.messages} />
            </Container>
            </React.Fragment>
    )}
}
export default withRouter(connect()(Feed));
