const allReservations = (state = [],action) => {

    switch (action.type) {
        case "ALL_RESERVATIONS":
            return action.payload
        case "UPDATE_RESERVATIONS":
            state = state.map((val,index)=>{
                if(val.code==action.payload.code)
                    return action.payload
            })
            return state
        default:
            return state
    }
}

export default allReservations