import React from "react";

const Table = ({ contacts }) => {
  console.log(contacts);

  return (
    <table className="table table-dark">
      <thead className="text-warning">
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>email</th>
          <th>phone</th>
          <th>
            <i className="fa fa-pencil"></i>
          </th>
          <th>
            <i className="fa fa-trash-o"></i>
          </th>
        </tr>
      </thead>
      <tbody className="text-info">
        {Object.keys(contacts).map((id) => (
          <tr className="text-white" key={id}>
            <td>{contacts[id].name}</td>
            <td>{contacts[id].surname}</td>
            <td>{contacts[id].email}</td>
            <td>{contacts[id].phone}</td>
            <td className="text-success">
              <i className="fa fa-pencil"></i>
            </td>
            <td className="text-danger">
              <i className="fa fa-trash-o"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
