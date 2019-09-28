import React  from 'react';
import style from './Header.module.sass';

import NavBar from './NavBar/NavBar'
import AboutCompany from './AboutCompany/AboutCompany'

function Header() {
    return (
        <div className={style.container}>
            <NavBar />
            <AboutCompany />
        </div>
    );


}

export default Header;
