const reservation = (state = null,action) => {
    switch (action.type) {
        case "SET_RESERVATION":
            console.log(action.payload)
            return action.payload
        case "RESET":
            state = null
        default:
            return state
    }
}

export default reservation