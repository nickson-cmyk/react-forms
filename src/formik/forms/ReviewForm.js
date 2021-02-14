import React from 'react';

import Input from"../../components/ReduxInput"
import Label from"../../components/ReduxLabel"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';



export default function Review(props) {
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

  return (
    <Formik
    initialValues={{ 
      // firstName: "",
      // lastName: "",
        }}
    onSubmit={(values) => {
      // if(values.firstName.length > 0 && values.lastName.length > 0 && values.address1.length > 0) {
      // console.log(values)
        props.handleNext();
      // } else {
      //   alert("Fill all the fields")
      // }
    }}
  >
    {(props) => (
      <form onSubmit={props.handleSubmit}>
    <React.Fragment>
       <Label value="Door No:"></Label>
           <Input type="number"></Input>
           <Label  value="Full Address"></Label>
           <textarea id="textarea" row="50" column ="25"></textarea>

           <div className={classes.buttons}>
                    <Button onClick={oldProps.handleBack} className={classes.button}>
                      Back
                    </Button> <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleSubmit}
                    className={classes.button}
                    disabled={props.isSubmitting}
                  >
                    submit 
                  </Button>
                </div> 

    </React.Fragment>
    </form>
      )}
      </Formik>
  );
}
