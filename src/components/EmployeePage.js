import React from 'react'
import Header from './Header'

function EmployeePage({selectedEmployee}) {
  return (
    <div className='employee-page'>
      <Header value="Employee"/>
      <div className='employee-full-info'>
        <div className='employee-page-picture'>
          <img className='employee-page-picture-photo' src={selectedEmployee?.photo} alt="employee page profile"/>
        </div>
        <div className='employee-page-name'>{selectedEmployee?.name}</div>
        <div className='employee-page-position'>{selectedEmployee?.position}</div>
        <div className='employee-page-phone'>Phone: {selectedEmployee?.phoneNumber}</div>
        <div className='employee-page-email'>Email: {selectedEmployee?.email}</div>
      </div>
    </div>
  )
}

export default EmployeePage