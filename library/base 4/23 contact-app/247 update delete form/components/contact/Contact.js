import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import Add from "./Add";
import Update from "./Update";
import Table from "./Table";

const Contact = () => {
  const [formType, setFormType] = useState(true);
  const [contactData, setContactData] = useState({});
  const [updateData, setUpdateData] = useState({});

  const saveDataHandler = (data) => {
    firebase
      .child("contacts")
      .push(data, (error) => error && console.log(error));
  };

  const updateDataHandler = (data) => {
    console.log(data);
  };

  const deleteDataHandler = (data) => {
    console.log(data);
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
          <div>
            {formType ? (
              <Add saveDataHandler={saveDataHandler} />
            ) : (
              <>
                <Update update={updateDataHandler} updateData={updateData} />
                <button
                  onClick={() => setFormType(true)}
                  type="submit"
                  className="btn btn-block btn-outline-success mb-2"
                >
                  go to add form
                </button>
              </>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <Table
            props={{
              contactData,
              setFormType,
              setUpdateData,
              deleteDataHandler,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
