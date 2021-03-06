import React, { Component } from "react";
import { Container, Form, Divider, Segment, Icon, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import FeedItem from "./FeedItem.jsx";
import { withRouter } from "react-router";

class Feed extends Component {
    state = {
        messages: [],
        textAreaText: ""  
    }

    fetchMessages = () => {fetch("https://kwitter-api.herokuapp.com/messages") 
    .then(results => {
        return results.json();
    }).then(data => {
        console.log("data", data)
        this.setState({messages: data.messages})}
      
        
    ).catch((e) => console.log(e))}


    componentDidMount() {
        setInterval(this.fetchMessages, 3000);
    }

    handleTextChange = (e) => {
        this.setState({ textAreaText: e.target.value })
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log(e.key)
        }
    }


    messageSubmit = e => {
        e.preventDefault();
        const postOptions = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${this.props.token}`,


          },
          body: JSON.stringify({
            text : this.state.textAreaText
          })
        };
        
        fetch("https://kwitter-api.herokuapp.com/messages", postOptions)
          .then(response => response.json())
           .then(data =>{
               console.log(data)
               this.setState({
                   textAreaText : ""
                })
           })  
          .catch(e => {
            // console.log(e)
            
          });
          
        };

    
    render() {

        return (
            <React.Fragment>
                <br />
            <Container text>
                <Segment text inverted color="blue">
                    <Form on>
                        <button onClick= {this.messageSubmit} id='submit'> Submit </button>
                        <TextArea onChange={this.handleTextChange} value= {this.state.textAreaText} fluid label="Message Box" maxlength="140" size="huge" placeholder="Start kweeting" />
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
// for messages
const mapStateToProps = state => {
    return {
        token : state.token
    }
}
export default withRouter(connect(mapStateToProps)(Feed));
