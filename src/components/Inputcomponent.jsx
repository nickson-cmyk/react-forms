import React, { useState } from "react";
import Inputcomponent2 from "./Inputcomponent2";

var num1 = 0;
var num2 = 0;

function InputComponent(props) {
  // const[var1, setValue]=useState({
  //     a:0, b:1
  // })
  let [var1, setValue] = useState(0);
  // let {a}=props
  // let { a, b } = var1;

  // const pro=()=>{

  // setValue(var1+1)
  // setValue(var1.b+1)
  // setValue({
  //     a: +a + 1,
  //     b: +b + 1
  // })
  // // // a++
  // props.updateAvalue()
  // console.log(var1)
  // var input1 =parseInt(document.getElementById("input1").value)
  //   var input2 =parseInt(document.getElementById("input2").value)
  // var  var1=input1+input2
  // setValue(var1=input1+input2)
  // var num1,num2;
  // let[num1]=useState(0)
  // let[num2]=useState(0)
  var num1 = 0;
var num2 = 0;

  const add = () => {
    console.log("num1 ", num1);
    console.log("num2 ", num2);
    setValue(num1 + num2);
  };
  const input1Change = (e) => {
    num1 = parseInt(e.target.value || 0);
    // console.log(num1)
    add();
  };

  const input2Change = (e) => {
    num2 = parseInt(e.target.value || 0);
    // console.log(num1)j
    add();
  };

  // console.log(var1)
  // let {output}=props
  // }
  return (
    <div>
      <input  onChange={(e) => input1Change(e)}></input>
      <input  onChange={(e) => input2Change(e)}></input>
      <Inputcomponent2 value={num2}></Inputcomponent2>
      

      {/* <h1> b clicked {b}</h1>  */}
      {/*<p>a={a} times</p> */}
      {/* <button onClick={add}>click me</button> */}
      <p> sum={var1}</p>
      {/*<Inputcomponent2 sum={var1}></Inputcomponent2> */}
    </div>
  );
}
export default InputComponent;
