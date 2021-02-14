import React,{Component} from "react"
// import Inputcomponent3 from "./Inputcomponent3"
class Counter extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <p>the count{this.props.count} </p>
        )
    }
}
export default Counter