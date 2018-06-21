import React, { Component } from "react";
import '../App.css';
import { Icon, Container, Header } from 'semantic-ui-react';

export class Banner extends Component {
    render () {
        return (
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
        
    )}

}