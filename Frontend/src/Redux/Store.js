

import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk"

import { reducer as usersignupreducer} from "./UserSide/Authentication/Reducer";
import {reducer as usersigninreducer} from "./UserSide/Authentication/UserLogin/Reducer"
import {reducer as contactreducer} from "./ContactSection/Reducer"
import {reducer as useraddtaskreducer} from "./UserAddtask/Reducer"
import {reducer as usernotesreducer} from "./UserNotes/Reducer"
import {reducer as useredittaskreducer} from './EditUsertask/Reducer'
import {reducer as usersingletaskreducer} from "./UserSingletask/Reducer"
import {reducer as userdeletetaskreducer} from "./Deltetask/Reducer"
import {reducer as favouratereducer} from './favouratesection/Reducer'
import {reducer as favdatareducer} from "./favouratesection/Getfavourates/Reducer"
const rootreducer=combineReducers({usersignupreducer,usersigninreducer,contactreducer,useraddtaskreducer,
    usernotesreducer,useredittaskreducer,usersingletaskreducer,userdeletetaskreducer,favouratereducer,favdatareducer})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))