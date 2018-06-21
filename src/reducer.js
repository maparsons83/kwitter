import { ADD_FEED_ITEM, REGISTER_USER, LOGIN_USER } from './actions.js';

const initialState = {
    username: "",
    displayName: "",
    token: "",
    success: ""
}

export default function kwitterAppReducer (state = initialState, action) {
    switch(action.type) {
   
        case REGISTER_USER:
        console.log("action: ", action)
            return (Object.assign({}, state, {
                username: action.payload.username,
                displayName: action.payload.displayName
                })
            )
        case LOGIN_USER:
        console.log("action: ", action)
            return (Object.assign({}, state, {
                token: action.payload.token,
                success: action.payload.success
                })
            )
         //     case ADD_FEED_ITEM:
    //         return Object.assign({}, state, {
    //             messages: [...state.messages,
    //             {
    //                 id: state.messages.length ? state.messages[state.messages.length - 1].id + 1 : 1,
    //                 userId: 1,
    //                 text: action.text,
    //                 likes: []

    //             }
    //         ]
    //     })
        default: 
            return state;
    }
}