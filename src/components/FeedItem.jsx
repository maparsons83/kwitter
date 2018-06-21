import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";

export default class FeedItem extends Component {
    render() {
        return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        {/* <img src= /> */}
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <Feed.User>Matty P</Feed.User>
                        <Feed.Date>2 days ago</Feed.Date>
                        <Feed.Extra text>
                            {this.props.text}
                        </Feed.Extra>     
                        </Feed.Summary>
                        <Feed.Meta>
                        <Feed.Like>
                            <Icon name='like' />
                            4 Likes
                        </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                    </Feed.Event>
            </Feed>  
    )}
}
