import React from 'react';
import style from './Field.module.sass';


function Field(props) {
    const { name, label } = props;

    return (
        <div className={style.field}>
            <label>{label}</label>
            <input type={"text"} name={name}/>
        </div>
    );
}
export default Field;
