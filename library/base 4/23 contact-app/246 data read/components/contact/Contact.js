import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import firebase from "../../firebase";

const Contact = () => {
  const [contactData, setContactData] = useState({});

  const saveDataHandler = (data) => {
    firebase
      .child("contacts")
      .push(data, (error) => error && console.log(error));
  };

  useEffect(() => {
    firebase.child("contacts").on("value", (snapshot) => {
      snapshot?.val() && setContactData({ ...snapshot.val() });
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <Form saveData={saveDataHandler} />
        </div>
        <div className="col-md-6">
          <Table contacts={contactData} />
        </div>
      </div>
    </>
  );
};

export default Contact;
