import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    return(
        <div className="display-board">
            <h4 style={{color: '#64748b'}}>Total Users</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-info">Get all Users</button>
            </div>
        </div>
    )
}