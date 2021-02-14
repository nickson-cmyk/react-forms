import React from "react"
function Input(props){
    return(
        <div>
            <input type={props.type}  name={props.name} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}
export default Input;