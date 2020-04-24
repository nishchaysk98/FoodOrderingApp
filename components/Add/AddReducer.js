import {ADDITEM, REMOVEITEM} from "./AddConstants";
import {initialState} from "./AddInitialState";

export function Reducer(state = initialState, action){

    if(action.type == ADDITEM)
    {
      return {
        items : [...state.items, action.addItem],
        totalprice : (state.totalprice + action.price)
        }
    }
    else if(action.type == REMOVEITEM){
      return state;
    }
    else{
      return state
    }
}