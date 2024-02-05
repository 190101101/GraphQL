import React from "react";

const FormError = ({ errors }) => {
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-info mt-2">
          <ul>
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const Loading = ({ data: { loading } }) => {
  return (
    <>
      {loading && (
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

const Error = ({ data: { error } }) => {
  return (
    <>
      {error && (
        <div className="alert alert-success my-2" role="status">
          <span className="sr-only">error</span>
        </div>
      )}
    </>
  );
};

export {Loading, Error, FormError};

export default Response;
