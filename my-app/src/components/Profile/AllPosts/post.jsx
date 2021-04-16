import React from 'react';
import classes from './post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <div classes={classes.img}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
            </div>
            <div className={classes.post}>Post</div>
        </div>
    )
}

export default Post;