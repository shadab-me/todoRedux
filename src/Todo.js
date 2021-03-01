import {connect} from 'react-redux';

import {Increament, Decreament, Reset} from "./action"

function Todo(props){
    const {counter, dispatch}  = props;
    return <>
    <h1>{counter}</h1>
    <button onClick = {() => dispatch(Increament())}>Increament</button>
    <button onClick = {() => dispatch(Decreament())}>Decreament</button>
    <button onClick = {() => dispatch(Reset())}>Reset</button>
</>
}


function getCounter(state){
    return {
       counter: state.counter
    }
}

export default connect(getCounter)(Todo);