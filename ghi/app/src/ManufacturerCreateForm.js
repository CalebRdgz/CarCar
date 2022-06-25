import React from "react";

class ManufacturerCreateForm extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            name: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);


    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
        }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        const url = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newManuf = await response.json();
            this.setState({
                name: '',
            });
        }
    }


    render(){
      return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create New Manufacturer</h1>
              <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                  <input onChange={this.handleNameChange} placeholder="Manufacturer Name" required type="text" name="manufacturer_name" id="manufacturer_name" className="form-control" />
                  <label htmlFor="Manufacturer Name">Manufacturer Name</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );
    }

}

export default ManufacturerCreateForm;