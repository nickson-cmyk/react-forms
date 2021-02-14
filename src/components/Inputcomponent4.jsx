import React,{Component} from"react"
import Inputcomponent3 from "./Inputcomponent3"
import Addition from "./Addition";

class Inputcomponent4 extends Component{
   


    render(props){

        let { inputValue } = this.props

        return(
            <div>
            <input   onChange={(e) => inputValue(e.target.value)}></input>
        
            </div>
        )
    }










}
export default Inputcomponent4;