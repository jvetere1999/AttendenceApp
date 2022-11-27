function Table({ tableData }) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Checkin Time</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.fullname}</td>
                <td>{data.checkin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;