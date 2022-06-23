import React from "react";
import { renderMatches } from "react-router-dom";

class ApptList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
            vin: '',
            customer_name: '',
            reason: '',
            date: '',
            time: '',
            active: true,
            technician: [],
    }
  

  this.handleClick = this.handleClick.bind(this)
  this.handleActiveChange = this.handleActiveChange.bind(this)
  }

  handleActiveChange(event) {
    this.setState({active: false})
  }
  
  async handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({active: false}))
    const data = {...this.state};
    console.log('click event : ', data)
  
    // const appointmentUrl = 'http://localhost:8080/api/service/';
    // const fetchConfig = {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    // const response = await fetch(appointmentUrl, fetchConfig);
    }

    async componentDidMount() {
      const url = 'http://localhost:8080/api/service/';
      const response = await fetch(url);
      console.log(response)
    
      if (response.ok) {
          const data = await response.json();
          console.log(data)
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
            <th>Reason</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.appts.map(appt => {
            if (appt.active === true){
            return (
              <tr key={appt.id}>
                <td>{ appt.vin }</td>
                <td>{ appt.customer_name}</td>
                <td>{ appt.date }</td>
                <td>{ appt.time }</td>
                <td>{ appt.technician.technician_name }</td>
                <td>{ appt.reason }</td>
                <td>
                  <button onClick = {this.handleClick} type="button" className="btn btn-success">Finished</button>
                  <button onClick = {this.handleClick} type="button" className="btn btn-danger">Cancel</button>
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