import axios from 'axios'
import { useEffect, useState, React} from 'react'
const Princdash = () => {
    const [leaves, set] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:5000/alleavedet').then(res=>{
          set(res.data);
      });
    });
    const update = async(val, roll)=>{
      let msg=''
      if(val==1) msg='approved';
      else msg='declined';
      await axios.post('http://localhost:5000/lvstatus', {roll, msg}).then(res=>{
          alert('Leave '+msg);
      });
      // window.location.reload();
    }
    return (
      <div className="col-md-9">
          {/* <div className="row p-0 mb-2">
              <div className="col border border-1 p-2 mx-2 text-center rounded">Pending({leaves.length})</div>
              <div className="col border border-1 p-2 mx-2 text-center rounded">Approved({accept})</div>
              <div className="col border border-1 p-2 mx-2 text-center rounded">Declined({reject})</div>
          </div> */}
          <div className="row">
              <div className="col-md p-2 border border-1 rounded">
                  <h2>Requests</h2>
                  {leaves.length?
                  <table className='table'>
                      <thead>
                          <th scope='col' className='border border-1 p-2'>Roll No</th>
                          <th scope='col' className='border border-1 p-2'>Name</th>
                          <th scope='col' className='border border-1 p-2'>Leave Type</th>
                          <th scope='col' colSpan={2} className='border border-1 p-2'>Actions</th>
                      </thead>
                      <tbody>
                          {
                              leaves.map((ele)=>{
                                  return(
                                      <tr>
                                          <td scope='row' className='border border-1 p-2'>{ele.roll}</td>
                                          <td className='border border-1 p-2'>{ele.name}</td>
                                          <td className='border border-1 p-2'>{ele.lt}</td>
                                          <td className='border border-1 p-2'><button onClick={()=>update(1, ele.roll)} className='btn btn-primary p-2 rounded text-success'>Approve</button></td>
                                          <td className='border border-1 p-2'><button onClick={()=>update(0, ele.roll)} className='btn btn-primary p-2 rounded text-danger'>Decline</button></td>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
                  :<p className='text-center fs-5'>No leave requests at the moment</p>}
              </div>
          </div>
      </div>
    )
}

export default Princdash