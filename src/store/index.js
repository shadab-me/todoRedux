import { createStore } from "react-redux";

function reducer(state = 0,  action){
    switch(action.type){
     case "Increament":
     return state = state+1
     case "Decreament":
     return state = state-1
      case "Reset":
    return state = 0
 }

 return state;
} 


const store = createStore(reducer)
