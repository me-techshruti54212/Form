import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid, Typography, Card, CardContent } from "@material-ui/core";


type FormValues={
    name:string,
    phone:string,
    email:string
}
const FormInitialValues=()=>{
   const storedvalues=localStorage.getItem("form");
   if(!storedvalues) return {
    name:"",
    phone:"",
    email:"",
   } 
   return JSON.parse(storedvalues)
}
const FormPage = () => {
  const navigate=useNavigate()
    const [values,setValues]=useState<FormValues>(FormInitialValues)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    localStorage.setItem("form",JSON.stringify(values));
    navigate('/home', { replace: true });

  }
  return (
    <>

      <Typography
        gutterBottom
        variant="h5"
        style={{ marginTop: "10px", color: "white" }}
      >
        Enter your details here
      </Typography>
      <Card
        style={{
          maxWidth: 450,
          boxShadow: "0 0 8px",
          padding: 20,
          margin: "auto",
          marginTop: "15px",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ marginBottom: "20px" }}
          >
            Form
          </Typography>

          <form onSubmit={handleOnSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="Enter your name here"
                  variant="outlined"
                  value={values.name}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  placeholder="Enter your phone no. here"
                  value={values.phone}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  placeholder="Enter your email here"
                  value={values.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item style={{ margin: "auto" }}>
                <Button
                  variant="contained"
                  style={{ outline: "none" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>

        </CardContent>
      </Card>
    </>
  );
};

export default FormPage;
