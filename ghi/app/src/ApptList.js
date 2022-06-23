import React from "react";
import { renderMatches } from "react-router-dom";


class ApptList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: ""
    }

  this.handleFinish = this.handleFinish.bind(this)
  this.handleCancel = this.handleCancel.bind(this)
  }

  
  async handleFinish(event) {
    const value = event.target.value;
    const locationUrl = `http://localhost:8080/api/service/${value}/`;
    const fetchConfig = {
            method: "put",
            body: JSON.stringify({status: "FINISHED"}),
            headers: {
            'Content-Type': 'application/json',
            },
          }
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      // const statusChange = await response.json();
      this.setState({
          status: '',
      });
  }}

  async handleCancel(event) {
    this.setState(({status: "CANCELLED"}))
    const data = {...this.state};
    }

  async componentDidMount() {
    const url = 'http://localhost:8080/api/service/';
    const response = await fetch(url);
  
    if (response.ok) {
        const data = await response.json();
        this.setState ({appts: data});
    }}
  

  render() {
    if (this.props.appts === undefined){
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
            <th>Customer States</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.appts.map(appt => {
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
    );
  }
}
  
export default ApptList;