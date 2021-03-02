const reducer = (state = {
    message: false,
}, action) => {
    switch (action.type) {
        case "ERROR_SET_MESSAGE": {
            return { ...state, message: action.payload }
        }
        default:
            return state;
    }
}
export default reducer;