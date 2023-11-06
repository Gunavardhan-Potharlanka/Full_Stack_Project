import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Hodash from './dashboards/hodash';
import Hodprofile from './profiles/hodprofile';
import Addstud from '../forms/addstudform';
const HOD = () => {
    const [permit, setpermit] = useState(false);
    
    useEffect(()=>{
        setpermit(!(JSON.parse(localStorage.getItem('loggedinuser')).pos==='HOD'));
    }, [localStorage.getItem('loggedinuser')]);

    const setLogout = ()=> {
        localStorage.setItem('loggedinuser', JSON.stringify({
            isloggedin: false,
            pos:''
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
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'profiles/hodprofile'}>Profile</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Leaves</div>
                        <div className="col-md-12 card p-0 mb-1" role='button'>
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Students
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/addstud'}>Add Student</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'./logins/hod'}>View Students</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'./logins/proctor'}>Remove Student</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Staff</div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                        <div className="col-md-12 card p-2 mb-1" role='button' onClick={setLogout}>Logout</div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Hodash />} />
                    <Route path='/profiles/hodprofile' element={<Hodprofile />} />
                    <Route path='/forms/addstud' element={<Addstud />}/>
                </Routes>
            </div>
        </div>
    )
}
export default HOD;