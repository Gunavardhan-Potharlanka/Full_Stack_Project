import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
const StudentLogin = () => {
  const [usr, setusr] = useState({uname:'', pswd:''});
  const handle = () =>{
    console.log(usr.uname, usr.pswd);
    // axios.post('http://localhost:5000/hodlogin', usr).then((res)=>{
    //   console.log(res.data);
    // });
  }
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Student</h5>
            <label htmlFor='usr'>Username</label>
            <input type='text' name='usr' className='card px-2' onChange={(e)=>setusr({...usr, uname:e.target.value})}/>
            <label htmlFor='pass'>Password</label>
            <input type='password' name='pass' className='card mb-2 px-2'  onChange={(e)=>setusr({...usr, pswd:e.target.value})}/>
            <Link to='../pages/studpage' className='fs-6'>Forgot password</Link><br></br>
            <button onClick={handle} className='mt-2 btn btn-primary'>Login</button>
        </div>
    </div>
  )
}

export default StudentLogin