import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import Input from '@material-ui/core/Input';
import { formActions } from "../components/formaction/formaction"

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from "react-redux"
import Checkout from "./Checkout"
import Axios from "axios"
import { useSelector } from "react-redux";
import axios from 'axios';
// import {initialState} from "../reducer/reducer"



// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function AddressForm(props) {

    let{initialState}=props
    const { user,firstName } = useSelector(state => state)
    console.log(firstName)
    //   {
    //     list.map(({ username }, i) => <li key={`user_${i}`}>{username}</li>)
    // }

    // let initialValues={firstName:"",lastName:"",address1:"",address2:"",city:"",zip:"",country:""}
    // let [name,setNmae]=useState("")
    // console.log(name)
    //   let values={}
    //   console.log(values.firstName)
    //   function check(values){
    //   console.log(values.firstName)
    // }


    let [addressFormData, setaddressFormData] = useState({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      country: ""
    })
    let [error, setError] = useState({
      firstName: false,
      lastName: false,
      address1: false,
      address2: false,
      city: false,
      zip: false,
      country: false
    })

    // const dispatch = useDispatch()
    const addform = async  () => {
       
      let res = await axios.post("http://localhost:3010/user",addressFormData)
      console.log(("ressssssssssssssssssssssssssssssss ====", res.data))
  // axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
      const { firstName, lastName, address1, address2, zip, city, country } = addressFormData;
     
      if (firstName.length == 0 && lastName.length == 0 && address1.length == 0 && address2.length == 0 && zip.length == 0 && city.length == 0 && country.length == 0) {
        setError({ ...error, firstName: true, lastName: true, address1: true, address2: true, zip: true, city: true, country: true })

      } else {
        formActions.addUser(addressFormData)

      }
    }

  



    function onFirstNameChange(e) {
      setaddressFormData({ ...addressFormData, firstName: e.target.value })
      if (!e.target.value) {
        setError({ ...error, firstName: true })

      } else {
        setError({ ...error, firstName: false })
      }
    }
    function onLastnameChange(e) {
      setaddressFormData({ ...addressFormData, lastName: e.target.value })
      if (!e.target.value) {
        setError({ ...error, lastName: true })

      } else {
        setError({ ...error, lastName: false })

      }
    }
    function onAddrsOneChange(e) {
      setaddressFormData({ ...addressFormData, address1: e.target.value })
      if (!e.target.value) {
        setError({ ...error, address1: true })

      } else {
        setError({ ...error, address1: false })

      }
    }
    function onAddrsTwoChange(e) {
      setaddressFormData({ ...addressFormData, address2: e.target.value })
      if (!e.target.value) {
        setError({ ...error, address2: true })

      } else {
        setError({ ...error, address2: false })

      }
    }
    function onCityChange(e) {
      setaddressFormData({ ...addressFormData, city: e.target.value })
      if (!e.target.value) {
        setError({ ...error, city: true })

      } else {
        setError({ ...error, city: false })

      }
    }
    function onZipChange(e) {
      setaddressFormData({ ...addressFormData, zip: e.target.value })
      if (!e.target.value) {
        setError({ ...error, zip: true })

      } else {
        setError({ ...error, zip: false })

      }
    }
    function onCountryChange(e) {
      setaddressFormData({ ...addressFormData, country: e.target.value })
      if (!e.target.value == 0) {
        setError({ ...error, country: true })

      }
      else {
        setError({ ...error, country: false })

      }
    }
    // action="http://127.0.0.1:3010/post" method="POST"
    // console.log(addressFormData)
    return (
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
                helperText={error.firstName && "This field can't be empty"}
                value={addressFormData.firstName}
                label="First name"
                fullWidth
                autoComplete="given-name"
                // isRequired="true"
                error={error.firstName}
                onChange={e => onFirstNameChange(e)}
              >{firstName}</TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                // name="lastName"
                value={addressFormData.lastName}
                onChange={e => onLastnameChange(e)}
                error={error.lastName}

                helperText={error.lastName && "This field can't be empty"}
                value={addressFormData.lastName}
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
                error={error.address1}
                onChange={e => onAddrsOneChange(e)}
                helperText={error.address1 && "This field can't be empty"}
                value={addressFormData.address1}
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <button onClick={addform}>submit</button>
          </Grid>
        {/* </form> */}


      </React.Fragment>
    );
  }

