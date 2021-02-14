import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import {formActions} from "../components/formaction/formaction"
import {useDispatch} from "react-redux"



export default function PaymentForm() {
  let [payment,setPayment]=useState({
    cardName:"",
    cardNumber:"",
    expDate:"",
    cvv:"",



  })
  let [error,setError]=useState({
    cardName:false,
    cardNumber:false,
    expDate:false,
    cvv:false,



  })
  const dispatch= useDispatch() 

const addform =()=>{
//  if(!payment.cardName ){
//   setError({...error,cardName:true})
// dispatch(formActions.payment(payment))
if(payment.cardName.length==0 && payment.cardNumber.length==0 && payment.expDate.length==0 && payment.cvv.length==0){
  setError({...error,cardName:true,cardNumber:true,expDate:true,cvv:true})
  // setError({...error,cardNumber:true})

}else{
  dispatch(formActions.payment(payment))

}
}
function change(e){
  setPayment({...payment,cardName:e.target.value})
  if(!e.target.value){
    setError({...error,cardName:true})
  }
  else{
    setError({...error,cardName:false})

  }
}
function change1(e){
  setPayment({...payment,cardNumber:e.target.value})
  if(!e.target.value){
    setError({...error,cardNumber:true})
  }
  else{
    setError({...error,cardNumber:false})

  }
}
function change2(e){
  setPayment({...payment,expDate:e.target.value})
  if(!e.target.value){
    setError({...error,expDate:true})
  }
  else{
    setError({...error,expDate:false})

  }
}
function change3(e){
  setPayment({...payment,cvv:e.target.value})
  if(!e.target.value){
    setError({...error,cvv:true})
  }
  else{
    setError({...error,cvv:false})

  }
}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="cardName" label="Name on card" 
           error={error.cardName}
            value={payment.cardName} 
              onChange={(e)=>change(e)}
              helperText={error.cardName && "this field is required"}
             fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            helperText={error.cardNumber && "this field is required"}
            autoComplete="cc-number"
            onChange={(e)=>change1(e)}
            error={error.cardNumber}
            value={payment.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" onChange={(e)=>change2(e)}
            error={error.expDate}
            helperText={error.expDate && "this field is required"}

            value={payment.expDate}
 fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={(e)=>change3(e)}
            error={error.cvv}
            helperText={error.cvv && "this field is required"}

            value={payment.cvv}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <button onClick={addform}>submit</button>
      </Grid>
    </React.Fragment>
  );
}