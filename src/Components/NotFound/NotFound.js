import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='notFound-container'>
            <h1>404</h1>
            <h3>Not Found</h3>
            <p>The resource requested could not be found on this server!</p>
        </div>
    );
};

export default NotFound;