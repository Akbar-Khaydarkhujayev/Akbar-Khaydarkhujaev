import { Formik, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import * as Yup from "yup";
import { SelectCity, SelectGender } from "../components/Select";

const Registration = () => {
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
    city: Yup.string().required("Choose City"),
    gender: Yup.string().required("Choose your Gender"),
    username: Yup.string()
      .min(4, "Must be at least 4 characters")
      .max(20, "Must be no more than 20 charachters")
      .required("Username is Required"),
    password: Yup.string()
      .min(4, "Must be at least 4 characters")
      .max(10, "Must be no more than 10 charachters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords don't match")
      .required("Password is Required"),
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
      <h1 className="block-welcome">Welcome</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
              <Input name="email" label="E-mail" type="email" />
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
