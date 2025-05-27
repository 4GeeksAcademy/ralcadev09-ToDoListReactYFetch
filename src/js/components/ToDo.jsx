import React from 'react'

const ToDo = ({ toDo, onDelete}) => {
    return (
        <div className="d-flex justify-content-between align-items-center border todo">
            <p className='m-0 p-2'>
                {toDo.label}
            </p>
            <button className='btn btn-danger ' onClick={onDelete}>
                x
            </button>
        </div>
    )
}

export default ToDo