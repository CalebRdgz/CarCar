import React from "react";
import { renderMatches } from "react-router-dom";


class ApptList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: '',
      appts: [],
      soldVins: []
    }

  this.handleStatus = this.handleStatus.bind(this)
  this.updateAppointment = this.updateAppointment.bind(this)
  this.getApptsandInventory = this.getApptsandInventory.bind(this)
  }

  updateAppointment(index, newStatus){
    const data = {...this.state};
    data.appts[index] = newStatus;
    this.setState(data);
  }

  async handleStatus(event, status) {
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
    if (response.ok) {
      const statusChange = await response.json();
      this.updateAppointment(event.target.id, statusChange)
    }
  }

  async getApptsandInventory() {
    const apptUrl = 'http://localhost:8080/api/service/'
    const inventoryUrl = 'http://localhost:8080/api/service/sold/'

      const apptResponse = await fetch(apptUrl)
      const inventoryResponse = await fetch(inventoryUrl)
      if (apptResponse.ok) {
        const data = await apptResponse.json();
        this.setState ({appts: data});
      }
      if(inventoryResponse.ok) {
        const vinData = await inventoryResponse.json()
        const list = []
        for (let vin of vinData) {
          list.push(vin['vin'])
        }
        this.setState({
          soldVins: list,
        })
      }
    } 



  async componentDidMount() {
      this.getApptsandInventory()
  }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP</th>
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
                <td> { this.state.soldVins.includes(appt.vin) ? "YES":"NO"} </td>
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