import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
const Addstf = (props) => {
    const [studdata,setstuddata] = useState({eid:'',dt:'',fname:'',lname:'',mail:'',mble:'',dept:props.dept,edu:'',passwd:''});
    const handleStud = (e) => {
            e.preventDefault()
            console.log(studdata)
            axios.post('http://localhost:5000/addStaff',{studdata}).then((res) => {
                console.log(res.data);
                alert('Employee added successfully');
                setstuddata({eid:'',dt:'',fname:'',lname:'',mail:'',mble:'',dept:props.dept,edu:'',passwd:''});
            })
    }

    return (
    <div className="col-md-9">
        <div className="row">
            <div className="col-md border border-1 p-2 rounded">

                <form onSubmit={handleStud}>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Employee Id</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.eid} onChange={(e) => setstuddata({...studdata, eid:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Date of Joining</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='date' value={studdata.dt} onChange={(e) => setstuddata({...studdata, dt:e.target.value})} required/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>FirstName</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.fname} onChange={(e) => setstuddata({...studdata, fname:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>LastName</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.lname} onChange={(e) => setstuddata({...studdata, lname:e.target.value})} required/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Mobile</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='tel' value={studdata.mble} onChange={(e) => setstuddata({...studdata, mble:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Password</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='password' value={studdata.passwd} onChange={(e) => setstuddata({...studdata, passwd:e.target.value})} required/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Email</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='email' value={studdata.mail} onChange={(e) => setstuddata({...studdata, mail:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Branch</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='tel' value={studdata.dept} onChange={(e) => setstuddata({...studdata, dept:e.target.value})} required/>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Qualification</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.edu} onChange={(e) => setstuddata({...studdata, edu:e.target.value})} required/>
                        </div>
                    </div>
                    <input type='submit' className='btn btn-primary mt-2'/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Addstf