export const sidebarOn = (payload) => {
    return (dispatch) => {
        return dispatch({type: "SIDEBAR_SHOW", payload: payload})
    }
}

