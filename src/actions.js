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