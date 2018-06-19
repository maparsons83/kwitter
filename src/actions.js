export function markLiked(id) {
    return ({
        type: MARK_LIKED,
        id
    })
}

export function logout(id) {
    return ({
        type: LOGOUT,
        id
    })
}