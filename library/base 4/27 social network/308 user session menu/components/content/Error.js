import React from "react";

const Error = ({ errors }) => {
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger mt-2">
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

export default Error;
