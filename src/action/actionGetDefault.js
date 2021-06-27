import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

const getDefaultData = () => {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_DEFAULT,
        data: "default data"
    })
}

export default getDefaultData