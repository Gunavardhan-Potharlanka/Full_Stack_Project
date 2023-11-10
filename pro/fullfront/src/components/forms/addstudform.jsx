import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Addstud = (props) => {
    const [studdata,setstuddata] = useState({adm:'',dte:'',fname:'',lname:'',mble:'',dob:'',dad:'',mom:'',mail:'',branch:'',roll:'',passwd:'',text:''});
    
    const handleStud = (e) => {
            e.preventDefault()
            console.log(studdata)
            axios.post('http://localhost:5000/addStud',{studdata})
                .then((res) => {
                console.log(res.data);
                alert('Student added successfully');
                setstuddata({adm:'',dte:'',fname:'',lname:'',mble:'',dob:'',dad:'',mom:'',mail:'',branch:'',roll:'',passwd:'',text:''});
            })
    }

    return (
    <div className="col-md-9">
        <div className="row">
            <div className="col-md border border-1 p-2 rounded">

                <form onSubmit={handleStud}>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Admn No</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.adm} onChange={(e) => setstuddata({...studdata, adm:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Date of Joining</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='date' value={studdata.dte} onChange={(e) => setstuddata({...studdata, dte:e.target.value})} required/>
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
                            <label className='col-form-label'>DOB</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='date' value={studdata.dob} onChange={(e) => setstuddata({...studdata, dob:e.target.value})} required/>
                        </div>  
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-2">
                            <label className='col-form-label'>Father's Name</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.dad} onChange={(e) => setstuddata({...studdata, dad:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Mother's Name</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.mom} onChange={(e) => setstuddata({...studdata, mom:e.target.value})} required/>
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
                            <input className='form-control' type='tel' value={props.dept} onChange={(e) => setstuddata({...studdata, branch:e.target.value})} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <label className='col-form-label'>Roll Number</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='text' value={studdata.roll} onChange={(e) => setstuddata({...studdata, roll:e.target.value})} required/>
                        </div>
                        <div className="col-md-2">
                            <label className='col-form-label'>Password</label>
                        </div>
                        <div className="col-md-4">
                            <input className='form-control' type='password' value={studdata.passwd} onChange={(e) => setstuddata({...studdata, passwd:e.target.value})} required/>
                        </div>
                    </div>
                    <label>Address</label><br />
                    <textarea className='form-control' rows={4} value={studdata.text} onChange={(e) => setstuddata({...studdata, text:e.target.value})} required></textarea>
                    <input type='submit' className='btn btn-primary mt-2'/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Addstud;