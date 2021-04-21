import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                Dialogs
            </div>
            <div className={classes.user_nav}>
                <ul>
                    <li className={classes.dialog + " " + classes.active}><NavLink to='/dialog/1'>Дима</NavLink></li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/2'>Антон</NavLink>
                    </li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/3'>Светлана</NavLink>
                    </li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/4'>Сергей</NavLink>
                    </li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/5'>Владимир</NavLink>
                    </li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/6'>Маша</NavLink>
                    </li>
                    <li className={classes.dialog}>
                        <NavLink to='/dialog/7'>Валерий</NavLink>
                    </li>
                </ul>
            </div>
            <div className={classes.dialog_page}>
                <div className={classes.avatar}>
                    <img className={classes.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                    <div className={classes.dialog}>
                        Привет! Как дела?
                    </div>
                </div>
                <div className={classes.avatar}>
                    <img className={classes.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                    <div className={classes.dialog}>
                        Привет! Как дела?
                    </div>
                </div>
                <div className={classes.avatar}>
                    <img className={classes.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                    <div className={classes.dialog}>
                        Привет! Как дела?
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;