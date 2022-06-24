import React from 'react';

class ServiceHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: '',
      appts: [],
    };
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(event){
    event.preventDefault();
    console.log("working")
    const url = `http://localhost:8080/api/service/history/${this.state.vin}/`

    const request = await fetch(url);
    console.log(request)
    if (request.ok) {
      const data = await request.json();
      console.log(data)
      this.setState({appts: data})
    } else{
      console.log("bad request")
    }
  }

  handleVinChange(event) {
    let value = event.target.value;
    value = value.toUpperCase()
    this.setState({vin: value})
  }

render() { 
  return(
      <div>
        <div className="input-group mb-3">
          <form id="service-history-search" onSubmit={ this.handleSearch }>
          <input className="form-control" value={this.state.vin} onChange={this.handleVinChange}
          id={this.state.vin} name={this.state.vin} maxLength={17}
          minLength={17} required type="text" placeholder="VIN"/>
            <button className="btn btn-outline-secondary" type="submit">Search for VIN</button>
          </form>
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
            {this.state.appts?.map(appt => {
              return (
                <tr key={appt.id}>
                  <td>{ appt.vin }</td>
                  <td>{ appt.customer_name}</td>
                  <td>{ appt.date }</td>
                  <td>{ appt.time }</td>
                  <td>{ appt.technician.technician_name }</td>
                  <td>{ appt.reason }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ServiceHistory;