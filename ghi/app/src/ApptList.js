function ApptList(props) {
    if (props.appt === undefined){
      return null
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {props.appts.map(appt => {
            return (
              <tr key={appt.id}>
                <td>{ appt.vin }</td>
                <td>{ appt.customer_name}</td>
                <td>{ appt.date }</td>
                <td>{ appt.time }</td>
                <td>{ appt.technician }</td>
                <td>{ appt.reason }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export default HatsList;