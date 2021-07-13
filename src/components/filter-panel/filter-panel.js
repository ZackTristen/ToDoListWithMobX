import React from 'react';
import todoList from '../store/todo-list';

const FilterPanel = () => {
const {changeFiltering, onToggleStatus} = todoList;
return(
    <div>
        <input 
        type='search' 
        placeholder='Введите задачу' 
        onChange={(e) => changeFiltering(e.target.value)}/>
        <button onClick={() => onToggleStatus('all')} type='submit'>Все задачи</button>
        <button onClick={() => onToggleStatus('done')} type='submit'>Сделанные</button>
        <button onClick={() => onToggleStatus('important')} type='submit'>Только важные</button>
    </div>
)

}

export default FilterPanel;