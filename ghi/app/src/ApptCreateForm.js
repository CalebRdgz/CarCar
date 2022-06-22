import React from 'react';

class ApptCreateForm extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            vin: '',
            customer_name: '',
            reason: '',
            date: '',
            time: '',
            active: '',
            technician: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleVINChange = this.handleVINChange.bind(this);
        }

        handleCustomerNameChange(event) {
            const value = event.target.value;
            this.setState({ customer_name: value });
        }

        handleReasonChange(event) {
            const value = event.target.value;
            this.setState({ reason: value });
        }

        handleDateChange(event) {
            const value = event.target.value;
            this.setState({ date: value });
        }

        handleTimeChange(event) {
            const value = event.target.value;
            this.setState({ time: value });
        }

        handleActiveChange(event) {
            const value = event.target.value;
            this.setState({ active: value }); 
        }

        handleTechnicianChange(event) {
            const value = event.target.value;
            this.setState({ technician: value }); 
            }

            
        handleVINChange(event) {
            const value = event.target.value;
            this.setState({ vin: value }); 
            }
        

        async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log('submit: ', data)

        const locationUrl = 'http://localhost:8080/api/service/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            const newAppt = await response.json();
            this.setState({
                vin: '',
                customer_name: '',
                reason: '',
                date: '',
                time: '',
                active: '',
                technician: '',
            });
        }
        }


        // async componentDidMount() {
        // const url = 'http://localhost:8100/api/locations';
        // const response = await fetch(url);
        // if (response.ok) {
        //     const data = await response.json();
        //     this.setState({locations: data.locations});
            // const selectTag = document.querySelector('#closet_location')
            // for (let loc of data.locations){
            //     const option = document.createElement('option')
            //     option.value = loc.closet_name
            //     option.innerHTML = loc.closet_name
            //     selectTag.appendChild(option)
            // }
    

    
    
      render(){
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a New Appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-conference-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleVINChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">VIN</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleCustomerNameChange} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                    <label htmlFor="customer_name">Customer Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                    <label htmlFor="reason">Reason</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleDateChange} placeholder="Date" required type="text" name="date" id="date" className="form-control" />
                    <label htmlFor="date">Date</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleTimeChange} placeholder="Time" required type="text" name="time" id="time" className="form-control" />
                    <label htmlFor="time">Time</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleActiveChange} required name="technician" id="technician" className="form-select">
                      <option value="" id="closet_technician" >Choose Technician</option>
                      {/* {this.state.technician_name.map(tech=> {
                        return (
                          <option key={tech.id} value={tech.id}>{tech.technician_name}</option>
                        )
                      })} */}
                    </select>
                  </div>
                  <button className="btn btn-primary">Schedule</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    };

    
export default ApptCreateForm;