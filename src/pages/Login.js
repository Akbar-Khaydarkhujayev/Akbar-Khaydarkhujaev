import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Input from "../components/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Back from "../components/Back";

const Login = () => {
  const validation = Yup.object({
    username: Yup.string()
      .min(4, "Must be at least 4 characters")
      .max(20, "Must be no more than 20 charachters")
      .required("Username is Required"),
    password: Yup.string()
      .min(4, "Must be at least 4 characters")
      .max(10, "Must be no more than 10 charachters")
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
      <Back />
      <h1 className="block-welcome">Welcome</h1>
      <div className="imgPlace">
        <img src={logo} alt="Logo" className="logo"></img>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validation}
      >
        {(formik) => (
          <Form>
            <Input name="username" label="Username" type="text" />
            <Input
              name="password"
              label="Password"
              type="password"
              onHide={(target) => handleHide(target)}
            />
            <button className="btn-green" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>

      <div className="link-register">
        <p>
          Don’t have an account?
          <span>
            {" "}
            <Link className="color-green" to="/Registration">
              {" "}
              Register{" "}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
