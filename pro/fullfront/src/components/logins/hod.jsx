import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
const Hod = () => {
    const [permit, setpermit] = useState(false);
    const [usr, setusr] = useState({uname:'', pswd:''});
    const [msg, setmsg] = useState('');
    
    useEffect(()=>{
        setpermit(JSON.parse(localStorage.getItem('loggedinuser')).isloggedin && JSON.parse(localStorage.getItem('loggedinuser')).pos==='HOD');
    }, [localStorage.getItem('loggedinuser')]);

    useEffect(()=>{
        setmsg('');
    }, [usr.uname, usr.pswd]);

    const handle = async(e) =>{
        e.preventDefault();
        if(JSON.parse(localStorage.getItem('loggedinuser')).isloggedin && JSON.parse(localStorage.getItem('loggedinuser')).pos!=='HOD') alert('Please logout other user');
        else{
            await axios.get('http://localhost:5000/hodlogdetails/'+usr.uname).then((res)=>{
                console.log(res.data);
                if(res.data.length === 0){
                    setmsg('Invalid username or password');
                }
                else{
                    if(usr.pswd === res.data[0].passwd){
                        localStorage.setItem('loggedinuser', JSON.stringify({
                            isloggedin: true,
                            fname: res.data[0].fname,
                            lname: res.data[0].lname,
                            id: res.data[0].eid,
                            pos: 'HOD',
                            mbl:res.data[0].mble,
                            eml:res.data[0].mail,
                            quali:res.data[0].edu,
                            branch:res.data[0].branch,
                            doj:res.data[0].dt
                        }));
                        window.location.reload();
                    }
                    else setmsg('Invalid username or password');
                }
            })
        }
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
                    <form onSubmit={(e)=>handle(e)}>
                        <label htmlFor='usr'>Username</label>
                        <input type='text' name='usr' className='card px-2' onChange={(e)=>setusr({...usr, uname:e.target.value})} />
                        <label htmlFor='pass'>Password</label>
                        <input type='password' name='pass' className='card mb-2 px-2'  onChange={(e)=>setusr({...usr, pswd:e.target.value})} />
                        <Link to='../pages/hodpage' className='fs-6'>Forgot password</Link><br></br>
                        <input type='submit' className='mt-2 btn btn-primary' value='Login' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Hod;