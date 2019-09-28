import React from 'react';
import style from './SaveFond.module.sass';


function SaveFond() {

    return (
        <div className={style.container}>
            <div>
                <span>БУДЬТЕ СПОКОЙНЫ</span>
                <span>Наш страховой фонд</span>
            </div>
            <div>
                Фиксированный % от оборотных средств передается на
                специальные корпоративные корпоративные счета и
                дорбавляется в страховой фонд. Страховой фонд постоянно
                растет и превышает общую сумму инвестиций.
            </div>
            <div>
                <p />
                <p>
                    <span>
                        На данный момент наши активы застрахованы на
                    </span>
                    <span>
                        229 320$
                    </span>
                </p>
            </div>
        </div>
    );
}
export default SaveFond;
