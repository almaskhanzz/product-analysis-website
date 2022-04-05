import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './NotFound.css';
const NotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p>The resource requested could not be found on this server or its temporarily unavailable.</p>
                <CustomLink to='/home'>GO TO HOME</CustomLink>
            </div>
        </div>
    );
};

export default NotFound;