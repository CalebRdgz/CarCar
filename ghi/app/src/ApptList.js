import React from "react";
import { renderMatches } from "react-router-dom";


class ApptList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: '',
      appts: []
    }

  this.handleStatus = this.handleStatus.bind(this)
  this.updateAppointment = this.updateAppointment.bind(this)
  }

  updateAppointment(index, newStatus){
    const data = {...this.state};
    data.appts[index] = newStatus;
    this.setState(data);
  }

  async handleStatus(event, status) {
    console.log(event)
    const value = event.target.value;
    const locationUrl = `http://localhost:8080/api/service/${value}/`;
    const fetchConfig = {
            method: "put",
            body: JSON.stringify({status}),
            headers: {
            'Content-Type': 'application/json',
            },
          }
    const response = await fetch(locationUrl, fetchConfig);
    console.log(response)
    if (response.ok) {
      const statusChange = await response.json();
      console.log(statusChange, event.target.id)
      this.updateAppointment(event.target.id, statusChange)
      // const data = {...this.state};
      // data.appts[event.target.id] = statusChange
      // this.setState(data);
    }
  }


  async componentDidMount() {
    const url = 'http://localhost:8080/api/service/';
    const response = await fetch(url);
  
    if (response.ok) {
        const data = await response.json();
        this.setState ({appts: data});
        console.log(this.state)

    }}
  

  render() {
    // if (!this.state.appts){
    //   return null
    // }
    return (
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
          {this.state.appts?.map((appt, index) => {
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
                  <button onClick = {e => this.handleStatus(e, "FINISHED")} value={appt.id} id={index} type="button" className="btn btn-success">Finished</button>
                  <button onClick = {e => this.handleStatus(e, "CANCELLED")} value={appt.id} id={index} type="button" className="btn btn-danger">Cancel</button>
                </td>
              </tr>
            );
          }})}
        </tbody>
      </table>
    );
  }
}
  
export default ApptList;