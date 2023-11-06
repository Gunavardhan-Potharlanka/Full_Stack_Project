import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
const Princ = () => {
    const [permit, setpermit] = useState(false);
    const [usr, setusr] = useState({uname:'', pswd:''});
    const [msg, setmsg] = useState('');
    
    useEffect(()=>{
        setpermit(JSON.parse(localStorage.getItem('loggedinuser')).isloggedin);
    }, [localStorage.getItem('loggedinuser')]);

    useEffect(()=>{
        setmsg('');
    }, [usr.uname, usr.pswd]);

    const handle = async() =>{
        await axios.get('http://localhost:5000/princlogdetails/'+usr.uname).then((res)=>{
            if(res.data.length === 0){
                setmsg('Invalid username or password');
            }
            else{
                if(usr.pswd ==='password'){
                    localStorage.setItem('loggedinuser', JSON.stringify({
                        isloggedin: true,
                        position: 'prinicipal',
                        fname: res.data[0].fname,
                        lname: res.data[0].lname,
                        id: res.data[0].eid
                    }));
                    window.location.reload();
                }
                else setmsg('Invalid username or password');
            }
        })
    }

    if(permit){  
        return <Navigate to="../pages/princpage" />
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
                    <Link to='../pages/princpage' className='fs-6'>Forgot password</Link><br></br>
                    <button onClick={handle} className='mt-2 btn btn-primary'>Login</button>
                </div>
            </div>
        )
    }
}

export default Princ