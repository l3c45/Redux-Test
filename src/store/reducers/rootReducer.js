import { combineReducers } from "redux";
import { todosReducer } from "./todoReducer";


export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todosReducer,
       
    }
)