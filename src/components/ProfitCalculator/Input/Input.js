import React  from 'react';
import style from './Input.module.sass';


function Input(props) {
    const { title, defaultValue, type } = props;
    return (
        <div className={style.input}>
            <span>{title}</span>
            <input type={type} defaultValue={defaultValue}/>
        </div>
    );


}

Input.defaultProps = {
    type: "text"
};

export default Input;
