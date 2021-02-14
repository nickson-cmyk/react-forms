import React,{useState} from "react"
var var1;
function Functionaltry (props){
    // let[value,setValue]=useState([{
    //     id:1,
    //     name:"nickson"
    // },{
    //     id:2,
    //     name:"nick"
    // }])
    // setValue()
    let[var1,setWhole]=useState({})
    const App= function App(props) {
        const uuu = {firstName: 'Ahmed', lastName: 'Bouchefra'};
        // return <Hello {...props} />;
        var q=[1,2,3]
        
        var whole={q,...uuu}
        // debugger
        setWhole(whole)

        // let {var1}=props
        // setWhole(whole)
        // let{whole}=props
        console.log(var1)
        console.log(whole)
        // return whole
      }
    return(
        <div>
            <button onClick={App}>click mee</button>
            {/* <p>{var1}</p> */}
        </div>
    )
}
export default Functionaltry ;