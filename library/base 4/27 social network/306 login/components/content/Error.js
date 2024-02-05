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
{
  /* <Error errors={['error 1','error 2','error 3']}/> */
}
export default Error;
