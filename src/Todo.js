import './style.css'
import {connect} from 'react-redux'

function Todo(props) {
    const {dispatch} = props

function addTask() {
    dispatch({
        type: "addTask",
        playload: {
            des: 'Hello'
        }
    })
} 

const {tasks}  = props
    return  <>
    <h1 className = "text-center">Todo List</h1>
    <ul>
      {tasks.map((task) => <li>{task.des}</li>)}
    </ul>
<button onClick = {() => addTask()}>Click To Add Task</button>
    </>
}


function getTasks(state) {
    return {
        tasks: state
    }
}

export default connect(getTasks)(Todo)