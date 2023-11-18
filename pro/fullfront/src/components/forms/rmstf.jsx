import axios from 'axios';
import React, { useState } from 'react'
const Rmstf = () => {
    const [stud, setstud] = useState({eid:'', fname:'', lname:'', mble:'', mail:'', edu:'',  dt:''});
    const [roll, setroll] = useState('');
    const handle = async(e)=>{
        e.preventDefault();
        await axios.get('http://localhost:5000/staffbyid/'+roll).then(res=>{
            if(res.data=="Couldn't find") alert("Couldn't find Employee!");
            else setstud(res.data[0]);
        });
    }
    const handle2 = async(e)=>{
        e.preventDefault();
        let sure = confirm('Are you sure you want to delete ?');
        if(sure){
            await axios.delete('http://localhost:5000/rmstaffbyid/'+roll).then(res=>{
                alert('Employee removed successfull');
            });
        }
        setstud({eid:'', fname:'', lname:'', mble:'', mail:'', edu:'',  dt:''});
        setroll('');
    }
  return (
    <div className='col-md-9'>
        <div className="row">
            <div className="col-md border border-1 rounded p-2">
                <form className='d-flex gap-3 mb-2'>
                    <input type='text' value={roll} onChange={(e)=> setroll(e.target.value)} placeholder='Enter Employee Id' className='form-control' /> {(stud.eid!='')?<input className='btn btn-danger text-danger' type='submit' value={'Delete'} onClick={handle2} />:<input className='btn btn-primary text-primary' type='submit' value={'Search'} onClick={handle}/>}
                </form>
                {(stud.eid!='')?
                    <table className='table'>
                        <tr>
                            <th className='border border-1 p-2'>Employee Id</th>
                            <th className='border border-1 p-2'>First Name</th>
                            <th className='border border-1 p-2'>Last Name</th>
                            <th className='border border-1 p-2'>Mobile</th>
                            <th className='border border-1 p-2'>Email</th>
                            <th className='border border-1 p-2'>Qualification</th>
                            <th className='border border-1 p-2'>Date of Joining</th>
                        </tr>
                        <tr>
                            <td className='border border-1 p-2'>{stud.eid}</td>
                            <td className='border border-1 p-2'>{stud.fname}</td>
                            <td className='border border-1 p-2'>{stud.lname}</td>
                            <td className='border border-1 p-2'>{stud.mble}</td>
                            <td className='border border-1 p-2'>{stud.mail}</td>
                            <td className='border border-1 p-2'>{stud.edu}</td>
                            <td className='border border-1 p-2'>{stud.dt}</td>
                        </tr>
                    </table>
                :<></>}
                
            </div>
        </div>
    </div>
  )
}

export default Rmstf