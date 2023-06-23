

import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk"

import { reducer as usersignupreducer} from "./UserSide/Authentication/Reducer";
import {reducer as usersigninreducer} from "./UserSide/Authentication/UserLogin/Reducer"
import {reducer as contactreducer} from "./ContactSection/Reducer"
const rootreducer=combineReducers({usersignupreducer,usersigninreducer,contactreducer})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))