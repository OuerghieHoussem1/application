import axios from "axios";

const url = "http://jpo-reservation.alwaysdata.net/"

export const checkReservation = (code) => axios.post(url+"checkReservation",code)
export const enterReservation = (code) => axios.post(url+"enterReservation",code)
export const startEatingPauseCafé = (code) => axios.post(url+"startPetitDej",code)
export const startEatingDejeuner = (code) => axios.post(url+"startEating",code)