import React, { useRef } from "react";

const Add = (props) => {
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

    // reset form
    Object.keys(inputRefs).map((input) => {
      inputRefs[input].current.value = "";
    });

    props.saveDataHandler(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="">
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
            className="form-control bg-dark text-white"
            placeholder="name"
          />
        </div>
      </div>
      <div className="">
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
            className="form-control bg-dark text-white"
            placeholder="surname"
          />
        </div>
      </div>

      <div className="">
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
            className="form-control bg-dark text-white"
            placeholder="email"
          />
        </div>
      </div>

      <div className="">
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
            className="form-control bg-dark text-white"
            placeholder="phone"
          />
        </div>
      </div>

      <div className="">
        <button
          type="submit"
          className="btn btn-block btn-outline-success mb-2"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default Add;
