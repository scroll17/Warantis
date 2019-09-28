import React from 'react';
import style from './Footer.module.sass';

import List from "./List/List";

function Footer() {

    return (
        <div className={style.footer}>
            <List
                title={"ГЛАВНОЕ"}
                items={["Главная страница", "Блог", "Новости"]}
            />
            <List
                title={"УЗНАТЬ"}
                items={["О нас", "FAQ", "Инвесторам", "Партнерская программа", "Обратная связь"]}
            />
            <List
                title={"ДОКУМЕТЫ"}
                items={["Пользовательское соглашение", "Политика конфедициальности", "Официальные документы"]}
            />
            <List
                title={"АККАУНТ"}
                items={["Войти на сайт", "Зарегистрироваться"]}
            />
        </div>
    );
}
export default Footer;
