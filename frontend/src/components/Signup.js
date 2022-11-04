import { Button, TextField } from "@mui/material"
import { Formik } from "formik"
import React from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);


    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      console.log('success');
      Swal.fire({
        icon: "success",
        title: "Well Done👍",
        text: "You have done a wonderfull Job!!"
      });
      navigate('/login');

    } else {
      console.log('error occured');
    }
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="container">
      <h1>Signup Here</h1>
      <hr />

      <Formik
        initialValues={{
          name: "",
          age: "",
          password: "",
          mobile: "",
          email: "",
        }}
        onSubmit={userSubmit} validationSchema={SignupSchema}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              value={values.name}
              onChange={handleChange}
              id="name"
              sx={{ mt: 5 }}
              fullWidth
              label="Full Name"
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <TextField
              value={values.email}
              onChange={handleChange}
              id="email" sx={{ mt: 5 }}
              fullWidth
              label="Email" />
            <TextField
              value={values.mobile}
              onChange={handleChange}
              id="mobile"
              sx={{ mt: 3 }}
              fullWidth
              label="Mobile Number" />
            <TextField
              value={values.age}
              onChange={handleChange}
              id="age"
              sx={{ mt: 3 }}
              fullWidth
              label="Age" />
            <TextField
              value={values.password}
              onChange={handleChange}
              id="password"
              sx={{ mt: 3 }}
              fullWidth
              label="Password"
              type="password"
            />
            <Button type="submit" sx={{ mt: 5 }}>Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Signup;