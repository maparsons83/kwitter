import { REGISTER_USER } from "./actions.js";
const initialState = {
    username: "",
    displayName: ""
}

export default function kwitterAppReducer (state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER:
        console.log(action)
            return (Object.assign({}, state, {
                username: action.payload.username,
                displayName: action.payload.displayName
                })
            )
        default: 
            return state;
    }
}