import React from 'react'

const ToDo = ({ toDo, onDelete}) => {
    return (
        <div className="d-flex justify-content-between p-2 border todo">
            <p className='m-0'>
                {toDo}
            </p>
            <button className='btn btn-sm btn-danger p-1' onClick={onDelete}>
                x
            </button>
        </div>
    )
}

export default ToDo