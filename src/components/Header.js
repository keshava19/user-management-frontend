import React from 'react';

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "#1c2434",
        color: '#dee4ee',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>User Management</h1>
        </div>
    )
}