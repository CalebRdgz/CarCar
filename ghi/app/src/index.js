import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadAppts(){
  const response = await fetch('http://localhost:8080/api/service/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App appts = {data} />
      </React.StrictMode>
    );
  } else { 
    console.error(response);
  }}
  
loadAppts();

// async function getSalesData() {
//   const customerResponse = await fetch('http://localhost:8090/api/customers')
//   const carInventoryResponse = await fetch('http://localhost:8090/api/cars')
//   const salesRepResponse = await fetch('http://localhost:8090/api/sales-reps')
//   const salesListResponse = await fetch('http://localhost:8090/api/sales')
//   const manufacturerResponse = await fetch('http://localhost:8090/api/manufacturers')
//   const vehicleModelResponse = await fetch('http://localhost:8090/api/models')
// }
// if (
//   customerResponse.ok &&
//   carInventoryResponse.ok &&
//   salesRepResponse.ok &&
//   salesListResponse.ok &&
//   manufacturerResponse.ok &&
//   vahicleModelResponse.ok
// ) {
//   const customersData = await customerResponse.json();
//   const carInventoryData = await carInventoryData.json();
//   const salesRepData = await salesRepResponse.json();
//   const salesListData = await salesListResponse.json();
//   const manufacturerData = await manufacturerResponse.json();
//   const vehicleModelData = await vehicleModelResponse.json();
//   root.render(
//     <React.StrictMode>
//       <App
//       customers={customersData.customers}
//       cars={carInventoryData.Cars}
//       salesReps={salesRepData.Sales_Reps}
//       salesList={salesListData.sales}
//       manufacturers={manufacturerData.manufacturers}
//       />
//     </React.StrictMode>
//   )
// }
// getSalesData();
