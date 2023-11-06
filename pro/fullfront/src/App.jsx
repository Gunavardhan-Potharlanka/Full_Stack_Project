import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/login'
import HOD from './components/pages/hodpage'
import Princpage from './components/pages/princpage'
import Staffpage from './components/pages/staffpage'
import Parentpage from './components/pages/parentpage'
import Studpage from './components/pages/studpage'
const App = () => {
    if(localStorage.getItem('loggedinuser') == null){
        localStorage.setItem('loggedinuser', JSON.stringify({
            isloggedin: false,
            pos:''
        }));
    }
    console.log(localStorage.getItem('loggedinuser'));
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Login />} />
                    <Route path='/pages/hodpage/*' element={<HOD />} />
                    <Route path='/pages/princpage/*' element={<Princpage />} />
                    <Route path='/pages/parentpage/*' element={<Parentpage />} />
                    <Route path='/pages/staffpage/*' element={<Staffpage />} />
                    <Route path='/pages/studpage/*' element={<Studpage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;