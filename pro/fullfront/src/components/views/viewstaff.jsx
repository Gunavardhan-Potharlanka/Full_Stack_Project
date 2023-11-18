import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Viewstaff = (props) => {
  const [studs, studlist] = useState([]);
    console.log(props.dept)
    useEffect(()=>{
        axios.get('http://localhost:5000/staff/'+props.dept).then((res)=>{
            studlist(res.data);
        });
    }, [studs]);

  return (
    <div className='col-md-9'>
        <div className="row">
            <div className="col-md border border-1 rounded p-2">
                <table className='table'>
                    <th className='border border-1 p-2'>Employee id</th>
                    <th className='border border-1 p-2'>First Name</th>
                    <th className='border border-1 p-2'>Last Name</th>
                    <th className='border border-1 p-2'>Mobile</th>
                    <th className='border border-1 p-2'>Email</th>
                    <th className='border border-1 p-2'>Qualification</th>
                    <th className='border border-1 p-2'>Date of joining</th>
                    {
                        studs.map((ele)=>{
                            return(
                                <tr>
                                    <td className='border border-1 p-2'>{ele.eid}</td>
                                    <td className='border border-1 p-2'>{ele.fname}</td>
                                    <td className='border border-1 p-2'>{ele.lname}</td>
                                    <td className='border border-1 p-2'>{ele.mble}</td>
                                    <td className='border border-1 p-2'>{ele.mail}</td>
                                    <td className='border border-1 p-2'>{ele.edu}</td>
                                    <td className='border border-1 p-2'>{ele.dt}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    </div>
  )
}

export default Viewstaff;