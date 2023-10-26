import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/login'
import HOD from './components/pages/hodpage'
import Princpage from './components/pages/princpage'
import Staffpage from './components/pages/staffpage'
import Parentpage from './components/pages/parentpage'
import Studpage from './components/pages/studpage'
const App = () => {
    let [id, setid] = useState('');
    const callback = (data) =>{
        setid(data);
    }
    useEffect(()=>{
        console.log(id);
    }, [id]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Login call={callback}/>} />
                    <Route path='/pages/hodpage/*' element={<HOD cid={id} />} />
                    <Route path='/pages/princpage/*' element={<Princpage cid={id} />} />
                    <Route path='/pages/parentpage/*' element={<Parentpage cid={id} />} />
                    <Route path='/pages/staffpage/*' element={<Staffpage cid={id} />} />
                    <Route path='/pages/studpage/*' element={<Studpage cid={id} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;