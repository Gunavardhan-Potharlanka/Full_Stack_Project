import { Route, Routes } from 'react-router-dom'
import Princ from './logins/princ'
import Proctor from './logins/proctor'
import Hod from './logins/hod'
import StudentLogin from './logins/student'
import Parent from './logins/parent'
import Menu from './menu'
const Login = () => {
  return (
    <div className='container-md p-5'>
        <div className="row">
            <div className="col-md"><h1 className='text-center text-danger mb-5'>Login as</h1></div>
        </div>
        <div className="row mx-auto">
            <div className="col-md d-flex justify-content-center align-items-center flex-column">
                    <Menu />
                    <Routes>
                        <Route path='/logins/princ' element={<Princ />} />
                        <Route path='/logins/hod' element={<Hod />} />
                        <Route path='/logins/proctor' element={<Proctor />} />
                        <Route path='/logins/parent' element={<Parent />} />
                        <Route path='/logins/student' element={<StudentLogin />} />
                    </Routes>
            </div>   
        </div>
    </div>
  )
}
export default Login;