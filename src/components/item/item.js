import { observer } from 'mobx-react-lite';
import React from 'react';
import './item.scss'
import todoList from '../store/todo-list';

const Item = observer((props) => {
    const { title, date, important, done, id } = props.data;

    const importantStyle = important ? 'important' : 'not-important';

    const doneStyle = done ? 'done' : 'not-done';
    return (
        <div className='item_container'>
        <li key={id} className={`${importantStyle} ${doneStyle} item_task`} >
            <span className='title'>{title}</span>
        </li>
        
        <div className='btn_flag_container'>
                <button className='important_btn' onClick={() => todoList.onToggleImportant(id)}>Важное</button>
                <button className='delete_btn' onClick={() => todoList.deleteItem(id)}>Удалить</button>
                <button className='done_btn' onClick={() => todoList.onToggleDone(id)}>Сделано</button>
            </div>
            <span className='date'>{date}</span>
        </div>

    )
})

export default Item;