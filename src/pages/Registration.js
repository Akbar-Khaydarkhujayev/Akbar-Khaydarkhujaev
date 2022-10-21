import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import * as Yup from "yup";
import { SelectCity, SelectGender } from "../components/Select";
import Back from "../components/Back";

const Registration = () => {
  const [withEmail, setChoise] = useState(true);

  const validation = Yup.object({
    firstName: Yup.string()
      .max(20, "Must be 20 charachters or less")
      .required("First Name is Required"),
    lastName: Yup.string()
      .max(25, "Must be 25 charachters or less")
      .required("Last Name is Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("E-mail is Required"),
    phoneNumber: Yup.string()
      .max(14, "Wrong phone Number (ex:+998 901234567)")
      .matches(/(\+998 )[0-9]{9}/, "Wrong phone Number (Ex:+998 901234567)")
      .required("Phone Number is Requierd"),
    city: Yup.string().required("Choose City"),
    gender: Yup.string().required("Choose your Gender"),
    username: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase and One Number"
      )
      .max(20, "Must be no more than 20 charachters")
      .required("Username is Required"),
    password: Yup.string()
      .max(16, "Must be no more than 16 charachters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .min(8, "Must be at least 8 characters")
      .max(16, "Must be no more than 16 charachters")
      .oneOf([Yup.ref("password"), null], "Passwords don't match")
      .required("Password Confirmation is Required"),
  });

  const handleHide = (target) => {
    if (target.target.previousSibling.getAttribute("type") === "password") {
      target.target.classList.add("view");
      target.target.previousSibling.setAttribute("type", "text");
    } else {
      target.target.classList.remove("view");
      target.target.previousSibling.setAttribute("type", "password");
    }
  };

  return (
    <div className="block">
      <Back />
      <h1 className="block-welcome">Welcome</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "+998 ",
          city: "",
          gender: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Input name="firstName" label="First Name" type="text" />
              <Input name="lastName" label="Last Name" type="text" />
              {withEmail ? (
                <>
                  <Input name="email" label="E-mail" type="email" />
                  <a
                    className="color-green mt-2"
                    href="##"
                    onClick={() => setChoise(!withEmail)}
                  >
                    Click to Register with Phone Number
                  </a>
                </>
              ) : (
                <>
                  <Input
                    name="phoneNumber"
                    label="Phone Number"
                    type="phoneNumber"
                  />
                  <a
                    className="color-green mt-2"
                    href="##"
                    onClick={() => setChoise(!withEmail)}
                  >
                    Click to Register with E-mail
                  </a>
                </>
              )}

              <SelectCity
                name="city"
                label="Select City"
                type="text"
              ></SelectCity>
              <SelectGender
                name="gender"
                label="Select Gender"
                type="text"
              ></SelectGender>
              <Input name="username" label="Username" type="text" />
              <Input
                name="password"
                label="Password"
                type="password"
                onHide={(target) => handleHide(target)}
              />
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                onHide={(target) => handleHide(target)}
              />
              <button className="btn-green m-40" type="submit">
                Register
              </button>
            </Form>
          </div>
        )}
      </Formik>

      <div className="link-register">
        <p>
          Already have an account?
          <span>
            {" "}
            <Link to="/Login" className="color-green">
              {" "}
              Login{" "}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
