import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from "./CustomerForm";
import SalesRepForm from "./SalesRepForm";
import SaleRecordForm from "./SaleRecordForm";
import SalesList from "./SalesList";
import SalesByReps from "./SalesByReps";
import ListManufacturers from "./ManufacturersList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />


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
          <Route path="manufacturers" element={<ListManufacturers manufacturers={manufacturers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
