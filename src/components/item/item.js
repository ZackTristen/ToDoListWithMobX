import { observer } from 'mobx-react-lite';
import React from 'react';
import './item.css'
import todoList from '../store/todo-list';

const Item = observer((props) => {
    const { title, date, important, done, id } = props.data;

    const importantStyle = important ? 'important' : 'not-important';

    const doneStyle = done ? 'done' : 'not-done';
    return (

        <li key={id} className={`${importantStyle} ${doneStyle}`} >
            <div>{title}
                <button onClick={() => todoList.onToggleImportant(id)}>Важное</button>
                <button onClick={() => todoList.deleteItem(id)}>Удалить</button>
                <button onClick = {() => todoList.onToggleDone(id)}>Сделано</button>
                <span>{date}</span>
            </div>
        </li>

    )
})

export default Item;