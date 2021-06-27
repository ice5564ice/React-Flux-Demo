import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function getdata() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET,
        data: "data"
    })
}