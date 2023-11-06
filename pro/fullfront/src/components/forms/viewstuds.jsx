import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewstuds = () => {
    const [studs, studlist] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/studs').then((res)=>{
            studlist(res.data);
            console.log(studs);
        });
    }, [studs]);

  return (
    <div className='col-md-9'>
        <div className="row">
            <div className="col-md border border-1 rounded p-2">
                <table className='table'>
                    <th className='border border-1 p-2'>Roll No</th>
                    <th className='border border-1 p-2'>First Name</th>
                    <th className='border border-1 p-2'>Last Name</th>
                    <th className='border border-1 p-2'>Mobile</th>
                    <th className='border border-1 p-2'>Email</th>
                    <th className='border border-1 p-2'>Father's Name</th>
                    <th className='border border-1 p-2'>Mother's Name</th>
                    {
                        studs.map((ele)=>{
                            return(
                                <tr>
                                    <td className='border border-1 p-2'>{ele.roll}</td>
                                    <td className='border border-1 p-2'>{ele.fname}</td>
                                    <td className='border border-1 p-2'>{ele.lname}</td>
                                    <td className='border border-1 p-2'>{ele.mble}</td>
                                    <td className='border border-1 p-2'>{ele.mail}</td>
                                    <td className='border border-1 p-2'>{ele.dad}</td>
                                    <td className='border border-1 p-2'>{ele.mom}</td>
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

export default Viewstuds;