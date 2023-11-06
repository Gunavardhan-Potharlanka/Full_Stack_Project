import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Studash from './dashboards/studash';
import Stupro from './profiles/stupro';
const Studpage = () => {
    const [permit, setpermit] = useState(false);
    
    useEffect(()=>{
        setpermit(!(JSON.parse(localStorage.getItem('loggedinuser')).pos==='STU'));
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
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'/pages/studpage'}>Dashboard</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'profiles/stupro'}>Profile</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Previous</div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Apply Leave</div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                        <div className="col-md-12 card p-2 mb-1" role='button' onClick={setLogout}>Logout</div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Studash />} />
                    <Route path='/profiles/stupro' element={<Stupro />} />
                </Routes>
            </div>
        </div>
    )
}

export default Studpage;