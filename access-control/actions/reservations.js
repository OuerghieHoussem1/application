import * as api from "../api"

export const checkReservation = (code,navigation) => async (dispatch) => {
    try {
        const {data} = await api.checkReservation(code)
        await dispatch({type:"SET_RESERVATION",payload:data})
        navigation.navigate("RESULT")
    } catch (error) {
        await navigation.navigate("ERROR_PAGE")
    }
}
export const enterReservation = (code,navigation) => async (dispatch) => {
    try {
        const {data} = await api.enterReservation(code)
        await navigation.navigate("HOME")
        dispatch({type:"RESET",payload:data})
    } catch (error) {
        console.error(error)
    }
}
export const startEatingPauseCafé = (code,navigation) => async (dispatch) => {
    try {
        const {data} = await api.startEatingPauseCafé(code)
        await navigation.navigate("HOME")
        dispatch({type:"RESET",payload:data})
    } catch (error) {
        console.error(error)
    }
}
export const startEatingDejeuner = (code,navigation) => async (dispatch) => {
    try {
        const {data} = await api.startEatingDejeuner(code)
        await navigation.navigate("HOME")
        dispatch({type:"RESET",payload:data})
    } catch (error) {
        console.error(error)
    }
}