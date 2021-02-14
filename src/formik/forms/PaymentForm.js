import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
// import {formActions} from "../components/formaction/formaction"
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";
import axios from 'axios';
import { Formik } from 'formik';
import Button from "@material-ui/core/Button"
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';



export default function PaymentForm(props) {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  let oldProps = props;
 console.log(props)

  return (
    <Formik
    initialValues={{ 
      cardName:  oldProps.paymentdata && oldProps.paymentdata.cardName,
      cardNumber: oldProps.paymentdata && oldProps.paymentdata.cardNumber
        }}
    onSubmit={(values) => {
      // if(values.cardName.length > 0 && values.cardNumber.length > 0 ) {
      // console.log(values)
      oldProps.payment(values);
      oldProps.handleNext();
      // } else {
      //   alert("Fill all the fields")
      // }
    }}
  >
    {(props) => (
      
      <form onSubmit={props.handleSubmit}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="cardName" label="Name on card" 
           error={props.errors.cardName}
            value={props.values.cardName} 
              onChange={props.handleChange}
              helperText={props.errors.cardName && "this field is required"}
             fullWidth autoComplete="cc-name">{props.values.cardName}</TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            helperText={props.errors.cardNumber && "this field is required"}
            autoComplete="cc-number"
            onChange={props.handleChange}
            error={props.errors.cardNumber}
            value={props.values.cardNumber}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
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
        </Grid> */}
        <div className={classes.buttons}>
                    <Button onClick={oldProps.handleBack} className={classes.button}>
                      Back
                    </Button> <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleSubmit}
                    className={classes.button}
                  >
                    next 
                  </Button>
                </div> 
      </Grid>
    </React.Fragment>
    </form>
      )}
      </Formik>
  );
}