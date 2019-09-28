import React  from 'react';
import style from './ProfitCalculator.module.sass';

import Input from "./Input/Input";

function ProfitCalculator() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p>
                    <h2>Калькулятор прибыли</h2>
                    <h4>Оптимальный депозит для Вас и ваших возможностей.</h4>
                </p>
                <p>
                    <span>Прибыль  в сутки</span>
                    <span>0,4-0,5%</span>
                </p>
            </div>
            <div className={style.calculator}>
                <div className={style.dep}>
                    <div className={style.buttons}>
                        <span>
                            Депозиты
                        </span>
                        <button>
                            START
                        </button>
                        <button>
                            OPTIMAL
                        </button>
                        <button >
                            PROGRESSIVE
                        </button>
                    </div>
                </div>
                <div className={style.controls}>
                    <div className={style.inputs}>
                        <Input
                            title={"Введите депозит"}
                            defaultValue={"14%"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );


}

export default ProfitCalculator;
