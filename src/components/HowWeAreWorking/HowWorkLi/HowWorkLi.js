import React from 'react';
import style from './HowWorkLi.module.sass';


function ProtectionLi(props) {
    const { src, title, text } = props;
    const bgImageStyle = {
        //backgroundImage: `url(../../../../images/howWeAreWorking/how-work-0${src}.svg)`
    };

    return (
        <li className={style.li}>
            <p style={bgImageStyle}>
                <span>{src}</span>
            </p>
            <p>
                <span>
                    {title}
                </span>
                <span>
                    {text}
                </span>
            </p>
        </li>
    );


}

export default ProtectionLi;
