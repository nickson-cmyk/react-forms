import React,{useState} from "react"
import { render } from "react-dom";
var t;
function Check(props){
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' },{ text1: 'Learn Hooks' }]);
    const check=()=>{
        console.log(todos)
        setTodos(1+2)}
//    let {check}=props
    
    return(
        <div>
            <button onClick={check}></button>
            <p>{todos}</p>
        </div>
    )
}
export default Check