import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Princdash from './dashboards/princdash';
import Princpro from './profiles/princpro';
const Princpage = () => {
    const [permit, setpermit] = useState(false);
    
    useEffect(()=>{
        setpermit(!(JSON.parse(localStorage.getItem('loggedinuser')).pos==='PRI'));
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
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link className='text-decoration-none' to={'/pages/princpage'}>Dashboard</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'><Link className='text-decoration-none' to={'profiles/princpro'}>Profile</Link></div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Leaves</div>
                        <div className="col-md-12 card p-0 mb-1" role='button'>
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Students
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/addstud'}>Add Student</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/viewstuds'}>View Students</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/rmstuds'}>Remove Student</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-12 card p-0 mb-1" role='button'>
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Staff
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/addstaff'}>Add Employee</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/viewstaff'}>View Employees</Link></li>
                                <li><Link className='dropdown-item text-decoration-none' to={'forms/rmstaff'}>Remove Employee</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                        <div className="col-md-12 card p-2 mb-1 text-danger" role='button' onClick={setLogout}>Logout</div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Princdash />}/>
                    <Route path='/pages/princpage' element={<Princdash />} />
                    <Route path='/profiles/princpro' element={<Princpro />} />
                </Routes>
            </div>
        </div>
    )
}

export default Princpage