import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";


function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: values => {
      console.log('form:', values);
      if(!formik.errors.emailField || !formik.errors.pswField) window.alert("Login Successful");
    },
    validate: values =>{
      let errors ={};     
      if(!values.emailField) errors.emailField = "Field Required";
      if(!values.pswField) errors.pswField = "Field Required";
      return errors;
    },
    

  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailField" style={{color:'red'}}>{formik.errors.emailField}</div>:null}

        <div>Password</div>
        <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswField ? <div id="pswField" style={{color:'red'}}>{formik.errors.pswField}</div>:null}

        <br/>

        <button type="submit" id="submitBtn">Submit</button>
        <button type="button" id="clearBtn" onClick={formik.handleReset}>Clear</button>  

      </form>
    </div>
  );
}

export default App;
