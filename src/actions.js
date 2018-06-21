export const REGISTER_USER = "REGISTER_USER";
export const TOGGLE_LIKED = "TOGGLE_LIKED";
export const LOGOUT = "LOGOUT";

export function registerUser(data) {
    return({
        type: REGISTER_USER,
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
