import React from "react";

const Loading = ({ data: { loading, error } }) => {
  return (
    <>
      {loading && (
        <div className="alert alert-info text-center">
        <span className="badge badge-info">loading...</span>
      </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">
          <span className="badge badge-danger">error</span>
        </div>
      )}
    </>
  );
};

export default Loading;
