import React from 'react';
import classes from './DialogWindow.module.css';

const DialogWindow = (props) => {
    return (
        <div className={classes.dialog}>
            {props.message}
        </div>
    )
}

export default DialogWindow;