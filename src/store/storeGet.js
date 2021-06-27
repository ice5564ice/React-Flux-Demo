import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../action/actionTypes";

const CHANGE = "change"
let _data = []

class getData extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback)
    }

    emitChange() {
        this.emit(CHANGE)
    }

    getData() {
        return _data
    }
}

const store = new getData()

dispatcher.register((action) => {
    switch (action.actionTypes) {
        case actionTypes.GET:
            _data = action.data
            store.emitChange()
            break;
        case actionTypes.GET_DEFAULT:
            _data = action.data
            store.emitChange()
            break;  
        default: console.log("nope")
    }
})

export default store