import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Princ from './logins/princ'
import Proctor from './logins/proctor'
import Hod from './logins/hod'
import StudentLogin from './logins/student'
import Parent from './logins/parent'
import Menu from './menu'
const Login = (props) => {
  const [ids, setids] = useState('');
  const callback = (data) =>{
      setids(data);
  }
  useEffect(()=>{
    props.call(ids);
  }, [ids]);
  return (
    <div className='container-md p-5'>
        <div className="row">
            <div className="col-md"><h1 className='text-center text-danger mb-5'>Login as</h1></div>
        </div>
        <div className="row mx-auto">
            <div className="col-md d-flex justify-content-center align-items-center flex-column">
                    <Menu />
                    <Routes>
                        {/* <Route path='/' element={<StudentLogin />} /> */}
                        <Route path='/logins/princ' element={<Princ call={callback}/>} />
                        <Route path='/logins/hod' element={<Hod call={callback} />} />
                        <Route path='/logins/proctor' element={<Proctor call={callback} />} />
                        <Route path='/logins/parent' element={<Parent call={callback} />} />
                        <Route path='/logins/student' element={<StudentLogin call={callback} />} />
                    </Routes>
            </div>   
        </div>
    </div>
  )
}

export default Login