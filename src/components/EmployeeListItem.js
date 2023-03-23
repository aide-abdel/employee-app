import React from 'react'

function EmployeeListItem({employee,employeeFromIndex}) {


  return (
    <div className='employee-list-item' onClick={()=>employeeFromIndex(employee.id)}>
        <div className='employee-pic'>
            <img className='employee-pic-img' src={employee.photo} alt='employee profile'/>
        </div>
        <div className='employee-info'>
            <div className='employee-name'>{employee.name}</div>
            <div className='employee-position'>{employee.position}</div>
        </div>
        
    </div>
  )
}

export default EmployeeListItem