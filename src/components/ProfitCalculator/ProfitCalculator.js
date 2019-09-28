import React, { useState }  from 'react';
import style from './ProfitCalculator.module.sass';

import Input from "./Input/Input";
import Slider from 'react-input-slider';

function ProfitCalculator() {
    const [state, setState] = useState({ x: 50 });

    return (
        <div className={style.container}>
            <div className={style.title}>
                <div>
                    <h2>Калькулятор прибыли</h2>
                    <h4>Оптимальный депозит для Вас и ваших возможностей.</h4>
                </div>
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
                            title={"Выберите валюту"}
                            defaultValue={"BTC"}
                        />
                        <Input
                            title={"Введите депозит"}
                            defaultValue={"300"}
                        />
                        <Input
                            title={"Прибыль в мес."}
                            defaultValue={"14%"}
                        />
                        <Input
                            title={"Прибыль в мес."}
                            defaultValue={"42$"}
                        />
                    </div>
                    <div className={style.progress}>
                        <Slider
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={100}
                            x={state.x}
                            onChange={({ x }) => setState({ x: parseFloat(x) })}
                        />
                    </div>
                </div>
            </div>
            <div className={style.open}>
                <button>
                    ОТКРЫТЬ ДЕПОЗИТ
                </button>
                <p>
                    <span>
                        Открывая депозит вы соглашаетесь с правилами сайта
                        min / max deposit - 30$ / 30 000$ or 0.003btc / 3 btc
                        Минимальная сумма для создания заявки на вывод средств 1$ или 0.0003 BTC
                    </span>
                    <span>
                        Регламент обработки заявки 24 часа.
                        Закрытие депозита до 40 дней комиссия 19%
                        Закрытие депозита после 40 дней комиссия 0%
                    </span>
                </p>
            </div>
        </div>
    );


}

export default ProfitCalculator;
