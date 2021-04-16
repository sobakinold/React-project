import React from 'react';
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
                {/* <div className={classes.textarea}> */}
                <textarea name="" id="" cols="" rows="5"></textarea>
                {/* </div> */}
            </div>
            <div className={classes.button}>
                <button>Go</button>
            </div>
            <div className={classes.allPosts}>
                <div className={classes.avatar1}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className={classes.userPosts}>
                    <div className={classes.post}>Post-1</div>
                </div>
                <div className={classes.avatar2}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className={classes.userPosts}>
                    <div className={classes.post}>Post-2</div>
                </div>
                <div className={classes.avatar3}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className={classes.userPosts}>
                    <div className={classes.post}>Post-3</div>
                </div>
                {/* <div className={classes.avatar}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className={classes.userPosts2} borderPosts>
                    Post-2
      </div>
                <div className={classes.avatar}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className={classes.userPosts3} borderPosts>
                    Post-3
      </div> */}
            </div>
        </div>
    </div>
}

export default Profile;