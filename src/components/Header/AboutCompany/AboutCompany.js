import React  from 'react';
import style from './AboutCompany.module.sass';


function AboutCompany() {
    return (
        <div className={style.about}>

            <div className={style.info}>
                <span>
                    Быть инвестором Warantis - это очень прибыльно.
                </span>
                <span>
                    Получи 204% чистой прибыли за год
                </span>
                <button>
                    Открыть депозит
                </button>
                <span>
                    Система работающая на искуственном ителекте по торговле на крипторынке. Важно! Трейдинг может нести риски.
                </span>
                <span className={style.comodoLogo}/>
            </div>

            <div className={style.values}>
                <div className={style.bitcoin}>
                    <div>
                        <p>
                           BITCOIN
                        </p>
                        <p>
                            <span>10344 $</span>
                            <span> +7%</span>
                        </p>
                    </div>
                    <p>
                        Будет просто текст который меняется,  нужно добавить его в словарь
                    </p>
                </div>
                <div className={style.otherCoin}>
                    <div>
                        <p>
                            EtherEum
                        </p>
                        <p>
                            10344 $
                            <span> +7%</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            LITECOIN
                        </p>
                        <p>
                            10344 $
                            <span> +7%</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );


}

export default AboutCompany;
