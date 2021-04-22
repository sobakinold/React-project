import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
// import DialogItems from './DialogItems/DialogItems';
// import DialogWindow from './DialogWindow/DialogWindow';


const DialogItems = (props) => {
    let path = '/Dialogs/' + " " + props.id;
    return (<div className={classes.dialog + " " + classes.active}><NavLink to={path}>{props.name}</NavLink></div>)
}

const DialogWindow = (props) => {
    return (
        <div className={classes.dialog_window}>
            <div className={classes.dialog}>
                {props.text}
            </div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.content}>
            < div className={classes.dialogs} >
                <div className={classes.dialogItems}>
                    {/* Создаю компонент "DialogItems" */}
                    <DialogItems name='Дима' id='1' />
                    <DialogItems name='Антон' id='2' />
                    <DialogItems name='Светлана' id='3' />
                    <DialogItems name='Сергей' id='4' />
                    <DialogItems name='Владимир' id='5' />
                    <DialogItems name='Маша' id='6' />
                    <DialogItems name='Валерий' id='7' />
                </div>
            </ div>
            <div className='DialogWindow'>
                <DialogWindow text='Привет! Как дела?' />
                <DialogWindow text='Зашибись! Сам как?' />
                <DialogWindow text='Нормально' />
            </div>
        </div>
    )
}

export default Dialogs;