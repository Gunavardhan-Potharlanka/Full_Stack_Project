import React from 'react'
import { Navigate } from 'react-router-dom';
const Stupro = () => {
  let usrdata = JSON.parse(localStorage.getItem('loggedinuser'));

  if(usrdata.pos!='STU') return <Navigate to='/' />
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md border border-1 p-2 rounded">
          <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Admission No: </th>
                    <td scope='col'>{usrdata.adm}</td>
                    <th scope='col'>Registration No: </th>
                    <td scope='col'>{usrdata.id}</td>
                </tr>
            </thead>
            <tbody>
                <tr scope='row'>
                    <th>FirstName: </th>
                    <td>{usrdata.fname}</td>
                    <th>LastName: </th>
                    <td>{usrdata.lname}</td>
                </tr>
                <tr scope='row'>
                    <th>Email: </th>
                    <td>{usrdata.eml}</td>
                    <th>Mobile: </th>
                    <td>{usrdata.mbl}</td>
                </tr>
                <tr scope='row'>
                    <th>Department: </th>
                    <td>{usrdata.branch}</td>
                    <th scope='col'>Date of Joining: </th>
                    <td scope='col'>{usrdata.doj}</td>
                </tr>
                <tr scope='row'>
                    <th>Father Name: </th>
                    <td>{usrdata.dad}</td>
                    <th scope='col'>Mother Name: </th>
                    <td scope='col'>{usrdata.mom}</td>
                </tr>
                <tr scope='row'>
                    <th>Address: </th>
                    <td>{usrdata.addrs}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Stupro;