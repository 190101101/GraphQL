import React from "react";

const Table = (props) => {

  return (
    <table className="table table-dark">
      <thead className="text-warning">
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody className="text-info">
        <tr>
          <td>cookie</td>
          <td>cookies</td>
          <td>cookie@gmail.com</td>
          <td>98749546</td>
        </tr>
      </tbody>
    </table>    
  );
};

export default Table;
