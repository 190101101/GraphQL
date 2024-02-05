import React from "react";

const Loading = ({ data: { loading, error } }) => {
  return (
    <>
      {loading && <p className="text-center text-warning">loading...</p>}
      {error && <p className="text-center text-danger">error</p>}
    </>
  );
};

export default Loading;
