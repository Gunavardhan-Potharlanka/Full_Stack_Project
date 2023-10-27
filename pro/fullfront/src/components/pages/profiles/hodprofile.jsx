import React from 'react'
import { Navigate } from 'react-router-dom';
const Hodprofile = () => {
  let usrdata = JSON.parse(localStorage.getItem('loggedinuser'));
  if(!usrdata.isloggedin) return <Navigate to='/' />
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md border border-1 p-2 rounded">
            <div className="row p-3">
                <div className="col-md">
                    <h5>First Name: {usrdata.fname}</h5>
                </div>
                <div className="col-md">
                    <h5>Last Name: {usrdata.lname}</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hodprofile;