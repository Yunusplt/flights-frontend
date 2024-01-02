import React, { useState } from "react";
import flylogo from "../img/flylogo.png";
import airplane from "../img/airplane.png"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { duration, formatTime, stopDuration } from "./Main";

//! Yup Validation 
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter the name"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter the surname"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter the address"),
  address: Yup.string().min(10, "Address is too short"),
});

const BookingPage = () => {


  const [showName, setShowName] = useState(false);
  const [showSurname, setShowSurname] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const handleClickShowName = () => setShowName((showName) => !showName);
  const handleClickShowSurname = () =>setShowSurname((showSurname) => !showSurname);
  const handleClickShowEmail = () => setShowEmail((showEmail) => !showEmail);
  const handleClickShowAddress = () =>setShowAddress((showAddress) => !showAddress);

   const url = "http://127.0.0.1:8000/passenger/";

   const navigate = useNavigate()
   const location = useLocation()
   const selectedFly = location.state

   const booking =async(passengerInfo)=>{
    try {
      const {data} = await axios.post(url, passengerInfo)
      console.log(data);
      navigate("/success")
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
   }

  //todo  const reservation=async(passengerInfo)=>{
  //     const reservationInfo = passengerInfo + selectedFly
  //       console.log(passengerInfo);
  //       console.log(...selectedFly);
  //  }


  return (
    <div className="bookingDiv">
      <header>
        <h1 className="table-title">First class travel at economy prices</h1>
      </header>
      <section className="left">
        <div className="bg-white formDiv">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              address: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              booking(values);
              //todo reservation(values)
              actions.resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "25px",
                  }}
                >
                  <div className="formHeader">
                    <h3>Passenger Information</h3>
                    <h6>
                      The information below is needed to <br /> book your
                      vacation.
                    </h6>
                  </div>

                  <div className="input">
                    <TextField
                      id="name"
                      label="Name*"
                      type={showName ? "text" : "password"}
                      variant="outlined"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.name && errors.name}
                      error={touched.name && errors.name}
                      fullWidth
                    />
                    <span onClick={handleClickShowName}>
                      {showName ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>
                  <div className="input">
                    <TextField
                      id="surname"
                      label="Surname*"
                      type={showSurname ? "text" : "password"}
                      variant="outlined"
                      name="surname"
                      value={values.surname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.surname && errors.surname}
                      error={touched.surname && errors.surname}
                      fullWidth
                    />
                    <span onClick={handleClickShowSurname}>
                      {showSurname ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>
                  <div className="input">
                    <TextField
                      id="email"
                      label="Email*"
                      type={showEmail ? "email" : "password"}
                      variant="outlined"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.email && errors.email}
                      error={touched.email && errors.email}
                      fullWidth
                    />
                    <span onClick={handleClickShowEmail}>
                      {showEmail ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>
                  <div className="input">
                    <TextField
                      id="address"
                      label="Address"
                      type={showAddress ? "text" : "password"}
                      variant="outlined"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.address && errors.address}
                      error={touched.address && errors.address}
                      fullWidth
                    />
                    <span onClick={handleClickShowAddress}>
                      {showAddress ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </span>
                  </div>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <section className="right">
        <>
          <div className="selectedInfo">
            <p>
              <img src={flylogo} alt="flyLogo" />
            </p>
            <span>{selectedFly[0].airline}</span>
            <p>{selectedFly[0].flight_number}</p>
            <span>
              {duration(
                selectedFly[0].arrival_time,
                selectedFly[0].departure_time
              )}
            </span>
            <span style={{ display: "block" }}>
              {formatTime(selectedFly[0].departure_time)} -
              {formatTime(selectedFly[0].arrival_time)}
            </span>
            <p>
              {selectedFly[0].stop_Amount
                ? stopDuration(selectedFly[0].stop_duration) +
                  " in " +
                  selectedFly[0].stop_place
                : ""}
            </p>
          </div>
          <div className="selectedPrices">
            <p>
              <strong>Subtotal </strong>
              <strong>${selectedFly[0].price}</strong>
            </p>
            <p>
              <strong>Taxes and Fees </strong>
              <strong>
                ${selectedFly[0].total_price - selectedFly[0].price}
              </strong>
            </p>
            <p>
              <strong>Total </strong>
              <strong>${selectedFly[0].total_price}</strong>
            </p>
          </div>
        </>
      </section>
      <div className="airplane">
        <img src={airplane} alt="airplane" width="550px" height="500px" />
      </div>
    </div>
  );
};

export default BookingPage;
