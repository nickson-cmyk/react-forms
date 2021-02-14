import React from 'react';

import Input from"../components/ReduxInput"
import Label from"../components/ReduxLabel"



export default function Review() {
  // const classes = useStyles();

  return (
    <React.Fragment>
       <Label value="Door No:"></Label>
           <Input type="number"></Input>
           <Label  value="Full Address"></Label>
           <textarea id="textarea" row="50" column ="25"></textarea>

    </React.Fragment>
  );
}
