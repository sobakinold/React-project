import React from 'react';
import Post from './AllPosts/post';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/profile_info';
import AvaDiscript from './AvaDiscript/ava_discript';
import Discript from './Discript/discript';
import MyPosts from './MyPosts/my_posts';

let postData = [
    { id: 1, message: "Привет, как дела?" },
    { id: 2, message: "Все нормально! Как сам?" }
]

let postElement = postData.map(post => <Post message={post.message} id={post.id} />)

const Profile = (props) => {
    return <div className={classes.article}>
        <ProfileInfo />
        <div className={classes.content}>
            <AvaDiscript />
            <Discript />
            <MyPosts />
            <div className={classes.allPosts}>
                {postElement}
                {/* <Post message={postData[0].message} id={postData[0].id} />
                <Post message={postData[1].message} id={postData[1].id} /> */}
            </div>
        </div>
    </div>
}

export default Profile;