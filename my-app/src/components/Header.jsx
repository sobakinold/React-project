import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return <div className={classes.Header}>
        <div className={classes.logo}>
            <img className='ImgHead' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU' />
        </div>
    </div>
}

export default Header;