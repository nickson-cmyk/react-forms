import React, { useState } from 'react';
import { Formik } from 'formik';
import Input from"../components/ReduxInput"
import Label from"../components/ReduxLabel"
import { connect } from 'react-redux'
// import { formSubmit } from '../Actions/formAction'

const Basic = ({data, submit}) => {
    console.log("data", data)
    const [page,setPage]=useState(1)

    const nextDisabled = (isSubmitting, values) => {
        if(isSubmitting) return true
        else {
            if(page == 1) {
                if(!values.name.length > 0 || !values.mail.length > 0 || !values.password.length > 0) return true
                else return false
            } else  {
                if (!values.doorno.length > 0 || !values.textarea.length > 0) return true
                else return false
            }
        }
    }
    return(
  <div>
    <Formik
      initialValues={{ name: data.name,mail:data.mail,doorno:data.doorno, password: data.password ,textarea: data.textarea,tele:data.tele}}
   
      onSubmit={(values) => {
        submit(values)
   
    // console.log(values)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
         

          {page==1 && <div>
            <h1>1.personal deatils</h1>

           <Label value="Name"></Label>
           <Input type="text"  name="name" value={values.name} onChange={handleChange}></Input>
           <Label value="Mail id"></Label>
           <Input type="email"  name="mail" value={values.mail} onChange={handleChange}></Input>
           <Label value="password"></Label>
           <Input type="password"  name="password" value={values.password} onChange={handleChange}></Input>
           </div>

          }
                    {page==2 && 

       
        <div>
            <h1>1.Address deatils</h1>

           <Label value="Door No:"></Label>
           <Input type="text"  name="doorno" value={values.doorno} onChange={handleChange}></Input>
           <Label value="Full Address"></Label>
           <Input type="text"  name="textarea" value={values.textarea} onChange={handleChange}></Input>
           </div>
          }
                    {page==3 && 
                    <div>
                        <h1>1.Phone deatils</h1>

<Label value="Phone No:"></Label>
<Input type="tel" name="tele" value={values.tele} pattern="[0-9]{10}"  onChange={handleChange}></Input>
</div>
      
        }
         { page > 1 && <button type="button"  disabled={isSubmitting} onClick={()=>setPage(page-1)} >
            Pre
          </button>}
         {page == 3 && <button type="submit" disabled={!values.tele.length > 0 || isSubmitting}>
            Submit
          </button>}
         { page < 3 && <button type="button" disabled={nextDisabled(isSubmitting, values)}  onClick={()=>setPage(page+1)} >
            Next
          </button>}
         
        </form>
      )}
    </Formik>
  </div>)
    };

const matchData = state => {
    return {
        data: state.formData
    }
}

const Action = dispatch => {
    return {
        // submit: values => dispatch(formSubmit(values))
    }
}

export default connect(matchData,Action)(Basic);
