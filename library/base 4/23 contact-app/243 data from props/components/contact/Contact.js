import React from "react";
import Form from "./Form";
import Table from "./Table";

const Contact = () => {
  
  const saveDataHandler = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Form saveData={saveDataHandler} />
        </div>
        <div className="col-md-6">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Contact;
