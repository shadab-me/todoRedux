import { connect } from "react-redux";
import { createStore } from "redux";

function reducer(state = {counter: 0},  action){
    const {counter} = state;
    switch(action.type){
     case "Increament":
     return state = {counter: counter+1}
     case "Decreament":
        return state = {counter: counter-1}
        case "Reset":
    return state = 0
 }

 return state;
} 


const store = createStore(reducer)

export default store