import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = (props) => {
  const [field] = useField(props);
  if (props.name === "password" || props.name === "confirmPassword") {
    return (
      <div className="form__group field">
        <input
          className="form__field"
          placeholder={props.name}
          {...field}
          {...props}
          autoComplete="off"
        />
        <a href="##" className="password-control" onClick={props.onHide}></a>
        <label htmlFor={props.name} className="form__label">
          {props.label}
        </label>
        <ErrorMessage
          component="div"
          name={field.name}
          className="invalid"
        ></ErrorMessage>
      </div>
    );
  }
  return (
    <div className="form__group field">
      <input
        className="form__field"
        placeholder={props.name}
        {...field}
        {...props}
        autoComplete="off"
      />
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalid"
      ></ErrorMessage>
    </div>
  );
};

export default Input;
