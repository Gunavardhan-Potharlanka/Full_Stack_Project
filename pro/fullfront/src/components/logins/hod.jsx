import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
const Hod = (props) => {
    const [permit, setpermit] = useState(false);
    const [usr, setusr] = useState({uname:'', pswd:''});
    const [msg, setmsg] = useState('');
    const [ids, setids] = useState('');

    useEffect(()=>{
        props.call(ids);
        if(ids!='') setpermit(true);
    }, [ids]);

    useEffect(()=>{
        setmsg('');
    }, [usr.uname, usr.pswd]);

    const handle = async() =>{
        await axios.get('http://localhost:5000/hodlogdetails/'+usr.uname).then((res)=>{
            if(res.data.length === 0){
                setmsg('Invalid username or password');
            }
            else{
                if(usr.pswd==='password'){
                    setids(res.data[0].eid);
                }
                else setmsg('Invalid username or password');
            }
        })
    }

    
    if(permit){  
        return <Navigate to="../pages/hodpage" />
    }
    else{
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Head of Department</h5>
                    <p style={{color:'red'}}>{msg}</p>
                    <label htmlFor='usr'>Username</label>
                    <input type='text' name='usr' className='card px-2' onChange={(e)=>setusr({...usr, uname:e.target.value})}/>
                    <label htmlFor='pass'>Password</label>
                    <input type='password' name='pass' className='card mb-2 px-2'  onChange={(e)=>setusr({...usr, pswd:e.target.value})}/>
                    <Link to='../pages/hodpage' className='fs-6'>Forgot password</Link><br></br>
                    <button onClick={handle} className='mt-2 btn btn-primary'>Login</button>
                </div>
            </div>
        )
    }
}

export default Hod