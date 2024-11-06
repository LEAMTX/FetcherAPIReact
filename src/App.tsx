import { useState } from "react";

import "./App.css";
import EmployeeCard from "./components/EmployeeCard ";

const sampleEmployee = {
  name: {
    first: "Meddie",
    last: "Azure",
  },
  email: "meddie.azure@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3312/api/employees") // changer de route fech
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.result[0]);
      });
  };
  return (
    <div className="App">
      <h1>{employee.email}</h1>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
