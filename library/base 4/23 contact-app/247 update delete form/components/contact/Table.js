const Table = ({ props }) => {
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
        {Object.keys(props.contactData).map((id) => (
          <tr className="text-white" key={id}>
            <td>{props.contactData[id].name}</td>
            <td>{props.contactData[id].surname}</td>
            <td>{props.contactData[id].email}</td>
            <td>{props.contactData[id].phone}</td>
            <td
              onClick={() => {
                props.setFormType(false);
                props.setUpdateData(props.contactData[id]);
              }}
              className="text-success"
            >
              <i className="fa fa-pencil"></i>
            </td>
            <td
              onClick={() => {
                props.deleteDataHandler(id);
              }}
              className="text-danger"
            >
              <i className="fa fa-trash-o"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
