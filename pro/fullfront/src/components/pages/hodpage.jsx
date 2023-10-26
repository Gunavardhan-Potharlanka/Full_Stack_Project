import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Hodash from './dashboards/hodash';
import Hodprofile from './profiles/hodprofile';
import axios from 'axios';
const HOD = (props) => {
    const [data, setData] = useState({eid:'', fname:'', lname:'', mail:'', mobile:'', branch:'', edu:''})
    // const [val, setval] = useState(0);
    // const handle = (ind)=>{
    //     document.getElementById('navbar').children[val].className="col-md-12 card p-2"
    //     setval(ind)
    //     document.getElementById('navbar').children[val].className="col-md-12 card p-2 bg-primary text-white"
    // }
    useEffect(()=>{
        axios.get('http://localhost:5000/hoddetails/'+props.cid).then((res)=>{
            setData({
                ...data,
                eid: res.data[0].eid,
                fname: res.data[0].fname,
                lname: res.data[0].lname,
                mail: res.data[0].mail,
                mobile: res.data[0].mble,
                branch: res.data[0].branch,
                edu: res.data[0].edu
            });
        })
    })
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md p-3"><h1 className="fs-1 text-center">Welcome {data.fname}</h1></div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mx-3">
                <div className="row" id='navbar'>
                    <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'/pages/hodpage/dashboards/hodash'}>Dashboard</Link></div>
                    <div className="col-md-12 card p-2 mb-1" role='button'><Link to={'/pages/hodpage/profiles/hodprofile'}>Profile</Link></div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Leaves</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Students</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Staff</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Logout</div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Hodash />} />
                <Route path='/dashboards/hodash' element={<Hodash />} />
                <Route path='/profiles/hodprofile' element={<Hodprofile data={data}/>} />
            </Routes>
        </div>
    </div>
  )
}

export default HOD