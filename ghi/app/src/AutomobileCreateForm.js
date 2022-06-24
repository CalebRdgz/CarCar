import React from 'react';

class AutomobileCreateForm extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            color: '',
            year: '',
            vin: '',
            model_id: '',
            model_list: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);

        }

        handleColorChange(event) {
            const value = event.target.value;
            this.setState({ color: value });
        }

        handleYearChange(event) {
            const value = event.target.value;
            this.setState({ year: value });
        }

        handleVINChange(event) {
            const value = event.target.value;
            this.setState({ vin: value });
        }

        handleModelChange(event) {
            const value = event.target.value;
            this.setState({ model_id: value });
        }
        

        async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.model_list
        const url = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const newAutomobile= await response.json();
            this.setState({
                color: '',
                year: '',
                vin: '',
                model_id: '',
                model_list: [],
            });
        }
        }


        async componentDidMount() {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            this.setState({model_list: data.models});
        }}
    

      render(){
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a New Automobile</h1>
                <form onSubmit={this.handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="name">Color</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleYearChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                    <label htmlFor="year">Year</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleVINChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="customer_name">VIN</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleModelChange} required name="manufacturer" id="manufacturer" className="form-select">
                      <option value="" id="manufacturer_id" >Choose Model</option>
                      {this.state.model_list.map(model=> {
                        return (
                          <option key={model.id} value={model.id}> { model.manufacturer.name} {model.name} </option>
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

    
export default AutomobileCreateForm;