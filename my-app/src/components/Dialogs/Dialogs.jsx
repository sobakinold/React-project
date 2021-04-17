import React from 'react';
import classes from './Dialogs.module.css';

const Dialods = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                Dialogs
            </div>
            <div className={classes.user_nav}>
                <ul>
                    <li>Дима</li>
                    <li>Антон</li>
                    <li>Светлана</li>
                    <li>Сергей</li>
                    <li>Владимир</li>
                    <li>Маша</li>
                    <li>Валера</li>
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

export default Dialods;