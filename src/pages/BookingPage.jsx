import React, { useState } from "react";
import flylogo from "../img/flylogo.png";
import airplane from "../img/airplane.png"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
  const handleClickShowSurname = () =>
    setShowSurname((showSurname) => !showSurname);
  const handleClickShowEmail = () => setShowEmail((showEmail) => !showEmail);
  const handleClickShowAddress = () =>
    setShowAddress((showAddress) => !showAddress);

  const rightSection = true;

  return (
    <div className="bookingDiv">
      <section className="left">
        <h1 className="table-title">First class travel at economy prices</h1>
        <div className="bg-white rounded formDiv">
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
              //register(values);
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
                  <div>
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
                  <Button className="bg-primary text-white w-100">
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
          <div className="rightBox rounded">
            <p>
              <img src={flylogo} alt="flyLogo" />
            </p>
            <strong>Hallo</strong>
            <p>Hallo</p>
            <strong>"durationTime"</strong>
            <strong style={{ display: "inline-block" }}>
              "d_time and a_time"
            </strong>
            <p>Hallo</p>
          </div>
          <div className="rightPrices">
            <p>
              <strong>Subtotal </strong>
              <strong>$Hallo</strong>
            </p>
            <p>
              <strong>Taxes and Fees </strong>
              <strong>Hallo</strong>
            </p>
            <p>
              <strong>Total </strong>
              <strong>$Hallo</strong>
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
