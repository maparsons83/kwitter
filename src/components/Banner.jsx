import React, { Component } from "react";
import '../App.css';
import { Icon, Container, Header } from 'semantic-ui-react';
import { Link, Route, Switch } from "react-router-dom";
import App  from "./App";
import Feed from "./Feed";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Banner extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
        <React.Fragment>
            <br />
            <br />
        <Container textAlign="center">
            <Header>
                <Icon.Group size="big">
                <Icon name="dont" inverted color="teal" size="big"/>  
                <Icon name="twitter"inverted color="black"/>
                </Icon.Group>
                <Header.Content id="bannerText">
                    Kwitter
                </Header.Content>
            </Header>
        </Container>
        <br />
        <Switch>
            <Route exact path="/"  render={props => <App {...props} />}/>
            <Route path="/messages" render={props => <Feed {...props} />}/>
        </Switch>
        </React.Fragment>
        
    )}

}
export default withRouter(connect()(Banner));