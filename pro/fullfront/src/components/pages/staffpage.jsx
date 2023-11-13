import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Stfdash from './dashboards/stfdash';
import Staffpro from './profiles/staffpro';
const Staffpage = () => {
    const [permit, setpermit] = useState(false);
    
    useEffect(()=>{
        setpermit(!(JSON.parse(localStorage.getItem('loggedinuser')).pos==='STF'));
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
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link className='text-decoration-none' to={'/pages/staffpage'}>Dashboard</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link className='text-decoration-none' to={'profiles/staffpro'}>Profile</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Attendance</div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Students</div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                        <div className="col-md-12 card p-2 mb-1 text-danger" role='button' onClick={setLogout}>Logout</div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Stfdash />} />
                    <Route path='/profiles/staffpro' element={<Staffpro />} />
                </Routes>
            </div>
        </div>
    )
}

export default Staffpage;