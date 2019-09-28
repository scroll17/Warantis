import React from 'react';
import style from './SignUp.module.sass';

import Field from "./Field/Field";

function SignUp() {

    return (
        <div className={style.container}>
            <div className={style.inner}>
                <h2>
                    Поробуй сейчас бесплатно
                </h2>
                <p>
                    <span>
                        Регистрируйтесь сейчас, это абсолютно бесплатно и не займёт более 30 секунд. Кредитная карта не потребуется
                    </span>
                    <span>
                        Вас пригласил administrator@warantis.com
                    </span>
                </p>
                <Field
                    name={"name"}
                    label={"Введите ваше имя и фамилию"}
                />
                <Field
                    name={"email"}
                    label={"Email"}
                />
                <Field
                    name={"password"}
                    label={"Введите пароль"}
                />
                <Field
                    name={"rPassword"}
                    label={"Повторите пароль"}
                />
                <button>
                    ОТКРЫТЬ ДЕПОЗИТ
                </button>
            </div>
        </div>
    );
}
export default SignUp;
