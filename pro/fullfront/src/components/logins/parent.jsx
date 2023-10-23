import React from 'react'

const Parent = () => {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Parent</h5>
            <label htmlFor='usr'>Rollno</label>
            <input type='text' name='usr' className='card px-2'/>
            <label htmlFor='pass'>Password</label>
            <input type='text' name='pass' className='card mb-2 px-2'/>
            <a href="#" className="btn btn-primary">Login</a>
        </div>
    </div>
  )
}

export default Parent