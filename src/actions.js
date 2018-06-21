
export const REGISTER_USER = "REGISTER_USER";
export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const LOGOUT = "LOGOUT";
export const ADD_FEED_ITEM = 'ADD_FEED_ITEM';
export const LOGIN_USER = 'LOGIN_USER';

export function registerUser(data) {
    return({
        type: REGISTER_USER,
        payload: data
    })
}
export function loginUser(data) {
    return({
        type: LOGIN_USER,
        payload: data
    })
}
export function toggleLiked(id) {
    return ({
        type: TOGGLE_LIKED,
        id
    })
}

export function logout(id) {
    return ({
        type: LOGOUT,
        id
    })
}
// export function addFeedItem (id) {
//     return({
//         type: ADD_FEED_ITEM,
//         id
//     })
// }
