const reservation = (state = null,action) => {

    switch (action.type) {
        case "CREATE_RESERVATION":
            return action.payload
        case "RESET":
            state = null
        default:
            return state
    }
}

export default reservation