import React from 'react';
import style from './List.module.sass';


function List(props) {
    const { title, items } = props;
    return (
        <div className={style.li}>
            <p>{title}</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}
export default List;
