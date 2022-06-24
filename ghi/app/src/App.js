import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ApptCreateForm from './ApptCreateForm';
import ApptList from './ApptList';
import TechnicianCreateForm from './TechnicianCreateForm.js';
import ServiceHistory from './ServiceHistory';
import CustomerForm from "./CustomerForm";
import SalesRepForm from "./SalesRepForm";
import SaleRecordForm from "./SaleRecordForm";
import SalesList from "./SalesList";
import SalesByReps from "./SalesByReps";
import ListManufacturers from "./ManufacturersList";

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="service" >
            <Route path="" element={<ApptList appts = {props.appts} />} />
            <Route path="new" element={<ApptCreateForm />} />
            <Route path="technician" element={<TechnicianCreateForm />} />
            <Route path="history" element={<ServiceHistory appts = {props.appts}/>} />
          </Route>
          <Route path = "manufacturers"> 
            <Route path="" element={<ListManufacturers manufacturers={props.manufacturers} />} />
          </Route>

{/* 
          <Route path='customer'>
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path='employee'>
            <Route path="new" element={<SalesRepForm />} />
          </Route>
          <Route path='sales'>
            <Route path="" element={<SalesList salesList={salesList} />} />
            <Route path="by-rep" element={<SalesByReps salesReps={salesReps} />} />
            <Route path="create" element={<SaleRecordForm 
            customers={customers}
            cars={cars}
            salesReps={salesReps}
             />} />
          </Route>
          <Route path="manufacturers" element={<ListManufacturers manufacturers={manufacturers} />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sales_records: [],
      manufacturers: [],
      models: []
    };
  }

  async componentDidMount(){
  Promise.all([
    fetch('http://localhost:8090/api/sales-records/'),
    fetch('http://localhost:8090/api/manufacturers/'),
    fetch('http://localhost:8090/api/models/')
  ])
    .then(([sales_records, manufacturers, models]) => {
      return Promise.all([
        sales_records.json(),
        manufacturers.json(),
        models.json()
      ])
    })
    .then(
      ([sales_records, manufacturers, models]) => {
        this.setState(sales_records);
        this.setState(manufacturers);
        this.setState(models);
      })
}

render(){
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        
      </div>
    </BrowserRouter>
  )
}
}