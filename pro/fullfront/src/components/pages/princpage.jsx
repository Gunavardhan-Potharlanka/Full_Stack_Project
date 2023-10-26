import React, { useState } from 'react'
const Princpage = () => {
    const [val, setval] = useState(0);
    // const handle = (ind)=>{
    //     document.getElementById('navbar').children[val].className="col-md-12 card p-2"
    //     setval(ind)
    //     document.getElementById('navbar').children[val].className="col-md-12 card p-2 bg-primary text-white"
    // }
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md p-3"><h1 className="fs-1 text-center">Welcome Guna</h1></div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-2 mx-3">
                <div className="row" id='navbar'>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Dashboard</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Profile</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>HODs</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Staff</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Students</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Change Password</div>
                    <div className="col-md-12 card p-2 mb-1" role='button'>Logout</div>
                </div>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md border border-1 py-2 px-5 mx-2 rounded">
                        <div className="row mt-2 fw-bold">
                            <div className="col-md">Department</div>
                            <div className="col-md">Percentage of attendance</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md">Computer Science and Engineering</div>
                            <div className="col-md">69%</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md">Electronics and Communication Engineering</div>
                            <div className="col-md">69%</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md">Civil Engineering</div>
                            <div className="col-md">69%</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md">Mechanical Engineering</div>
                            <div className="col-md">69%</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md">Information Technology</div>
                            <div className="col-md">69%</div>
                        </div>
                        <hr></hr>
                        <div className="row mb-2">
                            <div className="col-md">Artificial Intelligence and Machine Learning</div>
                            <div className="col-md">69%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Princpage