import EmployeePage from './components/EmployeePage';
import HomePage from './components/HomePage';
import './index.css'
import employees from './data.js'
import { useState } from 'react';


function App() {
  const [selectedEmployee,setSelectedEmployee] = useState(null);

  function employeeFromIndex(index){
    const emp = employees.find(e=>e.id === index);
    console.log("index",index);
    console.log("id",emp.id);
    setSelectedEmployee(emp);
  }

  return (
    <div className='app-container'>
     <HomePage employees={employees} employeeFromIndex={employeeFromIndex}/>
     <EmployeePage selectedEmployee={selectedEmployee}/>
    </div>
  );
}

export default App;
