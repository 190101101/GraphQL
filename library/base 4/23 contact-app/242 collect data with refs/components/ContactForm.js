import React, { useState, useRef } from "react";

const Contact = () => {
  const [formStatus, setFormstatus] = useState(true);

  const inputRefs = {
    name: useRef(null),
    surname: useRef(null),
    email: useRef(null),
    phone: useRef(null),
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // get inputs key value data
    const formData = Object.keys(inputRefs).reduce((values, key) => {
      values[key] = inputRefs[key].current.value;
      return values;
    }, {});

    console.log(formStatus);

    // reset form if status true
    formStatus &&
      Object.keys(inputRefs).map((input) => {
        inputRefs[input].current.value = "";
      });

    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="col-auto">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <input
            ref={inputRefs.name}
            type="text"
            name="name"
            className="form-control"
            placeholder="name"
          />
        </div>
      </div>
      <div className="col-auto">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <input
            ref={inputRefs.surname}
            type="text"
            name="surname"
            className="form-control"
            placeholder="surname"
          />
        </div>
      </div>

      <div className="col-auto">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <input
            ref={inputRefs.email}
            type="text"
            name="email"
            className="form-control"
            placeholder="email"
          />
        </div>
      </div>

      <div className="col-auto">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <input
            ref={inputRefs.phone}
            type="text"
            name="phone"
            className="form-control"
            placeholder="phone"
          />
        </div>
      </div>

      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-block btn-outline-success mb-2"
        >
          register
        </button>
      </div>
    </form>
  );
};

export default Contact;
