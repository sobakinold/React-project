import React from 'react';
import classes from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import DialogWindow from './DialogWindow/DialogWindow';


let itemsData = [
    { id: 1, name: "Дима" },
    { id: 2, name: "Антон" },
    { id: 3, name: "Светлана" },
    { id: 4, name: "Сергей" },
    { id: 5, name: "Владимир" },
    { id: 6, name: "Маша" },
    { id: 7, name: "Валерий" }
]

let dialogData = [
    { id: 1, message: "Привет! Как дела?" },
    { id: 2, message: "Зашибись! Сам как?" },
    { id: 3, message: "Нормально" }
]

let itemsElement = itemsData.map(item => <DialogItems name={item.name} id={item.id} />)

let dialogElement = dialogData.map(dialog => <DialogWindow message={dialog.message} />)

const Dialogs = () => {
    return (
        <div className={classes.content}>
            < div className={classes.dialogs} >
                <div className={classes.dialogItems}>
                    {/* Создаю компонент "DialogItems" */}
                    {itemsElement}
                    {/* <DialogItems name={itemsData[0].name} id={itemsData[0].id} />
                    <DialogItems name={itemsData[1].name} id={itemsData[1].id} />
                    <DialogItems name={itemsData[2].name} id={itemsData[2].id} />
                    <DialogItems name={itemsData[3].name} id={itemsData[3].id} />
                    <DialogItems name={itemsData[4].name} id={itemsData[4].id} />
                    <DialogItems name={itemsData[5].name} id={itemsData[5].id} />
                    <DialogItems name={itemsData[6].name} id={itemsData[6].id} /> */}
                </div>
            </ div>
            <div className={classes.dialog_window}>
                {dialogElement}
                {/* <DialogWindow message={dialogData[0].message} id={dialogData[0].id} />
                <DialogWindow message={dialogData[1].message} id={dialogData[1].id} />
                <DialogWindow message={dialogData[2].message} id={dialogData[2].id} /> */}
            </div>
        </div>
    )
}

export default Dialogs;