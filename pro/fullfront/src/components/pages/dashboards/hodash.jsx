import React from 'react'
const Hodash = () => {
  return (
    <div className="col-md-9">
        <div className="row p-0 mb-2">
            <div className="col border border-1 p-2 mx-2 text-center rounded">Pending</div>
            <div className="col border border-1 p-2 mx-2 text-center rounded">Approved</div>
            <div className="col border border-1 p-2 mx-2 text-center rounded">Declined</div>
        </div>
        <div className="row">
            <div className="col-md m-2 p-2 border border-1 rounded">
                Recents
            </div>
        </div>
    </div>
  )
}

export default Hodash