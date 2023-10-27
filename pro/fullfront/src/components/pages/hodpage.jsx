import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Hodash from './dashboards/hodash';
import Hodprofile from './profiles/hodprofile';
import axios from 'axios';
const HOD = () => {
    const [data, setData] = useState({eid:'', fname:'', lname:'', mail:'', mobile:'', branch:'', edu:''})
    const [permit, setpermit] = useState(false);
    
    useEffect(()=>{
        setpermit(!(JSON.parse(localStorage.getItem('loggedinuser')).isloggedin));
    }, [localStorage.getItem('loggedinuser')]);

    const setLogout = ()=> {
        localStorage.setItem('loggedinuser',JSON.stringify({
            isloggedin: false,
            position: '',
            fname: '',
            lname: '',
            id: ''
        }));
        window.location.reload();
    }

    if(permit) return <Navigate to='/' />
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md p-3"><h1 className="fs-1 text-center">Welcome {JSON.parse(localStorage.getItem('loggedinuser')).fname}</h1></div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mx-3">
                <div className="row" id='navbar'>
                    <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'/pages/hodpage'}>Dashboard</Link></div>
                    <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'/pages/hodpage/profiles/hodprofile'}>Profile</Link></div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Leaves</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Students</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Staff</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                    <div className="col-md-12 card p-2 mb-1" role='button' onClick={setLogout}>Logout</div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Hodash />} />
                <Route path='/dashboards/hodash' element={<Hodash />} />
                <Route path='/profiles/hodprofile' element={<Hodprofile />} />
            </Routes>
        </div>
    </div>
  )
}

export default HOD