import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Aside.module.css';

const Aside = () => {
    return <div className={classes.Aside}>
        <div className={classes.item}>
            {/* Изменяю "href" на "NavLink" для того, что бы перезагружать не страницу, а компоненты */}
            <NavLink to='/Profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Dialogs' activeClassName={classes.activeLink}>Message</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/News' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
    </div >
}

export default Aside;