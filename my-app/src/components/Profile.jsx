import React from 'react';
import './Profile.css';

const Profile = () => {
    return <div className='Article'>
        <div className='HeaderArt'></div>
        <div className='Content'>
            <div className='AvaDiscript'>
                <img className='AvaUser' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
            </div>
            <div className='Discript'>Discript</div>
            <div className='MyPosts'>
                <textarea name="" id="" cols="" rows="5"></textarea>
            </div>
            <div className="Button">
                <button>Go</button>
            </div>
            <div className='AllPosts'>
                <div className='UsersAva'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className='UserPosts1 borderPosts'>
                    Post-1
      </div>
                <div className='UsersAva'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className='UserPosts2 borderPosts'>
                    Post-2
      </div>
                <div className='UsersAva'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
                </div>
                <div className='UserPosts3 borderPosts'>
                    Post-3
      </div>
            </div>
        </div>
    </div>
}

export default Profile;