import React from 'react';

class ApptCreateForm extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            name: '',
            picture_url: '',
            manufacturer_id: '',
            manufacturer_list: [],

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePictureURLChange = this.handlePictureURLChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);

        }

        handleNameChange(event) {
            const value = event.target.value;
            this.setState({ name: value });
        }

        handlePictureURLChange(event) {
            const value = event.target.value;
            this.setState({ picture_url: value });
        }

        handleManufacturerChange(event) {
            const value = event.target.value;
            this.setState({ manufacturer_id: value });
        }
        

        async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.manufacturer_list
        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newModel= await response.json();
            this.setState({
                name: '',
                picture_url: '',
                manufacturer: '',
                manufacturer_list: [],
            });
        }
        }


        async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturer_list: data.manufacturers});
            console.log(this.state)
        }}
    

      render(){
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a New Model</h1>
                <form onSubmit={this.handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} placeholder="Model Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Model Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePictureURLChange} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="customer_name">Picture URL</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                      <option value="" id="manufacturer_id" >Choose Manufacturer</option>
                      {this.state.manufacturer_list.map(manuf=> {
                        return (
                          <option key={manuf.id} value={manuf.id}>{manuf.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    };

    
export default ApptCreateForm;