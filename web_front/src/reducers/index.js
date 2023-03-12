import { combineReducers } from "redux";

import reservation from "./reservation";
import etat from "./checkEmail";
import allReservations from "./allReservations"
export default combineReducers({
    reservation,
    etat,
    allReservations
})