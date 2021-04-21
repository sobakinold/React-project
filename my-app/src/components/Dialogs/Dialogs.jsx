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
            <DialogItems />
            {/* Создаю компонент "DialogPage" */}
            <DialogPage />
        </div>
    )
}

export default Dialogs;