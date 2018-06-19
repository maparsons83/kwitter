import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import '../App.css';

export class Feed extends Components {
    render() {
        return (
            <section>
                <form className="messageForm">
                <textarea className="messagebox" placeholder="Your kweet goes here..." maxlength="140"></textarea>
                </form>
                <section className="liveFeed">
                    This is where the live feed will be.
                </section>
            </section>
        
    )}
}