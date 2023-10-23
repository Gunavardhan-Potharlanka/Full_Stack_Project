import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Menu from './components/menu'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Princ from './components/logins/princ'
import Proctor from './components/logins/proctor'
import Hod from './components/logins/hod'
import StudentLogin from './components/logins/student'
import Parent from './components/logins/parent'
const App = () => {
    return (
        <div className='container-md p-5'>
            <div className="row">
                <div className="col-md"><h1 className='text-center text-danger mb-5'>Login as</h1></div>
            </div>
            <div className="row mx-auto">
                <div className="col-md d-flex justify-content-center align-items-center flex-column">
                    <BrowserRouter>
                        <Menu />
                        <Routes>
                            {/* <Route path='/' element={<StudentLogin />} /> */}
                            <Route path='/logins/princ' element={<Princ/>} />
                            <Route path='/logins/hod' element={<Hod />} />
                            <Route path='/logins/proctor' element={<Proctor />} />
                            <Route path='/logins/parent' element={<Parent />} />
                            <Route path='/logins/student' element={<StudentLogin />} />
                        </Routes>
                    </BrowserRouter>
                </div>   
            </div>
        </div>
    )
}
export default App;