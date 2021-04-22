import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import DialogPage from './DialogPage/DialogPage';


const Dialogs = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                Dialogs
            </div>
            {/* Создаю компонент "DialogItems" */}
            <DialogItems name='Дима' id='1' />
            <DialogItems name='Антон' id='2' />
            <DialogItems name='Светлана' id='3' />
            <DialogItems name='Сергей' id='4' />
            <DialogItems name='Владимир' id='5' />
            <DialogItems name='Маша' id='6' />
            <DialogItems name='Валерий' id='7' />
            {/* Создаю компонент "DialogPage" */}
            <DialogPage />
        </div>
    )
}

export default Dialogs;