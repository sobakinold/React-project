import React from 'react';
import './Aside.css';

const Aside = () => {
    return <div className='Aside'>
        <div>
            <a href='#'>Profile</a>
        </div>
        <div>
            <a href="#">Message</a>
        </div>
        <div>
            <a href="#">Music</a>
        </div>
        <div>
            <a href="#">News</a>
        </div>
        <div>
            <a href="#">Settings</a>
        </div>
    </div>
}

export default Aside;