import React from 'react'
import EmployeeListItem from './EmployeeListItem'


function EmployeeList({employees,employeeFromIndex}) {
  return (
    <div className='employee-list'>
        {
            employees.map((emp,index)=>{
                return(
                    <EmployeeListItem employee={emp} employeeFromIndex = {employeeFromIndex} key={index}/>
                )
            })
        }
    
    </div>
  )
}

export default EmployeeList