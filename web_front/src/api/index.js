import axios from "axios"

const url = "https://jpo-reservation.alwaysdata.net/"

export const newReservation = (reservationData) => axios.post(url+"newReservation",reservationData)
export const checkEmail = (email) => axios.post(url+"checkEmail",email)
export const getReservations = () => axios.post(url+"getReservations")
export const acceptReservation = (code) => axios.post(url+"acceptReservation",code)
export const refuseReservation = (code) => axios.post(url+"refuseReservation",code)