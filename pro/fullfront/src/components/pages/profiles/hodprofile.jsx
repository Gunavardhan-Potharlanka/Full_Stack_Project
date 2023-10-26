import React from 'react'

const Hodprofile = (props) => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md border border-1 p-2 rounded">
            <div className="row p-3">
                <div className="col-md">
                    <h5 className='mt-2'>First Name: {props.data.fname}</h5><hr></hr>
                    <h5>Email: {props.data.mail}</h5><hr></hr>
                    <h5>Branch: {props.data.branch}</h5>
                </div>
                <div className="col-md">
                    <h5 className='mt-2'>Last Name: {props.data.lname}</h5><hr></hr>
                    <h5>Mobile: {props.data.mobile}</h5><hr></hr>
                    <h5>Qualification: {props.data.edu}</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hodprofile;