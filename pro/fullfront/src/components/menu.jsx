import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='d-flex justify-content-center gap-3 mb-5'>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Educator
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className='dropdown-item text-decoration-none' to={'./logins/princ'}>Prinicipal</Link></li>
                <li><Link className='dropdown-item text-decoration-none' to={'./logins/hod'}>Head of Department</Link></li>
                <li><Link className='dropdown-item text-decoration-none' to={'./logins/proctor'}>Staff</Link></li>
            </ul>
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student/Parent
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className='dropdown-item text-decoration-none' to={'./logins/parent'}>Parent</Link></li>
                <li><Link className='dropdown-item text-decoration-none' to={'./logins/student'}>Student</Link></li>
            </ul>
        </div>  
    </div>
  )
}

export default Menu;