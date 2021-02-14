import React, { Component, useState } from"react"
import Inputcomponent2 from "./Inputcomponent2"
import Inputcomponent4 from"./Inputcomponent4"
function Addition (){
 
    let[a,setAValue]=useState(0)
    let[b,setBValue]=useState(0)

          let result = parseInt(a) + parseInt(b)
        return(
            <div>
            <p>sum={result}</p>
            <Inputcomponent4 inputValue={ value1 => setAValue(value1) } ></Inputcomponent4>
            <Inputcomponent4 inputValue={ value2 => setBValue(value2) } ></Inputcomponent4>
            </div>
        );
    //   }
}
export default Addition;