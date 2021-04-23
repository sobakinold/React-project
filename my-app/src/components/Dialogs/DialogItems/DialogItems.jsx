import React from 'react';
import classes from './DialogItems.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    let path = '/Dialogs/' + " " + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default DialogItems;