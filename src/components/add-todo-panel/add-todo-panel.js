import { observer } from 'mobx-react';
import React from 'react';
import todoList from '../store/todo-list';

const AddToDoPanel = observer(props => {
    const {todo: {label}, changeLabel, addTask} = todoList;
    return(
        <div>
        <input 
        type='text' 
        placeholder='Введите задачу которую хотите добавить' 
        onChange={e => changeLabel(e.target.value)}
        value={label}
        />
        <button type="submit" onClick={()=> addTask()}>добавить</button>
        </div>
    )
}
)
export default AddToDoPanel;