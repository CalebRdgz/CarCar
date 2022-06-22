import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ApptCreateForm from './ApptCreateForm';
import ApptList from './ApptList';
import TechnicianCreateForm from './TechnicianCreateForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="service" >
            <Route path="" element={<ApptList />} />
            <Route path="new" element={<ApptCreateForm />} />
            <Route path="technician" element={<TechnicianCreateForm/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
