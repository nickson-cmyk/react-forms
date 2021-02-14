import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from "react-redux";
import Axios from "axios"
import { useSelector } from "react-redux";
import axios from 'axios';
import { Formik } from 'formik';

export default function AddressForm(props) {

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
    return (
      <Formik
      initialValues={{ 
        firstName: props.addressdata.firstName,
        lastName: props.addressdata.lastName,
        address1: props.addressdata.address1
          }}
      onSubmit={(values) => {
        // if(values.firstName.length > 0 && values.lastName.length > 0 && values.address1.length > 0) {
        // console.log(values)
        props.address(values)
          props.handleNext();
        // } else {
        //   alert("Fill all the fields")
        // }
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
      </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                helperText={props.errors.firstName && "This field can't be empty"}
                value={props.values.firstName}
                label="First name"
                fullWidth
                autoComplete="given-name"
                // isRequired={true}
                error={props.errors.firstName}
                onChange={props.handleChange}
              >{props.values.firstName}</TextField>
            </Grid>
             <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                // name="lastName"
                value={props.values.lastName}
                onChange={props.handleChange}
                error={props.errors.lastName}

                helperText={props.errors.lastName && "This field can't be empty"}
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                // error={props.errors.address1}
                onChange={props.handleChange}
                // helperText={error.address1 && "This field can't be empty"}
                value={props.values.address1}
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                value={addressFormData.address2}
                onChange={e => onAddrsTwoChange(e)}
                helperText={error.address2 && "This field can't be empty"}
                error={error.address2}
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                value={addressFormData.city}
                onChange={e => onCityChange(e)}
                helperText={error.city && "This field can't be empty"}
                error={error.city}
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                value={addressFormData.zip}
                onChange={e => onZipChange(e)}
                helperText={error.zip && "This field can't be empty"}
                error={error.zip}
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                onChange={e => onCountryChange(e)}
                helperText={error.country && "This field can't be empty"}
                value={addressFormData.country}
                error={error.country}
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid> 
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
              />
            </Grid> */}
            <div className={classes.buttons}>
                
                   <Button
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

