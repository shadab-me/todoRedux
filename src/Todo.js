import {connect} from 'react-redux';
function Todo(props){
    const {counter, dispatch}  = props;

function Increament(){
      dispatch({
          type: 'Increament'
      })
}
    return <>
    <h1>{counter}</h1>
    <button onClick = {() => Increament()}>Increament</button>
</>
}


function getCounter(state){
    return {
       counter: state.counter
    }
}

export default connect(getCounter)(Todo);