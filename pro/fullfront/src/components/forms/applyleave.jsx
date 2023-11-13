import axios from 'axios';
import {React, useState} from 'react';
const ApplyLeave = () => {
    const [leave, setdet] = useState({lt:'', from:'', to:'', desc:'', roll:JSON.parse(localStorage.getItem('loggedinuser')).id, name:JSON.parse(localStorage.getItem('loggedinuser')).fname+' '+JSON.parse(localStorage.getItem('loggedinuser')).lname, branch:JSON.parse(localStorage.getItem('loggedinuser')).branch, status:'pending'});
    const sendreq = async(e)=>{
        e.preventDefault();
        console.log(leave);
        await axios.post('http://localhost:5000/addleave', {leave}).then(res=>{
            console.log(res.data);
        });
        alert('Leave Applied');
        setdet({lt:'', from:'', to:'', desc:'', roll:JSON.parse(localStorage.getItem('loggedinuser')).id, name:JSON.parse(localStorage.getItem('loggedinuser')).fname+' '+JSON.parse(localStorage.getItem('loggedinuser')).lname, branch:JSON.parse(localStorage.getItem('loggedinuser')).branch, status:'pending'})
        // axios.get('http://localhost:5000/mailhod/'+JSON.parse(localStorage.getItem('loggedinuser')).branch).then(res=>{
        //     alert('Leave applied successfully');
        //     console.log(res.data);
        // });
    }
  return (
    <div className="col-md-9">
        <div className="row">
            <div className="col-md border border-1 rounded">
                <form onSubmit={(e)=>sendreq(e)}>
                    <label className='mt-2'>Leave Type </label>
                    <input type='text' value={leave.lt} onChange={(e)=>setdet({...leave, lt:e.target.value})} className='form-control' /><br></br>
                    <label>From</label>
                    <input type='date' value={leave.from} onChange={(e)=>setdet({...leave, from:e.target.value})} className='form-control' />
                    <label className='mt-2'>To </label>
                    <input type='date' value={leave.to} onChange={(e)=>setdet({...leave, to:e.target.value})} className='form-control'/>
                    <br />
                    <label>Description</label><br />
                    <textarea value={leave.desc} onChange={(e)=>setdet({...leave, desc:e.target.value})} className='form-control' typeof='text' rows={5} cols={30}></textarea>
                    <br />
                    <input type='submit' className='btn text-success mb-2' value={'Apply'} />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ApplyLeave;