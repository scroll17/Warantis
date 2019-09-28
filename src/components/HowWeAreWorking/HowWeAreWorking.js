import React  from 'react';
import style from './HowWeAreWorking.module.sass';

import HowWorkLi from './HowWorkLi/HowWorkLi'

function HowWeAreWorking() {
    return (
        <div className={style.container}>
            <p>
                <span>ПОЗНАКОМТЕСЬ</span>
                <span>
                    Как мы работаем?
                </span>
            </p>
            <ul>
                <HowWorkLi
                    src={"1"}
                    title={"Регистрация  в системе"}
                    text={'от 60 секунд'}
                />
                <HowWorkLi
                    src={"2"}
                    title={"Открытие депозита в системе"}
                    text={'от 60 секунд'}
                />
                <HowWorkLi
                    src={"3"}
                    title={"Подкючение средств  к портфелю"}
                    text={'от 60 секунд'}
                />
                <HowWorkLi
                    src={"4"}
                    title={"Вывод прибыли"}
                    text={'от 60 секунд'}
                />
                <HowWorkLi
                    src={"5"}
                    title={"Создание команды"}
                    text={'от 60 секунд'}
                />
            </ul>
        </div>
    );


}

export default HowWeAreWorking;
