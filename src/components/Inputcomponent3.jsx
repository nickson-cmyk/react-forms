import React ,{Component}from "react"
import Counter from"./Counter"

// const Table =(props)=>{
//     // let {name}=props
//     return(
//         <form>
//             <label for="name">{props.name}</label>
//             <input id="name" type="text"/>
//             <label for="mail">mail</label>
//             <input id="mail" type="text"></input>
//         </form>
//     )
// }
// export default Table;
class Inputcomponent3 extends Component{
    constructor(props){
        super(props)
            this.state={
                counter:0
        }
        this.pro = this.pro.bind(this);
    }
    pro() {
        this.setState(state => ({
          counter: state.counter + 1
        }));
      }
render(){
    return ( <div>
        <button onClick={this.pro}>click me</button>
        <Counter count={this.state.counter}></Counter>
    </div>)
}
}
export default Inputcomponent3