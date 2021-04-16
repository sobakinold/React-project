import React from 'react';
import classes from './Aside.module.css';

const Aside = () => {
    return <div className={classes.Aside}>
        <div className={classes.item}>
            <a href='#'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href="#">Message</a>
        </div>
        <div className={classes.item}>
            <a href="#">Music</a>
        </div>
        <div className={classes.item}>
            <a href="#">News</a>
        </div>
        <div className={classes.item}>
            <a href="#">Settings</a>
        </div>
    </div>
}

export default Aside;