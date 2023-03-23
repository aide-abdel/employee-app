import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'

function HomePage({employees,employeeFromIndex}) {
  return (
    <div className='home-page'>
      <Header value="Employee Directory"/>
      <EmployeeList employees= {employees} employeeFromIndex={employeeFromIndex}/>
      </div>
  )
}

export default HomePage