

import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk"

import { reducer as usersignupreducer} from "./UserSide/Authentication/Reducer";
const rootreducer=combineReducers({usersignupreducer})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))