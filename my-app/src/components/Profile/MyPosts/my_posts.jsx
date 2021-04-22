import React from 'react';
import classes from './my_posts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            <textarea name="" id="" cols="" rows="5"></textarea>
            <div className={classes.button}>
                <button>Add post</button>
            </div>
        </div>
    )
}

export default MyPosts;