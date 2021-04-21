import React from 'react';
import classes from './DialogPage.module.css';


const DialogPage = () => {
    return (
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
    )
}

export default DialogPage;
