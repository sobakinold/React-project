import React from 'react';
import classes from './Aside.module.css';

const Aside = () => {
    return <div className={classes.Aside}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={classes.item}>
            <a>Message</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </div>
}

export default Aside;