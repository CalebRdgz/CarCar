import React from "react";

class TechnicianCreateForm extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
          technician_name: '',
          employee_number: '',
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTechnicianNameChange = this.handleTechnicianNameChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);

    }

    handleTechnicianNameChange(event) {
        const value = event.target.value;
        this.setState({ technician_name: value });
        }

    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({ employee_number: value });
        }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log('submit: ', data)

        const locationUrl = 'http://localhost:8080/api/service/technician/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newTech = await response.json();
            console.log(newTech)
            this.setState({
                technician_name: '',
                employee_number: '',
            });
        }
    }


    render(){
      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create New Technician</h1>
              <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                  <input onChange={this.handleTechnicianNameChange} placeholder="Technician Name" required type="text" value ={this.state.technician_name} name="tech_name" id="tech_name" className="form-control" />
                  <label htmlFor="technician_name">Technician Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={this.handleEmployeeNumberChange} placeholder="Employee Number" required type="text" value ={this.state.employee_number} name="employee_number" id="employee_number" className="form-control" />
                  <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );
    }

}

export default TechnicianCreateForm;