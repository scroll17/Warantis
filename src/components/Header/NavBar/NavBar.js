import React  from 'react';
import style from './NavBar.module.sass';

function Header() {
    return (
        <div className={style.header}>
            <a className={style.logo} href={"/"} />

            <ul className={style.list}>
                <li>О нас</li>
                <li>Инвесторам</li>
                <li>Партнерская программа</li>
                <li>FAQ</li>
                <li>Новости</li>
                <li>БЛОГ</li>
                <li>Обратная связь</li>
            </ul>

            <div className={style.authentic}>
                <button>Войти</button>
                <button>Зарегестрироваться</button>
            </div>

            <div className={style.lang}>
                EN
            </div>
        </div>
    );


}

export default Header;
