const initialState = {
    status: false
}

function UserReducer(state=initialState, action) {
    switch (action.type) {
        case "SIDEBAR_SHOW":
            return {
                ...state,
                status: action.payload
            }
        case "SIDEBAR_CLOSE":
            return {
                status: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;