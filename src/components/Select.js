import React from "react";
import { ErrorMessage, useField } from "formik";

export const SelectCity = (props) => {
  const [field] = useField(props);
  const cities = [
    "Tashkent",
    "Samarkand",
    "Namangan",
    "Andijan",
    "Nukus",
    "Fergana",
    "Bukhara",
    "Qarshi",
    "Kokand",
    "Angren",
    "Termez",
    "Jizzakh",
    "Navoiy",
    "Urgench",
    "Shahrisabz",
  ];
  return (
    <div>
      <select className="select" {...field} {...props}>
        <option value="" disabled defaultValue>
          {props.label}
        </option>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalid"
      ></ErrorMessage>
    </div>
  );
};

export const SelectGender = (props) => {
  const [field] = useField(props);
  return (
    <div>
      <select className="select" {...field} {...props}>
        <option value="" disabled defaultValue>
          {props.label}
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalid"
      ></ErrorMessage>
    </div>
  );
};
