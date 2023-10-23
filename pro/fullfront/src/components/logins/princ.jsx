import React from 'react'

const Princ = () => {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Prinicipal</h5>
            <label htmlFor='usr'>Username</label>
            <input type='text' name='usr' className='card px-2'/>
            <label htmlFor='pass'>Password</label>
            <input type='text' name='pass' className='card mb-2 px-2'/>
            <a href="#" className="btn btn-primary">Login</a>
        </div>
    </div>
  )
}

export default Princ