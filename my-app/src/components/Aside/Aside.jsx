import React from 'react';
import classes from './Aside.module.css';

const Aside = () => {
    return <div className={classes.Aside}>
        <div className={classes.item}>
            <a href='/Profile'>Profile</a>
        </div>
        <div className={classes.item}>
            <a href='/Dialogs'>Message</a>
        </div>
        <div className={classes.item}>
            <a href='/Music'>Music</a>
        </div>
        <div className={classes.item}>
            <a href='/News'>News</a>
        </div>
        <div className={classes.item}>
            <a href='/Settings'>Settings</a>
        </div>
    </div>
}

export default Aside;