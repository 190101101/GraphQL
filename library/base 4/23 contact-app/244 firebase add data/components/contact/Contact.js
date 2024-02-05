import React from "react";
import Form from "./Form";
import Table from "./Table";
import firebase from "../../firebase";

const Contact = () => {

  console.log(firebase);
  
  const saveDataHandler = (data) => {
    firebase.child('contacts').push(
      data, 
      error => {
        if(error){
          console.log(error);
        }
      }
    )
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
