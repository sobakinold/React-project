import React from 'react';
import Post from './AllPosts/post';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/profile_info';
import AvaDiscript from './AvaDiscript/ava_discript';
import Discript from './Discript/discript';
import MyPosts from './MyPosts/my_posts';

const Profile = (props) => {
    return <div className={classes.article}>
        <ProfileInfo />
        <div className={classes.content}>
            <AvaDiscript />
            <Discript />
            <MyPosts />
            <div className={classes.allPosts}>
                <Post message='Привет, как дела?' />
                <Post message='Все нормально! Как сам?' />
            </div>
        </div>
    </div>
}

export default Profile;