import {createStore} from "redux";
import {reducer} from "../Redux/Action";
export const store=createStore(reducer)