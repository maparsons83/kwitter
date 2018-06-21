import React, { Component } from "react";
import { Feed, Icon, Divider } from "semantic-ui-react";

export default class FeedItem extends Component {
    
    render() {
        return (
            <React.Fragment>
            {this.props.messages.map( (item, index) => 
            <Feed>
                
                <Feed.Event>
                    <Feed.Label>
                        {/* <img src= /> */}
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <Feed.User>{item.userId}</Feed.User>
                        <Feed.Date>{item.createdAt}</Feed.Date>
                        <Feed.Extra text>
                            {item.text}
                        </Feed.Extra>     
                        </Feed.Summary>
                        <Feed.Meta>
                        <Feed.Like>
                            <Icon name='like' />
                            {item.likes.length} likes
                        </Feed.Like>
                        </Feed.Meta>
                    </Feed.Content>
                    </Feed.Event>
            </Feed>   
        )}
        </React.Fragment> 
    )}
}
