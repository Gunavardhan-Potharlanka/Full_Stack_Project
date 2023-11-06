import axios from 'axios';
import React, { useState } from 'react'

const Rmstuds = () => {
    const [stud, setstud] = useState({roll:'', fname:'', lname:'', mble:'', mail:'', dad:'',  mom:''});
    const [roll, setroll] = useState('');
    const handle = async(e)=>{
        e.preventDefault();
        await axios.get('http://localhost:5000/studbyid/'+roll).then(res=>{
            if(res.data=="Couldn't find") alert("Couldn't find student!");
            else setstud(res.data[0]);
        });
    }
    const handle2 = async(e)=>{
        e.preventDefault();
        let sure = confirm('Are you sure you want to delete ?');
        if(sure){
            await axios.delete('http://localhost:5000/rmstudentbyid/'+roll).then(res=>{
                alert('Student deleted successfull');
            });
        }
        setstud({roll:'', fname:'', lname:'', mble:'', mail:'', dad:'',  mom:''});
        setroll('');
    }
  return (
    <div className='col-md-9'>
        <div className="row">
            <div className="col-md border border-1 rounded p-2">
                <form className='d-flex gap-3 mb-2'>
                    <input type='text' value={roll} onChange={(e)=> setroll(e.target.value)} placeholder='Enter Roll Number' className='form-control' /> {(stud.roll!='')?<input className='btn btn-danger' type='submit' value={'Delete'} onClick={handle2} />:<input className='btn btn-primary' type='submit' value={'Search'} onClick={handle}/>}
                </form>
                {(stud.roll!='')?
                    <table className='table'>
                        <tr>
                            <th className='border border-1 p-2'>Roll No</th>
                            <th className='border border-1 p-2'>First Name</th>
                            <th className='border border-1 p-2'>Last Name</th>
                            <th className='border border-1 p-2'>Mobile</th>
                            <th className='border border-1 p-2'>Email</th>
                            <th className='border border-1 p-2'>Father's Name</th>
                            <th className='border border-1 p-2'>Mother's Name</th>
                        </tr>
                        <tr>
                            <td className='border border-1 p-2'>{stud.roll}</td>
                            <td className='border border-1 p-2'>{stud.fname}</td>
                            <td className='border border-1 p-2'>{stud.lname}</td>
                            <td className='border border-1 p-2'>{stud.mble}</td>
                            <td className='border border-1 p-2'>{stud.mail}</td>
                            <td className='border border-1 p-2'>{stud.dad}</td>
                            <td className='border border-1 p-2'>{stud.mom}</td>
                        </tr>
                    </table>
                :<></>}
                
            </div>
        </div>
    </div>
  )
}

export default Rmstuds;