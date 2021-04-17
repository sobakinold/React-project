import React from 'react';
import Post from './AllPosts/post';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.article}>
        <div className={classes.img}></div>
        <div className={classes.content}>
            <div className={classes.avaDiscript}>
                <img className={classes.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
            </div>
            <div className={classes.discript}>Discript</div>
            <div className={classes.myPosts}>
                <textarea name="" id="" cols="" rows="5"></textarea>
            </div>
            <div className={classes.button}>
                <button>Add post</button>
            </div>
            <div className={classes.allPosts}>
                <Post message='Привет, как дела?' />
                <Post message='Все нормально! Как сам?' />
            </div>
        </div>
    </div>
}

export default Profile;