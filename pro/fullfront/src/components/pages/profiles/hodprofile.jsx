import React from 'react'
import { Navigate } from 'react-router-dom';
const Hodprofile = () => {
  let usrdata = JSON.parse(localStorage.getItem('loggedinuser'));

  if(usrdata.pos!='HOD') return <Navigate to='/' />
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md border border-1 p-2 rounded">
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Employee Id: </th>
                    <td scope='col'>{usrdata.id}</td>
                    <th scope='col'>Date of Joining: </th>
                    <td scope='col'>{usrdata.doj}</td>
                </tr>
            </thead>
            <tbody>
                <tr scope='row'>
                    <th>FirstName:</th>
                    <td>{usrdata.fname}</td>
                    <th>LastName:</th>
                    <td>{usrdata.lname}</td>
                </tr>
                <tr scope='row'>
                    <th>Email:</th>
                    <td>{usrdata.eml}</td>
                    <th>Mobile:</th>
                    <td>{usrdata.mbl}</td>
                </tr>
                <tr scope='row'>
                    <th>Department</th>
                    <td>{usrdata.branch}</td>
                    <th>Qualification</th>
                    <td>{usrdata.quali}</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Hodprofile;