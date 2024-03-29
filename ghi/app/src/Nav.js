import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/new/">Create Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="models/">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="models/new/">Create Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/new/">Create Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service/">Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service/new/">Schedule Service</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service/technician/">Create Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service/history/">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sales/create">Create Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/sales/by-rep">Rep Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/customer/new">New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/employee/new">New Employee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
