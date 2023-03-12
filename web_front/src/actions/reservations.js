import * as api from "../api"

export const newReservation = (reservationData,history) => async (dispatch) => {
    try {
        const {data} = await api.newReservation(reservationData)
        await dispatch({type:"CREATE_RESERVATION",payload:data})
        history.push("reservation")
    } catch (error) {
        console.error(error.message)
    }
}
export const checkEmail = (email) => async (dispatch) => {
    try {
        const {data} = await api.checkEmail(email)
        dispatch({type:"GOOD_EMAIL",payload:data})
    } catch (error) {
        const data = error.response.data.error
        await dispatch({type:"BAD_EMAIL",payload:data})
    }
}

export const getReservations = () => async (dispatch) => {
    try {
        const {data} = await api.getReservations()
        console.log(data)
        dispatch({type:"ALL_RESERVATIONS",payload:data})
    } catch (error) {
        console.error("error")
    }
}

export const acceptReservation = (code) => async (dispatch) => {
    try {
        const {data} = await api.acceptReservation(code)
        dispatch({type:"UPDATE_RESERVATIONS",payload:data})
    } catch (error) {
        console.error("an error occured")
    }
}
export const refuseReservation = (code) => async (dispatch) => {
    try {
        const {data} = await api.refuseReservation(code)
        dispatch({type:"UPDATE_RESERVATIONS",payload:data})
    } catch (error) {
        console.error("an error occured")
    }
}