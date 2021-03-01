 import {createStore} from 'redux';
let id  = 0
function reducer(state = [], action) {
    switch(action.type){
        case 'addTask':
            return [...state, {
                id: id+1,
                des: action.playload.des,
                isCompleted: false
            }]
         case "removeTask": 
         let idRemove = action.playload.id
         return state.filter((task) => task.id !==idRemove)
    }
    id++
    return state
}


const store = createStore(reducer);

export default store;