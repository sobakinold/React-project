import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItems.module.css';

const DialogItems = () => {
    return (
        < div className={classes.dialog_items} >
            <ul>
                <li className={classes.item + " " + classes.active}><NavLink to='/Dialogs/1'>Дима</NavLink></li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/2'>Антон</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/3'>Светлана</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/4'>Сергей</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/5'>Владимир</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/6'>Маша</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/Dialogs/7'>Валерий</NavLink>
                </li>
            </ul>
        </div >
    )
}

export default DialogItems;