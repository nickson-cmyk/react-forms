import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './forms/AddressForm';
import PaymentForm from './forms/PaymentForm';
import Review from './forms/ReviewForm';
import {useDispatch, connect} from "react-redux";
import { Formik } from 'formik';
import { payment, final } from '../reducer/actions/paymentActions'
import { address } from '../reducer/actions/addressAction'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, handleNext, handleBack, props) {
  switch (step) {
    case 0:
      return <AddressForm handleNext={handleNext} {...props} />;
    case 1:
      return <PaymentForm handleNext={handleNext} handleBack={handleBack} {...props}  />;
    case 2:
      return <Review handleBack={handleBack} handleNext={handleNext} {...props}  />;
    default:
      throw new Error('Unknown step');
  }
}

 function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch= useDispatch()



  const handleNext = () => {
    setActiveStep(activeStep + 1);
 }
  

  const handleBack = () => {
    setActiveStep(activeStep - 1);
   
}



const handleFinal = () => {
  let data = {...props.address, ...props.payment}
  props.final(data);
  handleNext();
}
  

  return (
    //       <Formik
    //   initialValues={{ 
    //     firstName: "xcv"
    //       }}
    //   onSubmit={(values) => {
    //     console.log(values)
    //   }}
    // >
    //   {(props) => (
    //     <form onSubmit={props.handleSubmit}>
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, handleNext, handleBack, props)}
                {/* <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ?
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                    disabled={isSubmitting}
                  >
                     submit
                  </Button> : <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    next 
                  </Button>}
                </div> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
    // </form>
// )}
// </Formik>
  );
}


const mapStateToProps = state => {
  return {
      paymentdata: state.payment,
      addressdata: state.address
  }
}

const mapDispatchToProps = dispatch => {
  return {
    payment: (data) => dispatch(payment(data)),
    address: (data) => dispatch(address(data)),
    final: (data) => dispatch(final(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)