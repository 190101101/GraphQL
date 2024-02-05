import React, { useRef } from "react";

const Contact = () => {
  const inputNameRef = useRef(null);
  const inputSurnameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPhoneRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: inputNameRef.current.value,
      surname: inputSurnameRef.current.value,
      email: inputEmailRef.current.value,
      phone: inputPhoneRef.current.value,
    };
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
            ref={inputNameRef}
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
            ref={inputSurnameRef}
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
            ref={inputEmailRef}
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
            ref={inputPhoneRef}
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
