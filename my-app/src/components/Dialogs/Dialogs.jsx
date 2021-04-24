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

// let dialogData = [
//     { id: 1, message: "Привет! Как дела?" },
//     { id: 2, message: "Зашибись! Сам как?" },
//     { id: 3, message: "Нормально" }
// ]

let itemsElement = itemsData.map(item => <DialogItems name={item.name} id={item.id} />)

// let dialogElement = props.dialogData.map(dialog => <DialogWindow message={dialog.message} />)

const Dialogs = (props) => {

    let dialogElement = props.dialogData.map(dialog => <DialogWindow message={dialog.message} />)


    return (
        <div className={classes.content}>
            <div className={classes.dialogInfo}></div>
            < div className={classes.dialogElem} >
                <div className={classes.dialogItems}>
                    {/* Создаю компонент "DialogItems" */}
                    {itemsElement}
                </div>
            </ div>
            <div className={classes.dialogWindow}>
                {dialogElement}
            </div>
        </div>
    )
}

export default Dialogs;