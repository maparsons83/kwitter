import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";


// state = {likes : 0}
// likeButton = () => {
//     this.setState({
//         likes : this.state.likes + 1
//     })
// }


export default class FeedItem extends Component {
    constructor(props) {
        super(props);
    }

    dateChange = (formatDate) => {
   
        let date = new Date(Date.parse(formatDate))  
        let options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
        }
        let newDate = date.toLocaleTimeString("en-us", options)
        return newDate
} 


    
    render() {
        return (
            <React.Fragment>
            {this.props.messages.map( (item, index) => 

            <Feed key={index}>
                <Feed.Event>
                    <Feed.Label>
                        <img src="data:image/png;base64,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" alt="profile_pic" />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <Feed.User>{item.userId}</Feed.User>
                        <Feed.Date>{this.dateChange(item.createdAt)}</Feed.Date>
                        <Feed.Extra text>
                            {item.text}
                        </Feed.Extra>     
                        </Feed.Summary>
                        <Feed.Meta>
                        <Feed.Like>
                            <Icon  name='like' />
                            {/* {this.state.likes} */}
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
