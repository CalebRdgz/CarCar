function ServiceHistory(props){
  if (props.hats === undefined){
    return null
  }
    return (
      <>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Customer States</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.appts.map(appt => {
              if (appt.status === "ACTIVE"){
              return (
                <tr key={appt.id}>
                  <td>{ appt.vin }</td>
                  <td>{ appt.customer_name}</td>
                  <td>{ appt.date }</td>
                  <td>{ appt.time }</td>
                  <td>{ appt.technician.technician_name }</td>
                  <td>{ appt.reason }</td>
                  <td>
                    <button onClick = {this.handleFinish} value={appt.id} type="button" className="btn btn-success">Finished</button>
                    <button onClick = {this.handleCancel} value={appt.id} type="button" className="btn btn-danger">Cancel</button>
                  </td>
                </tr>
              );
            }})}
          </tbody>
        </table>
      </>
    );
  }

  export default ServiceHistory;