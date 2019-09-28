import React from 'react';
import style from './ProtectionLi.module.sass';


function ProtectionLi(props) {
    const { text, linkText, link } = props;
    return (
        <li className={style.li}>
            <p/>
            <p>
                <span>
                    {text}
                </span>
                <a href={link}>{linkText}</a>
            </p>
        </li>
    );


}

export default ProtectionLi;
