export const sidebarOn = (payload) => {
    return (dispatch) => {
        console.log('data', payload);
        return dispatch({type: "SIDEBAR_SHOW", payload: payload})
    }
}

